

console.log("Loaded : Client")
class Client {
    constructor(config) {
        this.app = null;
        console.log("%cCalled : Client", "color:green");
        // this.responseHandler = new ResponseHandler()
        this.config = config
        // this.sendRequest({ action: "Get", entity: "Page" })
    }

    initialize(app) {
        this.app = app;

        // Subscribe to events
        this.app.actionEvent.on('initialized', () => {
            console.log('Client initialized.');

        });
        this.app.actionEvent.on('sendRequest', (req) => {
            this.sendRequest(req)

        });
        this.app.actionEvent.on('receiveResponse', (req) => {
            this.receiveResponse(req)
        });
    }

    sendRequest(input) {
        let requestData = {};
        let requestSchema
        // Handling different types of input
        if (typeof input === 'object' && !(input instanceof Event) && input !== null) {
            console.log("object hoon benstokes");
            // Processing passed object
            requestData = input;
        } else {
            if (input instanceof Event) {
                console.log(this.config.dataSchemas);
                requestSchema = this.config.dataSchemas[input.callback]
                requestData = this.gatherData(input.target, requestSchema.dataSpec)
            } else if (typeof input === "string") {
                if (this.config.dataSchemas[input]) {
                    requestSchema = this.config.dataSchemas[input]
                }
            } else {
                throw new Error('Invalid input type for sendRequest');
            }
            // adding action and entity in req obejct 
            requestData["action"] = requestSchema.action;
            requestData["entity"] = requestSchema.entity;
            requestSchema.callback ? requestData["callback"] = requestSchema.callback : null;
            requestSchema.endpoint ? requestData["endpoint"] = requestSchema.endpoint : null;
            requestSchema.method ? requestData["method"] = requestSchema.method : null;

        }

        // serializing data for methods 
        if (requestSchema) {
            if (requestSchema.method) {
                switch (requestSchema.method) {
                    case "POST":
                        requestData["body"] = requestData.formData
                        break;
                    case "PUT":
                        requestData["body"] = {
                            filter: { "_id": requestData.dataset._id },
                            data: requestData.formData
                        };
                        break;
                    case "GET":
                        requestData["body"] = {
                            filter: { "_id": requestData.dataset._id },
                        };
                    case "DELETE":
                        requestData["body"] = {
                            filter: { "_id": requestData.dataset._id },
                        };

                    default:
                        // Handle any default case or throw an error for unsupported methods
                        break;


                }
            }
        }


        // Send the request to the requestProcessing library
        this.app.actionEvent.emit("handleRequest", requestData);
    }


    gatherData(element, dataSpec) {
        const data = {};

        for (const [key, spec] of Object.entries(dataSpec)) {
            let value;

            // Determine the element to extract data from
            const targetElement = spec.selector ? document.querySelector(spec.selector) : element;
            if (!targetElement) continue;

            switch (spec.source) {
                case 'property':
                    value = targetElement[spec.name];
                    break;
                case 'attribute':
                    value = targetElement.getAttribute(spec.name);
                    break;
                case 'dataset':
                    value = targetElement.dataset[spec.name];
                    break;
                case 'static':
                    value = spec.value;
                    break;
                default:
                    console.warn(`Unknown data source: ${spec.source}`);
                    continue;
            }

            // Apply transformation if provided
            if (spec.transform && typeof spec.transform === 'function') {
                value = spec.transform(value);
            }

            data[key] = value;
        }

        // Add dataset information if available
        if (element.dataset) {
            data.dataset = { ...element.dataset };
        }

        // Add form data if the element is inside a form
        if (element.tagName === 'FORM') {
            const formData = new FormData(element);
            data.formData = {};
            formData.forEach((value, key) => {
                data.formData[key] = value;
            });
        }
        console.log(data);
        return data;
    }

    async receiveResponse(response) {

        switch (response.entity) {
            case 'page':
                let pageArray = response.data.components;
                let pageJson = await this.app.actionEvent.emit("populate", pageArray, "callback");
                let page = await this.app.actionEvent.emit("jsonToHtml", pageJson, "callback")
                this.app.actionEvent.emit("pushToDom", page)
                console.log(response);
                if (response.data.callback) {
                    let callbacks = response.data.callback

                    for (let i = 0; i < callbacks.length; i++) {
                        // Extract properties from the current callback object
                        const { name, arg } = callbacks[i];
                        this.app.responseHandler[name](arg)
                    }
                }
                break
            case 'element':
                this.app.responseHandler.handleElement(response)
                break
            default:
                if (response.callback) {
                    let callbackType = typeof response.callback
                    switch (callbackType) {
                        case "string":
                            this.app.responseHandler[response.callback](response)
                            break;
                        default:
                            let callbacks = response.callback
                            for (let i = 0; i < callbacks.length; i++) {
                                // Extract properties from the current callback object
                                const { name, arg } = callbacks[i];
                                this.app.responseHandler[name](arg, response)
                            }
                            break;
                    }

                }

        }
    }
}

export { Client }