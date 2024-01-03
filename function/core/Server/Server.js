console.log("Loaded : Server")
// import { ActionUri } from "../ActionUri/ActionUri.js";
// import { JsonCrud } from "../../helpers/JsonCrud/JsonCrud.js";
// import { config } from "../../../form/config.js";
// import { Client } from "../Client/Client.js";



class Server {
    constructor() {
        this.app = null
        // This constructor can be expanded to initialize more properties as needed
        console.log("%cCalled : Server", "color:blue");
        
        // this.jsonCrud = new JsonCrud(config)
    }


    initialize(app) {
        this.app = app;

        // Subscribe to events

        this.app.actionEvent.on('initialized', () => {
            console.log('Server initialized.');
        });

        this.app.actionEvent.on('handleRequest', (req) => {
            this.handleRequest(req)
        });
        this.app.actionEvent.on('sendResponse', (req) => {
            this.sendResponse(req)
        });
    }
    async handleRequest(request) {
        console.log(request);
        // Extracting the action and entity from the request object
        const { action, entity } = request;

        // Check if action and entity are provided in the request
        if (!action || !entity) {
            console.error('Invalid request: Action and Entity are required');
            return;
        }

        // Process the request based on action and entity
        console.log(`Processing ${action} on ${entity}`);
        let responseData = await this.app.requestExecutor[action](request, entity)
        request["data"] = responseData

        // Call sendResponse to send back the processed data
        this.app.actionEvent.emit("sendResponse", request)
    }
    processAction(action, entity) {
        // Placeholder for processing logic
        // This method should contain the logic specific to each action and entity
        return `Processed ${action} on ${entity}`;
    }
    sendResponse(responseData) {
        // Send the response back to the client
        console.log('Sending response:', responseData);
        this.app.actionEvent.emit("receiveResponse", responseData)
    }
}

export { Server }
