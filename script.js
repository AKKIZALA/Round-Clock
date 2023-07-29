setInterval(() => {
   let  d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hours.style.transform = `rotate(${hrotation}deg)`
    Minutes.style.transform = `rotate(${mrotation}deg)`
    Secounds.style.transform = `rotate(${srotation}deg)`
},1000)