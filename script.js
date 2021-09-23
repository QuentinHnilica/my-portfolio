const contactMod = document.querySelector('#contactModal')
const contactButton = document.querySelector('#contact')
const closeMod = document.querySelector('#closeMod')


function openMod(e){
    let thisTarget = document.querySelector('#' + e.target.id + "Modal") 
    thisTarget.classList.add('is-active')
}

function closeContact(e){
    contactMod.classList.remove('is-active')
}

closeMod.addEventListener('click', closeContact)
contactButton.addEventListener('click', openMod)



