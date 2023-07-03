//show or hide login

const loginShower = document.querySelector('#loginShower')
const loginForm = document.getElementById('loginForm')
const vanish = document.querySelector('#vanishingInv')

loginShower.addEventListener('mouseover', () => {
    loginForm.style.display = 'block'
    vanish.style.display = 'none';
    if (screen.width < 600)
        loginShower.style.height = '250px';
})

    loginShower.addEventListener('mouseout', function () {
    loginForm.style.display = 'none'
    vanish.style.display = 'block';
    if (screen.width < 600)
        loginShower.style.height = '50px';
})


// loginForm functionality

function isValidMessage () {
    var em = document.querySelector('#email').value
    var isEmail = /^\S+@\S+\.\S+$/.test(em)
    submitter = document.querySelector('#submitMess')
    if (isEmail &
        (document.querySelector('#message').value != "") &
        (document.querySelector('#name').value != "")) {
            submitter.disabled = false;
    }
    else submitter.disabled = true;
}

function sendMess () {
    window.location.href = "mailto:"+document.querySelector('#email').value+"?subject=nicely submitted Mail by "+document.querySelector('#name').value+"&body="+document.querySelector('#message').value
}

// unblock alert in iframed content

function unblockAlert () {
    var unblockButton = document.querySelector('#allowmodal')
    var atr = (unblockButton.textContent =='unblock alert' ) ? "allow-scripts allow-modals" : "allow-scripts"
    var buttonString = (unblockButton.textContent =='unblock alert' ) ? 'block again' : 'unblock alert'
        document.querySelector('#jspage2').setAttribute("sandbox", atr)
        unblockButton.textContent = buttonString
        //content needs to b reloaded, otherwise it won't work
        document.querySelector('#jspage2').setAttribute("src", "./downloads/page-js-2.html")
}