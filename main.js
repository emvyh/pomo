
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