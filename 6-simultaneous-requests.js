/*

    Simultaneous Requests

    If we want two requests to process together then requesting one request and later
    requesting another in the first one is not an ideal way.

    For processing requests simultaneously we can use the command axios.all to process
    all the requests. Once all the requests are fulfilled then we get the response for
    further processing. Axios.all takes an array of url. --> Example 1

    axios.spread is a function that helps to view the response received from the
    multiple requests we made in axios.all. In the function parameter we lists the
    data received from the requests in the same order that we have made the requests.


Example 1
axios.all([
    axios.get(`url1`),
    axios.get(`url2`),
])
.then(response => axios.spread((url1, url2) => {
    console.log(url1.data);
    })));
.catch(error => console.log(error));

 */