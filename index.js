// Asynchronous Functions Assignment


//1. You are building a system that sends email reminders to users 5 seconds after they register. 
// Create an async function sendReminder(email) that waits 5 seconds using setTimeout and then logs "Reminder sent to [email]". Simulate sending a reminder to 3 users.
function sendReminder(emails) {
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve(`Reminder sent to ${emails}`);
            }, 5000);
        })
   
};
const emails= ['shana@gmail.com','yana@gmail.com','rana@gmail.com'];
async  function sendReminderAsync(){
    for(let i=0;i<emails.length;i++){
    let newPromise= await sendReminder(emails[i]);
    console.log(newPromise);
};
}
sendReminderAsync();
// 2.You want to simulate a login system that tries to log in a user. 
// // The first two attempts fail, but the third succeeds. Write a function tryLogin() that uses a counter and Promises. 
// // Use setTimeout to simulate a 1-second delay between attempts. Log "Login successful" or "Login failed after 3 attempts" based on whether login succeeds.

function tryLogin() {
  let attempts = 0;


  function attemptLogin() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        attempts++;
        if (attempts === 3) {
          resolve("Login successful");
        } else {
          reject(`Login attempt ${attempts} failed`);
        }
      }, 1000);
    });
  }

  function login() {
    attemptLogin()
      .then(console.log)
      .catch((error) => {
        console.log(error);
        if (attempts < 3) {
          login();
        } else {
          console.log("Login failed after 3 attempts");
        }
      });
  }

  login();
}
tryLogin();


//3. Build a countdown timer that counts down from 5 to 0, displaying one number per second using setInterval.
//  When the countdown reaches 0, stop the interval and log "Time's up!".

const countdownTimer = () =>{
  let count = 5;
 const interval = setInterval(() => {
    console.log(count);
    count--;

    if (count < 1) {
      clearInterval(interval);
      console.log("Time's up!");
    }
  }, 1000);
}

countdownTimer();

//4. You are simulating a page that loads data in stages. 
// Create an async function called loadPage() that: logs "Loading header...", waits 1 second; logs "Loading content...", waits 2 seconds; logs "Loading footer...", 
// waits 1 second; and finally logs "Page fully loaded". Use setTimeout inside Promises and await them in sequence.
async function loadPage() {
  function awaitMessages(seconds,messages){
    return new Promise((resolve)=>
      setTimeout(()=>{
     console.log(messages);
     resolve();

      },seconds)
    )}
    await awaitMessages(0,"Loading header");
    await  awaitMessages(1000,"Loading content");
    await awaitMessages (2000,"Loading footer");
    await awaitMessages(1000,"Page fully loaded")

}
loadPage();

// 5.You are simulating fetching stock prices with delays. 
// Write a function fetchPrice(symbol) that returns a Promise which resolves after 2 seconds with the message "Price for [symbol] retrieved". 
// Use async/await to call it for two different stocks ("AAPL" and "GOOG") and log the messages in order.
function fetchPrice(symbol) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Price for ${symbol} retrieved`);
    }, 2000);
  });
}
async function getStockPrices() {
  let aaplStock = await fetchPrice("AAPL");
  console.log(aaplStock);

  let googStock = await fetchPrice("GOOG");
  console.log(googStock);
}
getStockPrices();

