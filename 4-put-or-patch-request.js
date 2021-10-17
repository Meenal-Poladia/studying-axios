/*

    PUT or PATCH Request

    To update the data we use either the put or the patch request.
    Put updates the entire object while patch updates only one or few properties
    in the object. Patch does not change the object all together.

    When making a put, patch or delete request then we need to add to id to the url
    --> Example 1

    While, updating an object using a put request. Here only the properties which have
    been specified will reflect in the data. All the other properties will be lost. We should not forget
     to add the particular unique id of the object --> Example 2

    While, updating an object using a patch request. All the properties of an object are preserved
    while only those properties are replaced which have been specified. We should not forget
    to add the particular unique id of the object--> Example 3



Example 1
put         /posts/12
patch       /patch/14


Example 2
axios({
    method: "put",
    url: "https://jsonplaceholder.typicode.com/todos/1233",
    data: {
        completed: false,
        title: "New title"
    }
})

Example 3
axios({
    method: "put",
    url: "https://jsonplaceholder.typicode.com/todos/1233",
    data: {
        completed: false,
        title: "New title"
    }
})
 */