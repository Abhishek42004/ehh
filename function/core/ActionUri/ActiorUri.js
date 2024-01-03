class ActionUri {

    constructor() {
        this.app = null;
    }

    initialize(app) {
        this.app = app;

        // Subscribe to events
        this.app.actionEvent.on('initialized', () => {
            console.log('ActionUri initialized.');
            // Additional initialization logic
        });
        this.app.actionEvent.on('getCurrentUrl', () => {
           return this.getCurrentUrl()
         
        });
        this.app.actionEvent.on('updateHash', (hash) => {
            this.updateHash(hash)
        });
        this.app.actionEvent.on('unbuildEncodedUrl', (url) => {
            return this.unbuildEncodedUrl(url)
        });
    }

    // Method to build an encoded URI from an object
    static buildEncodedUri(request) {
        const response = [];
        for (let key in request) {
            if (request.hasOwnProperty(key)) {
                response.push(encodeURIComponent(key) + '=' + encodeURIComponent(request[key]));
            }
        }
        return response.join('&');
    }

    // Method to unbuild an encoded URI back into an object
     unbuildEncodedUri(request) {

        var uriFragment = request.split("&"), data = {}, i, parts;
        for (i = 0; i < uriFragment.length; i++) {
            parts = uriFragment[i].split("=");
            if (parts.length < 2) {
                parts.push("");
            }
            data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
        }
        return data;
    }

    // Method to build an encoded URL from a JSON object
     buildEncodedUrl(json) {
        const protocol = json.protocol || 'http:';
        const hostname = json.hostname || '';
        const port = json.port ? `:${json.port}` : '';
        const pathname = json.pathname || '';
        const hash = json.hash || '';
        const paramString = this.buildEncodedUri(json.params || {});
        const search = paramString ? `?${paramString}` : (json.search || '');

        return `${protocol}//${hostname}${port}${pathname}${search}${hash}`;
    }

    // Method to unbuild an encoded URL into a JSON object, dividing it into fragments
    unbuildEncodedUrl(url) {
        const urlObj = new URL(url);
        const fragments = {
            protocol: urlObj.protocol,
            host: urlObj.host,
            hostname: urlObj.hostname,
            port: urlObj.port,
            pathname: urlObj.pathname,
            search: urlObj.search,
            hash: urlObj.hash || "#/",
            params: this.unbuildEncodedUri(urlObj.search.substring(1))
        };

        return fragments;
    }

    // Method to get the location part from a URL
    static getLocationFromUrl(url) {
        const location = new URL(url);
        return location;
    }

    // Method to get the current URL from the address bar
    getCurrentUrl() {
        if (typeof window === 'undefined') {
            console.error("This method can only be used in a browser environment.");
            return null;
        }
        console.log("url fetched");
        return window.location.href;
    }

    updateHash(hash) {
        console.log(hash);
        window.location.hash = hash;
    }
    // Method to update a specific property of the current URL without refreshing the page
    static updateCurrentUrl(url, property, value) {
        console.log("Update Current Url", url, property, value);
        if (typeof window === 'undefined' || typeof history === 'undefined') {
            console.error("This method can only be used in a browser environment.");
            return;
        }

        // const url = new URL(window.location.href);
        console.log(url);
        if (property in url) {
            url[property] = value;
            console.log(url.toString());
            history.pushState({}, '', url.toString());
            return url
        } else {
            console.error("Invalid URL property");
        }
    }
}


export { ActionUri }