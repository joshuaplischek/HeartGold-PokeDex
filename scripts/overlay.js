function openPokeDex() {
    let contentRef = document.getElementById(`content`)
    let overlay = document.getElementById('pokeDexOverlay')
    overlay.style.left = "-100%";
    contentRef.style.display = 'Flex'
}

function closePokeDex() {
    let contentRef = document.getElementById(`content`)
    let overlay = document.getElementById('pokeDexOverlay')
    overlay.style.left = "0";
    contentRef.style.display = 'none'
}