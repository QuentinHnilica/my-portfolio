const contactMod = document.querySelector('#contactModal')
const contactButton = document.querySelector('#contact')
const closeMod = document.querySelector('#closeMod')
const resumeMod = document.querySelector('#resumeModal')
const resumeButton = document.querySelector('#resume')
const closeResume = document.querySelector('#closeResume')

function openMod(e){
    let thisTarget = document.querySelector('#' + e.target.id + "Modal") 
    thisTarget.classList.add('is-active')
}

function closeContact(e){
    contactMod.classList.remove('is-active')
}

function closeResumeMod(e){
    resumeMod.classList.remove('is-active')
}

closeMod.addEventListener('click', closeContact)
contactButton.addEventListener('click', openMod)
resumeButton.addEventListener('click', openMod)
closeResume.addEventListener('click', closeResumeMod)