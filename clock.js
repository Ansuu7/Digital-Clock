function clock(){
    const days=["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const d= new Date();
    let day= days[d.getDay()];
    let hour=d.getHours();
    let minutes=d.getMinutes();
    let seconds=d.getSeconds();
    let ampm;
    if(hour < 12)
        { ampm="AM";
        }
      else
      { ampm="PM";3
      }
    let  greet;
    if(hour < 12)
    {
        greet="OHAYO!(GOOD MORNING)";
    }
    else if(hour > 12 && hour < 17)
    {
        greet="Good Afternoon";
    }
    else if(hour > 17 && hour < 22)
        {
        greet="Good Evening";
    }
    else{
        greet="Oyasumi!Good Night! Sleep Well";
    }
    hour= hour > 12 ? hour-12 : hour;
    hour = hour === 0 ? 12 : hour;
    hour=hour < 10 ? "0" + hour: hour;
    minutes= minutes < 10? "0"+ minutes : minutes;
    seconds= seconds < 10 ? "0"+ seconds : seconds;

    document.getElementById("day").innerHTML= day; 
    document.getElementById("hour").innerHTML= hour; 
    document.getElementById("minutes").innerHTML= minutes;
    document.getElementById("seconds").innerHTML= seconds;
    document.getElementById("ampm").innerHTML= ampm;
    document.getElementById("greet").innerHTML =greet;
} 
setInterval(clock,1000);
window.onload=clock;