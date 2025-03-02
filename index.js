// random color js

document.getElementById("random-color").addEventListener("click", function () {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
});

//  random color js end

// ----------------------------------------------------------------------------------

// date js

const timeValue = document.getElementById("date-time");
const dateName = document.getElementById("date-name");
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const todayDate = new Date();

let dates = todayDate.getDate();
let dayNumber = todayDate.getDay();
let monthNumber = todayDate.getMonth();
let year = todayDate.getFullYear();
const date = dates + "," + monthNames[monthNumber] + "," + year;
timeValue.innerText = date;
dateName.innerText = dayNames[dayNumber];
console.log(date, dayNames[dayNumber]);

// date js   end

// -------------------------------------------------------------------------------------

const teish = document.getElementById("teish").innerText;
const choy = document.getElementById("choy").innerText;
const convertTeish = parseInt(teish);
const convertChoy = parseInt(choy);
let sum = convertTeish;
let sum2 = convertChoy;

for (let i = 0; i <= 5; i++) {

  
  


  let completeButton = document.getElementsByClassName("yeasin");

  completeButton[i].addEventListener("click", function () {
    alert();
    const teish = document.getElementById("teish");
    const choy = document.getElementById("choy");

    sum = sum + 1;
    sum2 = sum2 + 1;

    teish.innerText = sum;

    choy.innerText = sum2;

   completeButton[i].disabled = true;
   completeButton[i].style.backgroundColor = "grey"

   const activityLog = document.getElementById("notification-div");
   let notification = document.createElement("p");
   let head = document.getElementsByClassName('head');
   let headValue = head[i].innerText
   notification.style.backgroundColor = "#F4F7FF";
   notification.style.padding = "15px";
   notification.style.borderRadius = "10px";
   notification.style.fontSize = "14px";
   notification.style.fontWeight = "bold";
   notification.style.margin = "10px"
   const time = new Date()

   let hour = time.getHours();
   let minute = time.getMinutes();
   let second = time.getSeconds();

   notification.innerText = "You have Complete The Task " + headValue +" at " + hour + ":" + minute + ":" + second

   activityLog.appendChild(notification)
  })
}



// --------------------------------------------------------------------------------------------------------------------

// clear button js


document.getElementById('clear-button').addEventListener('click', function(){
  const parent = document.getElementById('notification-div')

  parent.innerHTML = "";
})