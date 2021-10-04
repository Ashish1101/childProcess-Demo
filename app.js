const express = require('express');
const app = express();
const child = require('child_process')
app.use(express.json());
app.use(express.urlencoded({extended : false}));


//child process
app.get('/isPrime/:num' , async (req, res) => {
    try {
        //fork child process
        const fork_process = child.fork('./isPrime')

        //send data to child
        fork_process.send(req.params.num);

        //listen to child process
        let ans;
        fork_process.on('message' , result => {
            return res.json({result : result})
        })



        // res.json({result : ans})

    } catch (err) {
        console.log('error' , err)
    }
})


app.listen(5000 , () => console.log('running'))