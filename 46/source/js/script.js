const contextMenu = document.getElementById('contextMenu')

function contextHandler(event) {
    event.preventDefault()

    if (contextMenu.style.display === 'none') {

        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
        contextMenu.style.display = 'block'
    } else {
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
    }

    console.log('event')
}
function clickHandler() {
    contextMenu.style.display = 'none'
}




document.body.addEventListener('contextmenu', contextHandler)
document.body.addEventListener('click', clickHandler)
