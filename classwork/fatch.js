// fatch is a inbuilt js method used to make http requests

const { promises } = require("node:dns");
const { callbackify } = require("node:util");



    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
        return response.json();   // convert to JSON
    })
    .then((data) => {
        console.log(data);        // users data
    })
    .catch((error) => {
        console.log(error);
    });


    // activites :
    // where we use promises in company level
    // why promises better than callbacks
    // 4 ex with promises
    // write one with asink and await
    // what is fetch method
    // write one ex for fetch
    // fetch show only 5 records
    // create one fake promise manually and resolve nad reject after 3 seconds

    // interview question 
    // whta is promises
    // setps of promises
    // diff promises and callback
    // what does fatch return
    // why we convert use json in fetch

