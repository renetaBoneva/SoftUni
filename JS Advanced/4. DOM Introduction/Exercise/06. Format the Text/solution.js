function solve() {
  let text = document.getElementById('input').value;
  let sentences = text.split('.').filter(e => e.length >0);
  let l = sentences.length;
  let output = document.getElementById('output');

  for(let i = 0; i < l; i+=3){

    let s1 = sentences[i];
    let s2 = sentences[i + 1];
    let s3 = sentences[i  + 2];

    let paragraph = [];
    if(s1 !== undefined){
      paragraph.push(s1);
    }
    if(s2 !== undefined){
      paragraph.push(s2);
    }
    if(s3 !== undefined){
        paragraph.push(s3);
    }

      output.innerHTML += `<p>${paragraph.join('. ')}.</p>`;
  }
  debugger;
}
