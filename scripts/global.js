var mainModal = document.getElementById("mainModal");
var closeButton = document.getElementsByClassName("closeModal")[0];

if (!localStorage.getItem("hasVisited")) {
    mainModal.style.display = "block";
    localStorage.setItem("hasVisited", "true");
}

closeButton.onclick = function() {
    mainModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === mainModal) {
    } else {
        mainModal.style.display = "none";
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        mainModal.style.display = "none";
    }
});

var plusXs = document.querySelectorAll('.plusX');
for(i=0; i<=plusXs.length; i++) {
  plusXs[i].addEventListener('click', function() {
    this.classList.toggle('active');
  }, false);
}

//FOLLOWING CODE AND COMMENT PROVIDED BY MICHAEL WENDER https://gist.github.com/mwender/6e9391db550102508a7f2db08d215599
/**
 * Obfuscates email addresses in 'mailto' links to protect them from spam bots.
 *
 * This function first selects all anchor elements (<a>) in the document that have a 'href' attribute
 * starting with 'mailto:'. For each of these mailto links, it retrieves the email address,
 * obfuscates it, and then modifies the link's 'href' attribute to use a JavaScript code snippet
 * for redirection. This obfuscation involves converting each character of the email address
 * into its corresponding character code, joined by dots. Additionally, a click event listener
 * is added to each link to handle the redirection in a user-friendly manner. When a user
 * clicks on the obfuscated link, the browser redirects them to the actual 'mailto' link,
 * allowing them to send an email to the address.
 *
 * The function is set to be called automatically when the window finishes loading,
 * ensuring that all 'mailto' links are obfuscated as soon as the page is ready.
 */
function obfuscateMailtoLinks() {
  const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');

  mailtoLinks.forEach(link => {
    const email = link.getAttribute('href').split(':')[1];
    const obfuscatedEmail = email.split('').map(char => {
      return char.charCodeAt(0);
    }).join('.');

    link.setAttribute('href', `javascript:location.href='mailto:'+String.fromCharCode(${obfuscatedEmail})`);
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = `mailto:${email}`;
    });
  });
}

window.onload = obfuscateMailtoLinks;