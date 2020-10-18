const spinner = document.getElementById("spinner");

function showSpinner() {
  spinner.className = "show";
  setTimeout(() => {
    spinner.className = spinner.className.replace("show", "");
  }, 5000);
}

function hideSpinner() {
   spinner.className = spinner.className.replace("show", "");
}

document.getElementById("buttonSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  url = "https://dog.ceo/api/breeds/image/random";
  showSpinner();
  fetch(url)
    .then(function(response) {
      if (!response.ok) {
        console.log("error");
        throw Error(response.statusText);
      }
      return response.json();
    }).then(function(json) {
      let results = "<img src=" + json.message + " alt='picture of dog'/>";
      document.getElementById("picture").innerHTML = results;
      hideSpinner();
    }).catch(function(error) {
      let results = "";
      results += "<h2 class='error'>Error: Trouble Fetching the dog picture, try refreshing the page</h2>";
      document.getElementById("picture").innerHTML = results;
      hideSpinner();
    });
  });
