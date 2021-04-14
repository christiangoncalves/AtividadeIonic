window.onload = function(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(json => document.getElementById("foto").src = json.message);
}

