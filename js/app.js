const countdown = document.querySelector('.countdown')
const targetDate = new Date('Dec 24, 2021, 00:00:01').getTime();

const interval = setInterval(() => {
    console.log('tiks');

    const now = new Date().getTime(); //get current date
    console.log(now);

    const timeleft = targetDate-now;

 

    const days = Math.floor(timeleft/(1000*60*60*24));
    const hours = Math.floor(timeleft%(1000*60*60*24) / (1000*60*60));
    const minutes = Math.floor(timeleft % (1000*60*60) / (1000*60));
    const seconds = Math.floor(timeleft % (1000*60) / 1000);
    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    
    countdown.innerHTML = `
    <div><span>${days} päeva</span></div>
    <div><span>${hours} tundi</span></div>    
    <div><span>${minutes} minutit</span></div>
    <div><span>${seconds} sekundit</span></div>
    `;




}, 1000);