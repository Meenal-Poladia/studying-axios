/*
    Get Request and Response explained

     Axios takes in a function that has an object. --> Example 1
     The object has the
        1. method: RESTAPI method which we want to call
        2. url: The API from where we want to fetch the data
        3. .then: as it returns a promise. It gives us the response
        4. .catch: this is used for error handling

      This returns an object which has the property
      a. config: It includes the RESTAPi and the details about the request
          It includes:
          1. url
          2. security tokens
          3. headers
          4. cross side forgery
      b. data: We want access to this data for our application. The data is usually an array
         of objects.
      c. headers: It includes cache-control, expires and response type.
      d. request: It is the request that generated the response
      e. status: Numerical code
      f. statusText: ""

      In params we add extra parameters for the url.

      A shorter way to write the post request --> Example 2

      Writing no RESTAPI request means a get request --> Example 3


Example 1:
axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos",
    params: {
        _limit: 5
    }
})
.then (response => {
    console.log(response)})
    console.log(response.data)})                        //To access just the data
.catch(error => console.error(`error`));


Example 2
axios.get("https://jsonplaceholder.typicode.com/todos",
    {
        _limit: 5
    }
)

Example 3
axios("https://jsonplaceholder.typicode.com/todos"){
    params {
        _limit: 5
    }
}
 */