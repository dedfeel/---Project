function updateCountdown(){
    let now = new Date();
    let nextYear = now.getFullYear() + 1;
    let newYear = new Date(`January 1 , ${nextYear} 00:00:00`)
    let diff = newYear - now

    let days = Math.floor(diff/ (1000 * 60 * 60 * 24))
    let  hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 *60))
    let seconds = Math.floor((diff % (1000 * 60)) /  1000)

    let countDownElement = document.getElementById('keriSanaq')
    countDownElement.textContent = `${days} kun ${hours} sagat ${minutes} min ${seconds} sek`;
}

setInterval(updateCountdown,1000)
updateCountdown();

window.addEventListener("scroll",function(){
    let home = document.getElementById('section5Text3')
    if(window.scrollY > 400){
        home.style.opacity = '1'
    }else{
        home.style.opacity = '0'
    }
})