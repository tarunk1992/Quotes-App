module.exports = {
    resolve:{
        fallback:
            { "crypto": require.resolve("crypto-browserify") }
        
    },

};

module.exports = {
    resolve:{
        fallback:
        { "buffer": require.resolve("buffer/") }
        
    },

};