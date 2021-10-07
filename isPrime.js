//this child module is now associated to main process
//so 


process.on('message' , message => {
    let isPrime = checkIfPrime(message);

    //send the processed data back to main process
    process.send(isPrime)

    //kill the child process after its work is done
    process.exit();
})






function checkIfPrime(number){
    let isPrime = true;
    for (let i = 2; i < number; i++){
        if(number % i === 0){
            isPrime = false;
        }
    }
    return isPrime && number > 1;
}
