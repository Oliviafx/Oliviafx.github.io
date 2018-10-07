// Get the modal
var modal = document.getElementById('CritterModal');

// Get the button that opens the modal
var btn = document.getElementById("critter");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//Image Collage
function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var allImages = "";

for (var i = 0; i < 25; i++) {
  var width = getRandomSize(200, 400);
  var height =  getRandomSize(200, 400);
  //allImages += '<img src="https://placekitten.com/'+height+'/'+width+'" alt="pretty kitty">';
  allImages += '<img src="images/CritterWorld.jpg" id="critter" style="width:25%;height:25%;">';
  allImages += '<img src="images/pawpulation.png" style="width:30%;height:30%;">';
  allImages += '<img src="images/SNAP1.PNG" style="width:15%;height:15%;">';
  allImages += '<img src="images/recommendations.PNG" style="width:30%;height:40%;">';

}

$('#photos').append(allImages);