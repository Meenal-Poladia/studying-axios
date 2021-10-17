/*

    Axios Instance

    A person can create a new instance of axios with a custom config. These
    instances can be stored in a const and be re-used with a prefix or a
    suffix. This can be used when there is just one baseurl and only when the
    end point changes.


Example 1:
const axiosInstance = axios.create({
  //Other custom settings can also be added
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
});

axiosInstance.get('/comments').then(response => showOutput(response))

 */