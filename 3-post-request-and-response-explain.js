/*

    POST Request & Response Explain

    A post request refers to sending data to the backend or server.

    id is generated automatically by the server when we post data.

    Here, we are sending data to the server so params is replaced by data. The property
    of data is an object which consist of the property that we wish to send to the backend.

    Shortening the request --> Example 2



Example 1:
axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
        completed: false,
        title: "New title"
    }
})
.then (response => {
    console.log(response)})
    console.log(response.data)})                        //To access just the data
.catch(error => console.error(`error`));


Example 2
axios.post(`url`, {
    title: "New title",
    completed: false
})
 */