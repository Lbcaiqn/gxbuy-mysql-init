const fs = require("fs");

const a = JSON.parse(fs.readFileSync("./data/goods_img.json"));

console.log(a[0]);
