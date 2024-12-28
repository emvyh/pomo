
function popup() {
    const pop = document.getElementById("pop");
    const head = document.getElementById("poplink");

    head.addEventListener("click", function() {   
            pop.style.display = "block"; // Show the popup
    });
    document.addEventListener("click", function(event) {
        if (!pop.contains(event.target) && event.target !== head) {
            pop.style.display = "none"; // Hide the popup if click is outside the popup
        }
    });
}
let count;

function addTime(minutes){
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");

    let total = minutes * 60; //total of seconds 

    clearInterval(count); //empties for next 
    min.textContent = "00";
    sec.textContent = "00";

    countdown = setInterval(()=>{ //if we are at end of timer
        if(total <= 0){
        clearInterval(countdown); 
        alert("ringring");
        return;
        }

        total--; //countdown

        const curMin = Math.floor(total/60); //gets the minutes and rounds down 
        const curSec = total%60; //gets the seconds without counting hours

        min.textContent = String(curMin).padStart(2, '0');
        sec.textContent = String(curSec).padStart(2, '0');
    }, 1000);
    

}