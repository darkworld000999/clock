setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hrotation = 30*h + m/2;
    mrotation = 6*m;
    srotation = s*6;
    Hour.style.transform = `rotate(${hrotation}deg)`;
    Second.style.transform = `rotate(${srotation}deg)`;
    Min.style.transform= `rotate(${mrotation}deg)`;
}, 1000);