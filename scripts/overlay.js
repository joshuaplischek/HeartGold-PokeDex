function openPokeDex() {
    let bodytRef = document.body
    let overlay = document.getElementById('pokeDexOverlay')
    overlay.style.left = "-100%";
    bodytRef.style.overflowY = 'scroll'
}

function closePokeDex() {
    let bodytRef = document.body
    let overlay = document.getElementById('pokeDexOverlay')
    overlay.style.left = "0";
    bodytRef.style.overflowY = 'hidden'
}