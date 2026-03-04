// const { error } = require("node:console");

const { rejects } = require("node:assert");

// console.log("start")
// setTimeout(() => {
//     console.log("inside the settime")
// },2000);
// console.log("end")


// promises:
// promies is an object that represent future result of an asynchronous operations
// promise has three states:
// rejects,pending,resolve

let mypromise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("data fatch succefullly")
    }
    else{
        reject("error")
    }
});

mypromise.then((resolve)=>{
    console.log("success:"+resolve)
}).catch((error)=>{
    console.log("error"+error)
})

// resolve - success
// reject - error
// .then - resolve value
// .catch - reject value

