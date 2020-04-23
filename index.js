function tellTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var dat = date.getDate();
    var mon = date.getMonth();
    var ye = date.getFullYear();
    var session = "AM";
    if (h < 12) {
        
   }
   else if (h > 12) {
       h = (h - 12);
       session = "PM";
   }
   /*if (h > 10){
       h = "0" + h;
   }
   if (m > 10){
       m = "0" + m;
   }
   if (s > 10){
       s = "0" + s;
   }*/
   // Alternative for this is below
   h = (h < 10) ? "0" + h : h;
   m = (m < 10) ? "0" + m : m;
   s = (s < 10) ? "0" + s : s;
   var hi = 23 - h;
   var mi = 60 - m;
   var si = 60 - s;
   var daysLeft = 23 - dat;
   var time = h + ":" + m + ":" + s + " " + session;
   var datings = dat + "/" + mon + "/" + ye;
   document.getElementById("countDays").innerText = daysLeft;
   document.getElementById("countDays").textContent = daysLeft;
   document.getElementById("countHours").innerText = hi;
   document.getElementById("countHours").textContent = hi;
   document.getElementById("countMinutes").innerText = mi;
   document.getElementById("countMinutes").textContent = mi;
   document.getElementById("countSeconds").innerText = si;
   document.getElementById("countSeconds").textContent = si;
   document.getElementById("timeDisplay").innerText = "The time is " + time + " on " + datings;
   document.getElementById("timeDisplay").textContent = "The time is " + time + " on " + datings;
   
}
setInterval(tellTime, 1000);