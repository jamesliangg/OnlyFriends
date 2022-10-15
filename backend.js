//  var input = document.getElementById("userInput").value;
//  alert(input);

function readFile(input) {
  let file = input.files[0];
  let fileReader = new FileReader();
  fileReader.readAsText(file);
  fileReader.onload = function() {
    alert(fileReader.result);
    // return fileStuff;
    fileToArray(fileReader.result);
  };
  fileReader.onerror = function() {
    alert(fileReader.error);
  };
}

function fileToArray(icsInfo) {
  var icsArray = icsInfo.split("\n");
  console.log(icsArray[0]);
  var course = 0;
  var timing = [];
  for (var i in icsArray) {
    if (icsArray[i].includes("DTSTART;TZID")) {
      timing[course] = icsArray[i];
      course++;
      console.log(icsArray[i]);
    }
    if (icsArray[i].includes("DTEND;TZID")) {
      timing[course] = icsArray[i];
      course++;
      console.log(icsArray[i]);
    }
  }
}