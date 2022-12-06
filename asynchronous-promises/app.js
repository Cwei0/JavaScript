// Asynchronous Programming - piece of code that runs non-lineraly 

setTimeout(function() {
    console.log("soup")
}, 2000);

setTimeout( ()=> console.log("bitch"), 2000)