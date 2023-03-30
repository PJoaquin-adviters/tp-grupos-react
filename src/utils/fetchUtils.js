export const fetchData = (url, method, options) => {
    if (options.hasOwnProperty("headers")) {
        let { headers, ...extras } = options;
        return fetch(url, {
            method: method,
            headers: { "content-type": "application/json", ...headers },
            ...extras,
        })
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => console.log(err));
    } else {
        return fetch(url, {
            method: method,
            headers: { "content-type": "application/json" },
            ...options,
        })
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => console.log(err));
    }
};

