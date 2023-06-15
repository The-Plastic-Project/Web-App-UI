
document.getElementById('results-div').style.visibility = 'hidden'
document.getElementById('picture-div').style.visibility = 'hidden'
document.getElementById('note-div').style.visibility = 'hidden'


// handle click
function HandleBrowseClick() {
  var fileinput = document.getElementById("fileInput");
  fileinput.click();
}

// classify image
const img = document.getElementById('img');
const result = document.getElementById('result');
const results_detailed = document.getElementById('results-detailed');
document.getElementById('fileInput').addEventListener("change", e => {
  document.getElementById('results-div').style.visibility = 'visible'
  document.getElementById('picture-div').style.visibility = 'visible'
  document.getElementById('note-div').style.visibility = 'visible'
  document.getElementById('upload-btn').style.visibility = 'hidden'
  result.style.visibility = 'visible';
  result.textContent = 'Recognizing...';
  results_detailed.style.visibility = 'visible';
  results_detailed.textContent = 'Information on how to proceed with your product will appear here.'
  result.scrollIntoView();
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = async (e) => {
    const base64 = e.target.result;
    img.setAttribute('src', base64);
    const url = 'https://onklb0qxvc.execute-api.us-west-1.amazonaws.com/dev';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ file: base64 })
    });
    const recognizedObject = await response.json();
    console.log(recognizedObject)
    result.textContent = "Identified as: " + JSON.parse(recognizedObject.result)
    results_detailed.textContent = JSON.parse(recognizedObject.message)
  }
});