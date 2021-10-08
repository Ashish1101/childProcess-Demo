const {EventEmitter , errorMonitor} = require('events');
const axios = require('axios')
//make an object
const emitter = new EventEmitter();


//newListener Event this event will automatically emit without calling emit method 
emitter.once('newListener' , function () {
  console.log('new Event occured')
})

//crete an event of loading data from perticular website
emitter.on('loadAll' , (database) => {
   setImmediate(() => {
      axios.get(`https://jsonplaceholder.typicode.com/${database}`)
      .then((res) => {
        console.log('database result',res.data)
      }).catch(err => console.log(err))
   })
})

//setImmediate Methods used because emitter by default are synchronous in nature 
//to use async functionality here used a setImmediate methods

emitter.on('loadId' , (database , id) => {
  setImmediate(() => {
     axios.get(`https://jsonplaceholder.typicode.com/${database}/${id}`)
     .then((res) => {
       console.log('database result',res.data)
     }).catch(err => console.log(err))
  })
})

//emmiter for error :: errorMonitor is a predifned event for loading stack of error 
emitter.on(errorMonitor , (err) => {
   console.log(err)
})

//name all the event registered
console.log(emitter.eventNames())

//returns the instances of listener with that name
console.log('listener count with the name' ,emitter.listenerCount('loadAll'))

// emitter.off('loadAll' , function() {
//   console.log('single instance of loadAll removed from emitter object')
// })


//name all the event registered
console.log(emitter.eventNames())

module.exports = emitter
