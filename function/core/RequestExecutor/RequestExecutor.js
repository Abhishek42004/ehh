import { config } from "../../../form/config.js";

class RequestExecutor {
    constructor() {
        this.app = null
    }
    initialize(app) {
        this.app = app;
    }
    async get(req, entity) {

        switch (entity) {
            case "page": {
                console.log(this.app)
                let url = await this.app.actionEvent.emit("getCurrentUrl", null,
                    "callback");
                let decodedUrl = await this.app.actionEvent.emit("unbuildEncodedUrl", url, "callback")
                let datasets = config.routes.find(route => {

                    return route.path === decodedUrl.hash
                })

                return datasets
            }
                break;
            default: {
                let data = await this.app.idb.getAll(entity)
                if (!data) throw new Error(`No ${entity} found`);
                return data
            }

        }

    }
    async getAll(req, entity) {
        console.log(entity);
        let data = await this.app.idb.getAll(entity)
        return data
    }
    update(req, entity) {
        console.log(req);
        switch (entity) {
            case "page": {
                let url = req.url
                this.app.actionEvent.emit("updateHash", url)
                let datasets = config.routes.find(route => {
                    console.log(route.path);
                    console.log(url);
                    return route.path === url
                })
                return datasets

            }

        }

    }
    insert(req, entity) {
        switch (entity) {
            case "element": {
                let element = req.dataset.element
                console.log(element);
                let datasets = config.templates.find(obj => {
                    return obj.name === element
                })
                console.log(datasets);
                return datasets

            }

        }
    }
    async create(req, entity) {
        console.log(req, entity);
        req.formData["id"] = this.generateUniqueId()
        let res = await this.app.idb.add(entity, req.formData)

        return res

    }
    login(req, entity) {
        console.log(req);
        console.log(entity);
    }
    generateUniqueId() {
        const timestamp = Math.floor(new Date().getTime() / 1000).toString(16);
        const machineId = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        const processId = Math.floor(Math.random() * 0xFFFF).toString(16);
        const counter = Math.floor(Math.random() * 0xFFFFFF).toString(16);

        return timestamp + "00".substr(0, 6 - machineId.length) + machineId +
            "00".substr(0, 4 - processId.length) + processId +
            "00".substr(0, 6 - counter.length) + counter;
    }
    delete(req, entity) {
        switch (entity) {
            case "element": {
                let element = req.dataset.element
                return element


            }

        }
    }

    async getOneById(req, entity) {
        let id = req.dataset.id
        if (typeof id === 'string') {
            // Attempt to convert the string to a number
            id = parseFloat(id);
        }
        let data = await this.app.idb.getById(entity, id)
        console.log(data);
        return data

    }

    async updateById(req, entity) {

        let updatedUser = req.formData
        let id = req.formData.taskId
        if (typeof id === 'string') {
            // Attempt to convert the string to a number
            id = parseFloat(id);
        }
        updatedUser["taskId"] = id
        let res = await this.app.idb.updateById(entity, id, updatedUser)


    }

    async deleteById(req, entity) {
        let id = req.dataset.id
        if (typeof id === 'string') {
            // Attempt to convert the string to a number
            id = parseFloat(id);
        }
        let data = await this.app.idb.deleteById(entity, id)
        return data
    }

    async sendHttpRequest(req, entity) {
        if (req.endpoint) {
            let res = await this.app.httpService.request(req.endpoint, req.method, req.body);
            console.log(res);
            return res;
        }
        else {
            console.error("Kindly Provide Endpoint");
            return
        }
    }

 

}

export { RequestExecutor }

