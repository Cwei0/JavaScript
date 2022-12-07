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

// RESOLVED - if the waiter brings you soup, you tip the waiter
// REJECT - leave a bad review, no tip
const orderTime = async () => {
    const review = {rating: 0, tip: 0, pay: 0}

    try{
        const soup = await promise1
        review.rating = 5
        review.tip = .2
        review.pay = 10
        console.log(soup)
        return review
    } catch (error) {
        console.log(error)
        review.rating = 1
        review.tip = 0
        review.pay = 0
        return review
    }
};
orderTime().then(value => console.log(value))

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

// const getDog = async () => {
//     const response =  await fetch("https://dog.ceo/api/breeds/image/random");
//     const data = await response.json();
//     console.log(data);
// };

// getDog();