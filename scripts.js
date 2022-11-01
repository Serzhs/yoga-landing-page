// Get the root element
const rootEl = document.querySelector(':root');
// Get the logo
const logoEl = document.querySelector('.js-logo')

// we need to observe normal mode
let normalModeOn = true

// change CSS variables when logo is clicked
logoEl.addEventListener('click', () => {
    // check if normal mode
    if(normalModeOn === true) {
        rootEl.style.setProperty('--blue-accent', 'red');
        rootEl.style.setProperty('--white-accent', '#000');
        rootEl.style.setProperty('--black-accent', '#fff');

        // now it is not normal any more :D 
        normalModeOn = false
    } else {
        rootEl.style.setProperty('--blue-accent', '#2f6ee2');
        rootEl.style.setProperty('--white-accent', '#fff');
        rootEl.style.setProperty('--black-accent', '#000');

        // normal again :D 
        normalModeOn = true
    }
})
