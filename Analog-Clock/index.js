setInterval(() => {
 d=new Date;
    h=d.getHours();
    min=d.getMinutes();
    sec=d.getSeconds();
    hourRotate=30*h+min/2;
    minRotate=min*6;
    secRotate=sec*6;

    hour.style.transform=`rotate(${hourRotate}deg)`;
    minute.style.transform=`rotate(${minRotate}deg)`;
    second.style.transform=`rotate(${secRotate}deg)`;
}, 1000);