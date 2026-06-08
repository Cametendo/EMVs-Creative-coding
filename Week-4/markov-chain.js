let myData;

function preload() {
  myData = loadStrings("onepiece.txt");
}

function setup() {
  createCanvas(400, 300);
  background(220);

  const myDataSplit = myData.flatMap((str) => str.split(/\s+/)).filter(Boolean);

  let map = new Map();

  for (let i = 0; i < myDataSplit.length - 1; i++) {
    let currentWord = myDataSplit[i];
    let nextWord = myDataSplit[i + 1];

    if (!map.has(currentWord)) {
      map.set(currentWord, []);
    }
    map.get(currentWord).push(nextWord);
  }

  let phraseArray = [];

  let currentWord = myDataSplit[Math.floor(Math.random() * myDataSplit.length)];
  phraseArray.push(currentWord);

  for (let i = 0; i < 150; i++) {
    let possibilities = map.get(currentWord);

    if (!possibilities || possibilities.length === 0) {
      break;
    }

    let nextWord =
      possibilities[Math.floor(Math.random() * possibilities.length)];
    phraseArray.push(nextWord);

    currentWord = nextWord;
  }

  let phrase = phraseArray.join(" ");

  textAlign(LEFT, TOP);
  textFont("Courier New");
  textSize(12);
  text(phrase, 20, 40, 360, 200);

  text("- Someone unnamed", 20, 260);
}
