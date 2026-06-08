let img_Joyboy;
let img_Gears;
let img_Git;
let img_Mai;
let img_Mai2;
let img_Miku;
let img_Monitoring;
let img_Picture;
let img_Juerg;
let img_Strawhat;
let img_Tux;
let img_Waifu;
const imageArray = [];
let randomImageIndex = 0;

function mouseClicked() {
  randomImageIndex = Math.random() * imageArray.length;
  randomImageIndex = parseInt(randomImageIndex);
  console.log(randomImageIndex);
  clear();
  const { img, width, height } = imageArray[randomImageIndex];
  image(img, 0, 0, width, height);
}

function preload() {
  img_Gears = loadImage("/Images/Gears.png");
  img_Git = loadImage("/Images/Git-Icon-1788C.png");
  img_Joyboy = loadImage("/Images/joyboy.png");
  img_Mai = loadImage("/Images/Mai.png");
  img_Mai2 = loadImage("/Images/Mai2.jpg");
  img_Miku = loadImage("/Images/Miku1.jpg");
  img_Monitoring = loadImage("/Images/monitoring-miku.png");
  img_Picture = loadImage("/Images/pictureV2.jpg");
  img_Juerg = loadImage("/Images/Profilbild_juerg.png");
  img_Strawhat = loadImage("/Images/Strawhat.png");
  img_Tux = loadImage("/Images/Tux-svg.png");
  img_Waifu = loadImage("/Images/waifu1.png");

  imageArray.push({ img: img_Gears, width: 800, height: 800 });
  imageArray.push({ img: img_Joyboy, width: 681, height: 800 });
  imageArray.push({ img: img_Git, width: 800, height: 800 });
  imageArray.push({ img: img_Mai, width: 835, height: 800 });
  imageArray.push({ img: img_Mai2, width: 800, height: 800 });
  imageArray.push({ img: img_Miku, width: 800, height: 800 });
  imageArray.push({ img: img_Monitoring, width: 800, height: 800 });
  imageArray.push({ img: img_Picture, width: 800, height: 800 });
  imageArray.push({ img: img_Juerg, width: 800, height: 800 });
  imageArray.push({ img: img_Strawhat, width: 800, height: 800 });
  imageArray.push({ img: img_Tux, width: 675, height: 800 });
  imageArray.push({ img: img_Waifu, width: 1049, height: 800 });
}

function setup() {
  createCanvas(1400, 1400);
  const { img, width, height } = imageArray[randomImageIndex];
  image(img, 0, 0, width, height);
}
