class BlockedIndefinitelyError extends Error {
    constructor(message = "Database open was blocked") {
        super(message);
    }
}

class IndexedDB {
    constructor(dbName, version = 1) {
               this.dbName = dbName;
        this.version = version;
        this.db = null;
    }

    async initialize(storesConfig) {
       
       return await this.open(storesConfig);
    }

    async open(storesConfig) {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.version);
            request.onupgradeneeded = event => {
                const db = event.target.result;
                for (let storeConfig of storesConfig) {
                    if (!db.objectStoreNames.contains(storeConfig.name)) {
                        
                        db.createObjectStore(storeConfig.name, {
                            keyPath: storeConfig.keyPath || "id",
                            autoIncrement: storeConfig.autoIncrement || false
                        });
                    }
                }
            };
            request.onsuccess = event => {
                this.db = event.target.result;
                console.log(this.db);
                resolve(this.db);
            };
            request.onerror = event => {
                reject(new Error("There was an error opening the database."));
            };
        });
    }


    async add(storeName, item) {
        const transaction = this.db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        return new Promise((resolve, reject) => {
            const request = store.add(item);
            request.onsuccess = (event) => resolve(event.target.result);
            request.onerror = (event) => reject(event.target.error);
        });
    }

    async get(storeName, key) {
        const transaction = this.db.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        return new Promise((resolve, reject) => {
            const request = store.get(key);
            request.onsuccess = (event) => resolve(event.target.result);
            request.onerror = (event) => reject(event.target.error);
        });
    }

    async getAll(storeName) {
        console.log(storeName);
        const transaction = await this.db.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        return new Promise((resolve, reject) => {
            const request = store.getAll();
            request.onsuccess = (event) => resolve(event.target.result);
            request.onerror = (event) => reject(event.target.error);
        });
    }

    async update(storeName, item) {
        const transaction = this.db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        return new Promise((resolve, reject) => {
            const request = store.put(item);
            request.onsuccess = (event) => resolve();
            request.onerror = (event) => reject(event.target.error);
        });
    }

    async delete(storeName, key) {
        const transaction = this.db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        return new Promise((resolve, reject) => {
            const request = store.delete(key);
            request.onsuccess = (event) => resolve();
            request.onerror = (event) => reject(event.target.error);
        });
    }

    close() {
        if (this.db) {
            this.db.close();
            this.db = null;
        }
    }

    static getDatabaseVersion(name) {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(name);
            request.onsuccess = (event) => {
                const version = event.target.result.version;
                event.target.result.close();
                resolve(version);
            };
            request.onerror = (event) => reject(event.target.error);
            request.onblocked = (event) => reject(new BlockedIndefinitelyError());
        });
    }

    static deleteDatabase(name) {
        return new Promise((resolve, reject) => {
            const request = indexedDB.deleteDatabase(name);
            request.onsuccess = (event) => resolve();
            request.onerror = (event) => reject(event.target.error);
            request.onblocked = (event) => reject(new BlockedIndefinitelyError());
        });
    }

    async isStoreEmpty(storeName) {
        const transaction = this.db.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        return new Promise((resolve, reject) => {
            const countRequest = store.count();
            countRequest.onsuccess = (event) => resolve(countRequest.result === 0);  // true if empty, false otherwise
            countRequest.onerror = (event) => reject(event.target.error);
        });
    }

    async bulkCreate(storeName, dataList) {
        const transaction = this.db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        let ids = [];
        return new Promise((resolve, reject) => {
            for (let data of dataList) {
                const addRequest = store.add(data);
                addRequest.onsuccess = (e) => {
                    ids.push(e.target.result);
                };
                addRequest.onerror = (e) => {
                    reject("Error while adding an item: " + e.target.error);
                    return;  // exit the loop if there's an error
                };
            }
            transaction.oncomplete = () => resolve(ids);  // return all IDs of the items that were inserted
            transaction.onerror = () => reject("Transaction error while adding items");
        });
    }

    async clearStore(storeName) {
        const transaction = this.db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        return new Promise((resolve, reject) => {
            const clearRequest = store.clear();
            clearRequest.onsuccess = () => resolve();
            clearRequest.onerror = (event) => reject(event.target.error);
        });
    }

    static async deleteStore(dbName, storeName) {
        const version = await this.getDatabaseVersion(dbName) + 1;
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(dbName, version);
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (db.objectStoreNames.contains(storeName)) {
                    db.deleteObjectStore(storeName);
                }
            };
            request.onsuccess = (event) => {
                event.target.result.close();
                resolve();
            };
            request.onerror = (event) => reject(event.target.error);
            request.onblocked = (event) => reject(new BlockedIndefinitelyError());
        });
    }


    async getById(storeName, id) {
        const transaction = this.db.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        return new Promise((resolve, reject) => {
            const getRequest = store.get(id);
            getRequest.onsuccess = (event) => resolve(event.target.result);
            getRequest.onerror = (event) => reject(event.target.error);
        });
    }

    async updateById(storeName, id, updatedData) {
        const transaction = this.db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        return new Promise((resolve, reject) => {
            const putRequest = store.put(updatedData);        // use put for updating
            putRequest.onsuccess = () => resolve();
            putRequest.onerror = (event) => reject(event.target.error);
        });
    }

    async deleteById(storeName, id) {
        const transaction = this.db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        return new Promise((resolve, reject) => {
            const deleteRequest = store.delete(id);
            deleteRequest.onsuccess = () => resolve();
            deleteRequest.onerror = (event) => reject(event.target.error);
        });
    }

    // ... [You can add other utility methods as needed]
}



export { IndexedDB }


