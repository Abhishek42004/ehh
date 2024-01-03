class HttpService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    initialize(app) {
        this.app = app;

        this.app.actionEvent.on('sendHttpRequest', async (req) => {

            const { endpoint, method, formData } = req;
            return await this.request(endpoint, method, data);
        });
    }

    async request(endpoints, method, data) {
        let url = this.baseUrl + endpoints;
        console.log(url, method, data);
        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token") ? localStorage.getItem("token") : '' , // assuming the token is stored in localStorage
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`API Request Failed: ${text}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Error making API request:", error);
            return null;
        }
    }
}


export { HttpService }














