//show/hide login

const loginShower = document.querySelector('#loginShower')
const loginForm = document.getElementById('loginForm')
const vanish = document.querySelector('#vanishingInv')

loginShower.addEventListener('mouseover', () => {
        loginForm.style.display = 'block'
        vanish.style.display = 'none';
    })

    loginShower.addEventListener('mouseout', function () {
    loginForm.style.display = 'none'
    vanish.style.display = 'block';
})


// loginForm functionality

function isValidMessage () {
    var em = document.querySelector('#email').value
    var isEmail = /^\S+@\S+\.\S+$/.test(em)
    submitter = document.querySelector('#submitMess')
    if (isEmail & (document.querySelector('#message').value != "")) {
            submitter.disabled = false;
    }
    else submitter.disabled = true;
}

function sendMess () {
    window.location.href = "mailto:"+document.querySelector('#email').value+"?subject=nicely submitted Mail&body="+document.querySelector('#message').value
}