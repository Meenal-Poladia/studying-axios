/*
    Delete Request

    When making a put, patch or delete request then we need to add to id to the url so
    that only the object which we want to delete is deleted.

    There is no param or data passed which deleting an object. --> Example 1

    Note: After deleting the object, we need to again initiate a get request so that we can get the
    new data or else there would be no change in the data or it may just show an empty object.



Example 1
axios({
    method: "delete",
    url: "https://jsonplaceholder.typicode.com/todos/1233"
})
 */