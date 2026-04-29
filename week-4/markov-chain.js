let myData;
const amountOfWords = 100;
let uniqueArray = [];
let sentenceArray = [];
let exist = false;

function preload() {
  myData = loadStrings("apfel.txt");
}

function setup() {
  createCanvas(400, 300);
  console.log(myData);
  background(200);

  const myDataSplit = myData.flatMap((str) => str.split(" ")).filter(Boolean);
  //console.log(myDataSplit);

  for (let i = 0; i < myDataSplit.length; i++) {
    for (let j = 0; j < uniqueArray.length; j++) {
      if (myDataSplit[i] === uniqueArray[j]) {
        exist = true;
      }
    }
    if (!exist) {
      uniqueArray.push(myDataSplit[i]);
    }
    exist = false;
  }
  console.log(uniqueArray);

  let map = new Map();
  let nextWords = [];
  for (let i = 0; i < uniqueArray.length; i++) {
    nextWords = [];
    for (let j = 0; j < myDataSplit.length; j++) {
      if (uniqueArray[i] === myDataSplit[j]) {
        nextWords.push(myDataSplit[j + 1]);
      }
    }
    map.set(uniqueArray[i], nextWords);
    // map.set("nextWords", uniqueArray[i + 1]);
  }

  map.set("abc", ["a", "b", "g"]);

  console.log(map);

  // Select a random line from the text.
  /*let phrase = "";
  for (let i = 0; i < amountOfWords; i++) {
    let phrasePart = random(myDataSplit);
    phrase = phrase + " " + phrasePart;
  }
  console.log(phrase); */

  textAlign(LEFT, CENTER);
  textFont("Courier New");
  textSize(12);

  // text(phrase, 20, 100, 300);

  // describe(`${phrase}`);
  text("- William Shakespeare", 20, 250);
}

function generateWords() {}
