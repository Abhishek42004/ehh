class JsonCrud {
    constructor(store, supportedActions) {
        this.app = null
        this.store = store || {};
        this.supportedActions = supportedActions || ['insert', 'get', 'update', 'delete', 'insertOne', 'getOne', 'updateOne', 'deleteOne', 'append', 'create'];
    }

    initialize(app) {
        this.app = app
        this.app.actionEvent.on('getOneConfig', (data) => {
            return this.getOne(data)
        });
    }

    isSupportedActions(action) {
        return this.supportedActions.includes(action);
    }

    insert(data, config) {
        // Handle the insert operation here
        // Use 'config' as needed
    }

    insertOne(data, config) {
        // Handle the insertOne operation here
        // Use 'config' as needed
    }

    get(data, config) {
        // Handle the get operation here
        // Use 'config' as needed
        return this._search(this.store, data);
    }

    async getOne(query, config) {
        console.log(query);
        console.log("json crud is getting called");
        if (typeof query !== 'object' || query === null) {
            console.log(typeof query === "string");
            if (typeof query === "string") {
                query = await JSON.parse(query)
                console.log(query);
            } else {
                throw new Error("Query must be a non-null object");
            }

        }
        console.log(query);
        const items = this._search(this.store, query);
        console.log("JsonCrud", items);
        return items;
    }
    _search(obj, query) {
        // Base case: if obj is an array, iterate over it and call _search on each element
        if (Array.isArray(obj)) {
            for (const item of obj) {
                const result = this._search(item, query);
                if (result) return result;
            }
        }
        // Base case: if obj is an object, check for a match
        else if (typeof obj === 'object' && obj !== null) {
            // Check if the obj matches the query
            const isMatch = Object.keys(query).every(key => obj[key] === query[key]);
            if (isMatch) return obj;

            // Recursively search in the object's properties
            for (const key of Object.keys(obj)) {
                const result = this._search(obj[key], query);
                if (result) return result;
            }
        }
        // Base case: if obj is neither an object nor an array, it can't be a match
        return null;
    }

    update(data, config) {
        // Handle the update operation here
        // Use 'config' as needed
    }

    updateOne(data, config) {
        // Handle the updateOne operation here
        // Use 'config' as needed
    }

    delete(data, config) {
        // Handle the delete operation here
        // Use 'config' as needed
    }

    deleteOne(data, config) {
        // Handle the deleteOne operation here
        // Use 'config' as needed
    }

    append(data, config) {
        // Handle the append operation here
        // Use 'config' as needed
    }

    create(data, config) {
        // Handle the create operation here
        // Use 'config' as needed
    }

    // ... (other methods and private methods remain the same)
}

export { JsonCrud }