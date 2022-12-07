// Asynchronous Programming - piece of code that runs non-lineraly 

// const orderSoup = () => console.log("soup");

// console.log("you start the convo with your babe");

// setTimeout(orderSoup, 3000);
// console.log("still speaking");


// promises always contain resolve and reject
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        isReady = [true, false][Math.floor(Math.random() * 2)];
        isReady ? resolve("soup is ready") : reject("soup is not ready");
    }, 3000);
});
const orderTime = async () => {

    try{
        const soup = await promise1
        console.log(soup)
    } catch (error) {
        console.log(error)
    }
};
orderTime();

// console.log(
//     promise1
//         .then(success => console.log({ success }))
//         .catch(error => console.log({ error }))
// )

// console.log('fetch:', 
// fetch("https://dog.ceo/api/breeds/image/random")
// .then(response => response.json())
// .then(data => console.log(data))
// )

const getDog = async () => {
    const response =  await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    console.log(data);
};

getDog();