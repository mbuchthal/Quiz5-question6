(function() {

var string = document.getElementById('samplearray').innerHTML;
var arrayOne = string.split('. ');

var buttonOne = document.getElementById('button');
var answer = document.getElementById('randomstring');
var stringResult;

function returnRandomString(arrayOfStrings) {
  var randomString = Math.floor(Math.random() * arrayOfStrings.length);
  if (typeof arrayOfStrings[randomString] === 'string') {
    stringResult = arrayOfStrings[randomString];
    answer.innerHTML = stringResult;
  } else {
    console.log('This is not a string!');
  }
}

buttonOne.addEventListener('click', function(e) {
  e.preventDefault();
  returnRandomString(arrayOne);
});


})();
