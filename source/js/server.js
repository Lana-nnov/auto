// import axios from 'axios';
// import fetch from "node-fetch";
// const axios = require('axios').default;

console.log("axios");

const getData = () => {
  console.log("click");
  const promise = axios.get("http://localhost:3001/cities").then((data) => {return data.data});
  return promise; ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
};

const getImages = () => {
  console.log("click");
  const promise = axios.get("http://localhost:3001/images").then((data) => {return data.data});
  return promise; ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
};

const sendData = () => {
  console.log("send");
  // const promise = axios.post("http://localhost:3001/cities", {"Riga"}).then((data) => {return data.data});
  return promise; ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
};

function getValue() {
  console.log("value");
};

export default {getData, getImages};
