var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link")
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzk4WBnihbr0EPCQJ3VvuFp9xu13UEv-2BRo3EfbaM29h6ZwhNoHiZf7Kt6XJ-sS7Ywiw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message sent successfully"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 3000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})