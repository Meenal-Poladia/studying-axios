/*

    Custom headers

    Custom headers are needed when we have asked the user to sign in and the users
    access token is used to view only that content which the user is allowed to.
    --> Example 1

Example 1
const config ={
    headers: {
        "Content-type": "application.json",
        Authorization: "access token"
    }
}

axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
        completed: false,
        title: "New title"
    }
}, config)
 */