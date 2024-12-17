let clicks = 0 

function money() {
    clicks += 1
    let clicksText = document.getElementById("clicks")
    clicksText.textContent = clicks
    if (clicks == 10) {
    alert("good vro")
    }
    
}
