// CUSTOM PWA INSTALL

function show_install() {
  document.getElementById('install-bar').style.visibility = "visible";
}


function hide_install() {
  document.getElementById('install-bar').style.visibility = "hidden";
}

// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  show_install();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});

let buttonInstall = document.getElementById('install-btn');

buttonInstall.addEventListener('click', async () => {
  // Hide the app provided install promotion
  hide_install();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  // Optionally, send analytics event with outcome of user choice
  console.log(`User response to the install prompt: ${outcome}`);
  // We've used the prompt, and can't use it again, throw it away
  deferredPrompt = null;
});


// GETTING FUN FACT FROM SERVER


(async function() {
  async function getFunFact() {
    const url = 'https://6scmtwnqed.execute-api.us-west-1.amazonaws.com/dev';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ "fact": "true" })
    });
    let res = await response.json();
    return JSON.parse(res.body);
  }

  const fact = await getFunFact();
  document.getElementById('fun-fact').textContent = fact;
})();



// GETTING DATE


// Get the current date
const currentDate = new Date();

// Format the date as desired
const options = { weekday: 'long', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString(undefined, options);

// Update the HTML tag with the formatted date
const datePlaceholder = document.getElementById('datePlaceholder');
datePlaceholder.textContent = `${formattedDate}`;
