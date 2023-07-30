/* eslint-disable @typescript-eslint/no-explicit-any */

type Options = {
    headers?: Record<string, string>;
    method?: string;
    data?: any;
    timeout?: number;
}

type HTTPMethod = (url: string, options?: Options) => Promise<unknown>

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
    get: HTTPMethod = (url, options) => {
        return this.request(
            url,
            {...options,
                method: METHODS.GET},
            options?.timeout
        );
    };

    post: HTTPMethod = (url, options) => {
        return this.request(
            url,
            {...options,
                method: METHODS.POST},
            options?.timeout
        );
    };

    put: HTTPMethod = (url, options) => {
        return this.request(
            url,
            {...options,
                method: METHODS.PUT},
            options?.timeout
        );
    };

    delete: HTTPMethod = (url, options) => {
        return this.request(
            url,
            {...options,
                method: METHODS.DELETE},
            options?.timeout
        );
    };

    request = (url: string, options: Options = {}, timeout = 5000) => {
        const {method = METHODS.GET, data, headers = {}} = options;

        return new Promise((resolve, reject) => {
            let requestUrl = url;
            
            if (method === METHODS.GET && !!data) {
                requestUrl = url + queryStringify(data);
            }

            const xhr = new XMLHttpRequest();
            xhr.open(method, requestUrl);
            
            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = function() {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}
