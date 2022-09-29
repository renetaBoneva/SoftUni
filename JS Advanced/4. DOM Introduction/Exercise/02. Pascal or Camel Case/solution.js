function solve() {
  let input = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let inputArr = input.split(' ');
  let result = '';
  let length = inputArr.length;
  debugger
  switch (namingConvention) {
    case "Camel Case":
      result += inputArr[0].toLowerCase();
      for (let i = 1; i < length; i++) {
        let currentWord = inputArr[i];
        result += currentWord[0].toUpperCase() + currentWord.substring(1).toLowerCase();  
      }      
      break;
    case "Pascal Case":
      for (let i = 0; i < length; i++) {
        let currentWord = inputArr[i];
        result += currentWord[0].toUpperCase() + currentWord.substring(1).toLowerCase();  
      }      
      break;  
    default:
      result = 'Error!';
      break;
  }
  document.getElementById('result').innerText = result;
}