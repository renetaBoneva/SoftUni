function extractFiles(path){

    let file = path.split('\\').pop();
    let fileArr = file.split('.');
    let fileExtension = fileArr.pop();
    let fileName = fileArr.join('.');
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

}
extractFiles('C:\\Internal\\training-internal\\Template.pptx');
console.log('-----------------------');
extractFiles('C:\\Projects\\Data-Structures\\LinkedList.cs');
console.log('-----------------------');
extractFiles('C:\\Projects\\Data-Structures\\template.bak.pptx');