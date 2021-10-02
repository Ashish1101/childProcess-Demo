const express = require('express');
const app = express();
const child = require('child_process')
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// const isPrime = require('./isPrime')

//this is a process which is going to execute
//and this is a cpu intensive task
//so we have to resolve to child process to 
//free our main thread from cpu intensive task

//we have to use child_process module for that

//this is the main process
// app.get('/:num' , async (req,  res) => {

//     //first of all fork the task that is cput intensive
//     const child_fork = child.fork('./isPrime')

//     /* send data to the child process if any  */
//     child_fork.send(req.params.num)

//     //listen for the response back from child process
//     child_fork.on('message' , isPrimeOrNode => res.send(isPrimeOrNode))
// })

// app.get('/' , (req, res) =>{
//     const {spawn , execFile} = child
//     execFile('' , (err , out) => {
//         if(err) console.log(err)
//         res.send(out)
//     })
// })
// let object = {
//     name : "",
//     age : "",
//     address: {
//         street: "",
//         pincode: " "
//     }
// }

console.log('hello')
console.log('hello world')

app.get('/home' , async (req, res) => {
    try {
        console.log('home pid' , process.pid)
    } catch (err) {
        console.log(err)
    }
})

app.get('/user' , async (req, res) => {
   try {
       console.log('working on user thread')
       console.log('user pid' , process.pid)
} catch (err) {
       console.log('err',err)
   }
})

app.listen(5000 , () => console.log('running'))