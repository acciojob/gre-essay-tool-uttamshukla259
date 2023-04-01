//your code here
function countWords() {
  var text = document.getElementById('evaluatedText').value;
  var wordCount = 0;
  if (text.trim() !== '') {
    var matches = text.match(/\b\w+\b/g);
    wordCount = matches ? matches.length : 0;
  }
  document.getElementById('wordCount').textContent = wordCount;
}