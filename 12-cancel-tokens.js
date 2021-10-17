/*

    Cancel Tokens

    If we want to cancel a particular request then we cancel token.


Example 1:
function cancelToken() {
    const source = axios.CancelToken.source();

    axios
    .get("https://jsonplaceholder.typicode.com/todos", {
        cancelToken = source.token
     })
    .then(response => console.log(response))
    .catch(thrown => {
       if(axios.isCancel(thrown)) {
        console.log(`Request cancelled`, thrown.message);
       }
       })

       if(true) {
        source.cancel (`Request Cancelled`);
       }

}
 */