document.getElementById('ai-content').style.display = 'none'



// handle click
function HandleBrowseClickv1() {
  var fileinput = document.getElementById("fileUploadInput");
  fileinput.click();
}

// handle click
function HandleBrowseClickv2() {
  var fileinput = document.getElementById("takeImageInput");
  fileinput.click();
}



// classify image
const img = document.getElementById('img');
const result = document.getElementById('result');
const results_detailed = document.getElementById('results-detailed');
document.getElementById('fileUploadInput').addEventListener("change", e => {
  document.getElementById('ai-content').style.display = 'block'
  document.getElementById('upload-btn').style.display = 'none'
  document.getElementById('add-file-btn').style.display = 'none'
  document.getElementById('ai-warning').style.display = 'none'
  document.getElementById('info-div').style.height = 'auto'
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

document.getElementById('takeImageInput').addEventListener("change", e => {
  document.getElementById('ai-content').style.display = 'block'
  document.getElementById('upload-btn').style.display = 'none'
  document.getElementById('add-file-btn').style.display = 'none'
  document.getElementById('ai-warning').style.display = 'none'
  document.getElementById('info-div').style.height = 'auto'
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