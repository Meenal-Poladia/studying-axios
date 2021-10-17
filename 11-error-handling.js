/*

    Error Handling
    If the response.status is other than 200 then we try to show error in a more
    constructive way so that the user can understand what the error is.

    It is a good practise to handle errors wisely as it helps the user know the
    reason why a certain code is not working.
    Add as many error.status as required in order to capture all kinds of errors


Example 1:
axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(response => console.log(response))
    .catch(error => {
        //Server responded with a status other than 200
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.header);

        if(error.response.status === 404) {
            alert(`Error: Page Not Found`);
        }
    })

Example 2:
axios
    .get("https://jsonplaceholder.typicode.com/todos", {
        validateStatus: function(status) {
            return status < 500         //reject only if the status is greater or equal to 500. So it will not run catch
        }
    })
    .then(response => console.log(response))
    .catch(error => {
        //Server responded with a status other than 200
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.header);

        if(error.response.status === 404) {
            alert(`Error: Page Not Found`);
        }
 */