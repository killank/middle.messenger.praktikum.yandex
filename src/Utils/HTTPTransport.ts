type Options = {
    headers?: Record<string, string>;
    method?: string;
    data?: any;
    timeout?: number;
}

type HTTPMethod = (url: string, data?: unknown) => Promise<Response>

const METHODS: Record<string, string> = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
};

function queryStringify(data: Record<string, unknown>) {
    return Object.entries(data).reduce((acc, [key, value], index, arr) => {
        return `${acc}${key}=${value}${index < arr.length - 1 ? "&" : ""}`;
    }, "?");
}

export class HTTPTransport {
    static API_URL = "https://ya-praktikum.tech/api/v2";

    get: HTTPMethod = (url, data) => {
        return this.request(
            HTTPTransport.API_URL + url,
            {
                data,
                method: METHODS.GET
            }
        );
    };

    post: HTTPMethod = (url, data) => {
        return this.request(
            HTTPTransport.API_URL + url,
            {
                data,
                method: METHODS.POST
            }
        );
    };

    put: HTTPMethod = (url, data) => {
        return this.request(
            HTTPTransport.API_URL + url,
            {
                data,
                method: METHODS.PUT
            }
        );
    };

    delete: HTTPMethod = (url, data) => {
        return this.request(
            HTTPTransport.API_URL + url,
            {
                data,
                method: METHODS.DELETE
            }

        );
    };

    request = (url: string, options: Options = {}): Promise<Response> => {
        const {method = METHODS.GET, data, headers = {}} = options;

        return new Promise((resolve, reject) => {
            let requestUrl = url;
            
            if (method === METHODS.GET && !!data) {
                requestUrl = url + queryStringify(data);
            }

            const xhr = new XMLHttpRequest();
            xhr.open(method, requestUrl);

            xhr.onreadystatechange = () => {
                if (xhr.readyState !== 4) {
                    return;
                }
                if (xhr.status < 400) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.response);
                }
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.withCredentials = true;
            xhr.responseType = "json";

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else if (data instanceof FormData) {
                xhr.send(data);
            } else {
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(JSON.stringify(data));
            }
        });
        
    };
}
