/*

    Transform Response

    It refers to transferring ones requests to response. It is hardly.

    It gives a get request to whatever we put in options. We can use the same method for
    request as well as response. This helps to trick our response or request in a way we want.
    --> Example 1


Example 1:

const options = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
        completed: false,
        title: "New title"
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
        data.title = data.title.toUppercase();
        return data;
    })
}

axios(options).then(response => showOutput(response));
 */