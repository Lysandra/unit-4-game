$(document).ready(function() {

    var randomNumberValue = Math.floor((Math.random() * 100) + 1);
    $(".randomNumberValue").text(randomNumberValue);
    console.log(randomNumberValue);

$("#crystalone").on("click", function() {
    $(".yourNumberValue").text(crystaloneValue);
    crystaloneValue = ($(this).attr("data-crystaloneValue"));
    crystaloneValue = parseInt(crystaloneValue);

});

$("#crystaltwo").on("click", function() {
    $(".yourNumberValue").append(crystaltwoValue);
    crystaltwoValue = ($(this).attr("data-crystaltwoValue"));
    crystaltwoValue = parseInt(crystaltwoValue);
});

$("#crystalthree").on("click", function() {
    $(".yourNumberValue").append(crystalthreeValue);
    crystalthreeValue = ($(this).attr("data-crystalthreeValue"));
    crystalthreeValue = parseInt(crystalthreeValue);
});

$("#crystalfour").on("click", function() {
    $(".yourNumberValue").append(crystalfourValue);
    crystalfourValue = ($(this).attr("data-crystalfourValue"));
    crystalfourValue = parseInt(crystalfourValue);
});

var crystaloneValue = Math.floor((Math.random() * 100) + 1);
var crystaltwoValue = Math.floor((Math.random() * 100) + 1);
var crystalthreeValue = Math.floor((Math.random() * 100) + 1);
var crystalfourValue = Math.floor((Math.random() * 100) + 1);


crystaloneValue = parseInt(crystaloneValue);
crystaltwoValue = parseInt(crystaltwoValue);
crystalthreeValue = parseInt(crystalthreeValue);
crystalfourValue = parseInt(crystalfourValue);

var yourNumberValue = [crystaloneValue, crystaltwoValue, crystalthreeValue, crystalfourValue];
var yourNumberValuecounter = 0;

for(var i=0; i < yourNumberValue.length; i++){

    sum += (yourNumberValue[i]);

}

if (yourNumberValue > randomNumberValue) {
    alert("You lose. Try again!");
  }

  else if (yourNumberValue <= randomNumberValue) {
    alert("You win!!");
  }
});
