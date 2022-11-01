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
        // change --blue-accent value
        rootEl.style.setProperty('--blue-accent', 'red');
        // change --white-accent value
        rootEl.style.setProperty('--white-accent', '#000');
        // change --black-accent value
        rootEl.style.setProperty('--black-accent', '#fff');

        // now it is not normal any more :D 
        normalModeOn = false
    } else {
         // change --blue-accent value
        rootEl.style.setProperty('--blue-accent', '#2f6ee2');
         // change --white-accent value
        rootEl.style.setProperty('--white-accent', '#fff');
         // change --black-accent value
        rootEl.style.setProperty('--black-accent', '#000');

        // normal again :D 
        normalModeOn = true
    }
})
