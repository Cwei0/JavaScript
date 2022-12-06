// Asynchronous Programming - piece of code that runs non-lineraly 

const waitingforSoup = () => console.log("2");

console.log("1");

setTimeout(waitingforSoup, 3000);
console.log("3");