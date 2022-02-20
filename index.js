function printTime(){
    var d5 = new Date();
    var hours = d5.getHours();
    var mins = d5.getMinutes();
    var secs = d5.getSeconds();
    document.body.innerHTML = hours + ":" + mins + ":" + secs; 
   }
   setInterval(printTime, 1000);