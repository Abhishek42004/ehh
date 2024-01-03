import { ActionEvent } from "../ActionEvent/ActionEvent.js";
import { ActionUri } from "../ActionUri/ActiorUri.js";
import { ActionView } from "../ActionView/ActionView.js";
import { Client } from "../Client/Client.js";
import { Server } from "../Server/Server.js";
import { JsonCrud } from "../../helpers/JsonCrud.js";
import { JsonToHtml } from "../../utils/JsonToHtml/jsonToHtml.js";
import { TemplateEngine } from "../../utils/TemplateEngine/templateEngine.js";
import { RequestExecutor } from "../RequestExecutor/RequestExecutor.js";
import { IndexedDB } from "../../utils/idb/idb.js";
import { ResponseHandler } from "../ResponseHandler/ResponseHandler.js";
import { HttpService } from "../../helpers/HttpService.js";



class App {
  constructor(config) {
    this.actionEvent = new ActionEvent(config)
    this.client = new Client(config)
    this.actionView = new ActionView()
    this.server = new Server(config)
    this.actionUri = new ActionUri()
    this.jsonCrud = new JsonCrud(config)
    this.templateEngine = new TemplateEngine()
    this.jsonToHtml = new JsonToHtml()
    this.requestExecutor = new RequestExecutor()
    this.responseHandler = new ResponseHandler(config)
    this.httpService = new HttpService(config.baseEndpoint)
    config.indexedDB ? this.idb = new IndexedDB(config.indexedDB.dbName) : null
  }

  async initialize(config) {

    this.client.initialize(this);
    this.server.initialize(this);
    this.actionUri.initialize(this);
    this.actionView.initialize(this)
    this.jsonCrud.initialize(this)
    this.jsonToHtml.initialize(this)
    this.templateEngine.initialize(this)
    this.requestExecutor.initialize(this)
    this.responseHandler.initialize(this)
    await this.idb.initialize(config.indexedDB.storesConfig)
    // Trigger initialization event
    this.actionEvent.emit('initialized');

    // Trigger initialization event
    console.log(Date.now());
    this.actionEvent.emit('sendRequest', "loadPage");

    // Example: Trigger a render event based on the initial route
    // this.router.navigate('/home');
  }

  loadConfig(config) {

  }
}

export default App;
