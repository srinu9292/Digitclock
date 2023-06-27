function digitclk()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    // // var ml=date.getMilliseconds();
    var dt=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var day=date.getDay();
    var am_pm="AM";
    if(hh>=12){
        am_pm="PM";
        if(hh>12)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }

    if(mo==0){
        mo="JAN"
    }
    else if(mo==1){
        mo="FEB"
    }
    else if(mo==2){
        mo="MAR"
    }
    else if(mo==3){
        mo="APR"
    }
    else if(mo==4){
        mo="MAY"
    }
    else if(mo==5){
        mo="JUN"
    }
    else if(mo==6){
        mo="JULY"
    }
    else if(mo==7){
        mo="AUG"
    }
    else if(mo==8){
        mo="SEP"
    }
    else if(mo==9){
        mo="OCT"
    }
    else if(mo==10){
        mo="NOV"
    }
    else
    {
        mo="DEC"
    }

    switch(day)
    {
        case 0:day="Sunday"
        document.body.style.backgroundImage="url(./0.jpg)"
        break;
        case 1:day="Monday"
        document.body.style.backgroundImage="url(./1.jpg)"
        break;
        case 2:day="Tuesday"
        document.body.style.backgroundImage="url(./2.jpg)"
        break;
        case 3:day="Wednesday"
        document.body.style.backgroundImage="url(./3.jpg)"
        break;
        case 4:day="Thursday"
        document.body.style.backgroundImage="url(./4.jpg)"
        break;
        case 5:day="Friday"
        document.body.style.backgroundImage="url(./5.jpg)"
        break;
        case 6:day="Saturday"
        document.body.style.backgroundImage="url(./6.jpg)"
        break;
    }
        document.getElementById("date").innerHTML=`${dt}/${mo}/${yy}`;
        document.getElementById("time").innerHTML=`${hh}:${mm}${am_pm}`
        document.getElementById("day").innerHTML=day;
        document.getElementById("sec").innerHTML=ss;
        setTimeout(digitclk,1000);
    
}
digitclk()


var alarmMus=new Audio();
alarmMus.src="./audio1-1.mp3"

function alarm()
{
    // alarmconf()
    var allselectTags=document.querySelectorAll("select");
    var userGivenhours=allselectTags[0].value;
    var userGivenmin=allselectTags[1].value;
    var userGivenam_pm=allselectTags[2].value;
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var am_pm="AM";
    if(hh>=12){
        am_pm="PM";
        if(hh>12)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }

    if(userGivenhours==hh && userGivenmin==mm && userGivenam_pm==am_pm)
     {
        alarmMus.play()
     }
     else{
        alarmMus.pause()
     }
     setTimeout(alarm,1000)
}

function alarmconf()
{
    var allselectTags=document.querySelectorAll("select");
    var userGivenhours=allselectTags[0].value;
    var userGivenmin=allselectTags[1].value;
    var userGivenam_pm=allselectTags[2].value;
    alert(`Alarm has been setted for: ${userGivenhours} :${userGivenmin} ${userGivenam_pm}` )
    document.getElementById("alarm").style.display="none"
}
function alarmDisplay()
{
    document.getElementById("alarm").style.display="flex"
}
function closealarm()
{
    document.getElementById("alarm").style.display="none"
}