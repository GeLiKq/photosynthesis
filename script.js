let media = window.matchMedia('(max-width: 1224px)')
let h1 = document.querySelector('h1')
if (media.matches) {
    h1.innerHTML = 'Значение фотосинтеза'
}else{
    h1.innerHTML = 'Значение фотосинтеза на планете'
}