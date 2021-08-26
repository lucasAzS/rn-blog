import axios from 'axios';

export default axios.create({
  baseURL: 'http://url.ngrok.io', // here we need ngrok and json-server
});
