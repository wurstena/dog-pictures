const spinner = document.getElementById("catSpinner");

function showSpinner() {
  spinner.className = "show";
  setTimeout(() => {
    spinner.className = spinner.className.replace("show", "");
  }, 5000);
}

function hideSpinner() {
   spinner.className = spinner.className.replace("show", "");
}

document.getElementById("catButtonSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  url = "https://api.thecatapi.com/v1/images/search";
  showSpinner();
  fetch(url)
    .then(function(response) {
      if (!response.ok) {
        console.log("error");
        throw Error(response.statusText);
      }
      return response.json();
    }).then(function(json) {
      let results = "<img src=" + json[0].url + " alt='picture of cat'/>";
      document.getElementById("catPicture").innerHTML = results;
      hideSpinner();
    }).catch(function(error) {
      let results = "";
      results += "<h2 class='error'>Error: Trouble Fetching the cat picture, try refreshing the page</h2>";
      document.getElementById("catPicture").innerHTML = results;
      hideSpinner();
    });
  });
