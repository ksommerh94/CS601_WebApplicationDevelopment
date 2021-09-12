let result=getColor("pink")

function  getColor(colorName){
  let name = colorName.toLowerCase();
  if (name === "red") {return "#ff0000";}
  else if (name === "yellow") {return "#ffff00";}
  else if (name === "blue") {return "#0000ff";}
  else if (name === "purple") {return "#800080";}
  else if (name === "green") {return "#008000";}
  else if (name === "pink") {return "#ffc0cb";}
  else if (name === "orange") {return "#ffa500";}
  else if (name === "magenta") {return "#ff00ff";}
  else if (name === "lime") {return "#00ff00";}
  else if (name === "ivory") {return "#fffff0";}
  else if (name === "indigo") {return "#4b0082";}
  else if (name === "gray") {return "#808080";}
  else if (name === "gold") {return "#ffd700";}
  else if (name === "fuchsia") {return "#ff00ff";}
  else if (name === "brown") {return "#a52a2a";}
  else if (name === "black") {return "#000000";}
  else {return "#ffffff";}
;}
