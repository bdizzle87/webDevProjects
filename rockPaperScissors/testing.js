let i = 10;
do {
    const para = document.createElement('p'); 
    const output = document.querySelector('.output');
    output.appendChild(para);
    if (i != 0) {
        para.textContent = ("Countdown " + i)
        console.log("Countdown " + i)
    } else {
        console.log("Blast off!")
    }
    i--
} while (i > 0);