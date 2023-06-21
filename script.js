if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' });
}

var is_mobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;

if (!is_mobile) {
  document.getElementById('shop').setAttribute("style", "height: 400px; background-color: #faece1; border-radius: 20px; max-width: 100%;");
  document.getElementById('leftcol').setAttribute("style", "height: 400px;");
  document.getElementById('leftcol').setAttribute("class", "col-4");
  document.getElementById('rightcol').setAttribute("class", "col-8");
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