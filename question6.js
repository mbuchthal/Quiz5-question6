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
    // return arrayOfStrings[randomString];
  } else {
    console.log('This is not a string!');
  }
}

buttonOne.addEventListener('click', returnRandomString(arrayOne));

answer.innerHTML = stringResult;

})();
