module.exports = {
    hello : {
        frequency : '50-59 * * * * *',
        handler : 'handler/hello'
    },

    goodBye : {
        frequency : '6 10 * * *',
        handler : 'handler/goodBye'
    },
    Email : {
        frequency : '20-30 * * * * *',
        handler : 'handler/Email'
    }
}