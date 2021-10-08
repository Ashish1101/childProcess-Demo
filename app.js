require('dotenv').config()
const express = require('express');
const app = express();
const child = require('child_process')
app.use(express.json());
app.use(express.urlencoded({extended : false}));
const scheduler = require('./scheduler');
const config = require('./config')


//cron scheduler to run function at specific time
//https://crontab.guru/ for creating timing
// scheduler.cronInit(config)



//child process
app.get('/isPrime/:num' , async (req, res) => {
    try {
        //fork child process
        const fork_process = child.fork('./isPrime')
        
        // const controller = new AbortController();

        //send data to child
        fork_process.send(req.params.num);

        //listen to child process
        let ans;
        fork_process.on('message' , result => {
            return res.json({result : result})
        })

     
        
        // fork_process.on('close' , message => {
        //     console.log('closing the proceess')
        //     controller.abort();
        // })

    } catch (err) {
        console.log('error' , err)
    }
})


//emitter use case

const emitter = require('./Events')
if(8 % 2 == 0) {
    emitter.emit('loadId', 'comments' , 1)
} else {
    emitter.emit('error' , new Error('calculation err'))
}


app.listen(5000 , () => console.log('running'))