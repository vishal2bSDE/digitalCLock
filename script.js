function showTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let sec = date.getSeconds();
    let formatHours = convertFormat(hours);
    hours=checkTime(hours);


    hours = addZero(hours);
    minutes = addZero(minutes);
    sec = addZero(sec);
    document.getElementById("clock").innerHTML=
    `${hours} : ${minutes} : ${sec} ${formatHours}`
}
function convertFormat(time){
    let format = 'AM';
    if(time >= 12)
        format="PM";
    return format;
}
function checkTime(time){
    return time%12 == 0 ? time : time%12;
}
function addZero(time){
    if(time<10)
    time= "0"+time;
    return time;
}
showTime();
setInterval(showTime,1000)