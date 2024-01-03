class ResponseHandler {
    constructor(config) {
        console.log("%cCalled : Response handler", "color:green");
        console.log(config);
        this.config = config
        this.app = null
    }
    initialize(app) {
        this.app = app
    }
    resendRequest(arg) {
        this.app.actionEvent.emit('sendRequest', arg);
    }
    updatePage() {

    }
    async handleElement(res) {
        switch (res.action) {
            case "insert":
                let template = res.data.template;
                let page = await this.app.actionEvent.emit("jsonToHtml", template, "callback")
                this.app.actionEvent.emit("addToDom", page)
                break;
            case "delete":
                let element = res.data

                this.app.actionEvent.emit("removeFromDom", element)
                break;

            default:
                break;
        }
    }
    async addDynamicElement(templateName, response) {
        let page = await this.handleDynamicElement(templateName, response)
        this.app.actionEvent.emit("addToDom", page)
    }
    async replaceDynamicElement(templateName, response) {
        let page = await this.handleDynamicElement(templateName, response)
        this.app.actionEvent.emit("updateDom", page)
    }
    async handleDynamicElement(templateName, response) {
        let data = response.data
        console.log(this.config);
        let templateObj = this.config.templates.find(template => {

            return template.name === templateName
        })
        let array = [{ template: templateObj.template, data: data }]
        let pageJson = await this.app.actionEvent.emit("populate", array, "callback");
        let page = await this.app.actionEvent.emit("jsonToHtml", pageJson, "callback")
        return page

    }
    loginHandler(url, res) {
        this.saveToken(res)
        this.navigate(url)
    }
    registerHandler(url, res) {
        console.log("handleRegister")
        this.navigate(url)
    }
    saveToken(res) {
        localStorage.setItem("token", res.data.result.token)

    }
    navigate(url) {
        this.app.actionEvent.emit('sendRequest', { action: "update", entity: "page", url: url });
    }
}

export { ResponseHandler }