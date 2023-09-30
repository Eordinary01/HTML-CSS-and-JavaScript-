const fs = require("fs");
let text = fs.readFileSync("tryep", "utf-8");
text = text.replace("view", "Sigma");

console.log("The content of the file is ")
console.log(text);

console.log("Creating a New File...");
fs.writeFileSync("Parth.txt", text);