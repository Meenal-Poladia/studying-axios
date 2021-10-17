/*

    Interceptors

    By using interceptors we can create a logger. --> Example 1

    Here we a logging each request sent on the server.


Example 1
axios.interceptors.request.use(config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url}
    at ${new.Date().getTime()}`);

     return config;
    },
    error => {return Promise.reject(error);
    }
);
 */