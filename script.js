if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' });
}

function search_stores() {
  let input = document.getElementById('searchbar').value;
  input = input.toLowerCase();
  console.log(input);
  let x = document.getElementsByClassName('store');

  for (i = 0; i < x.length; i++) {
    if (!x[i].dataset.name.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
}