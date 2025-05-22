class Graphic {
  constructor(){
    this.element = document.createElement("div");
    this.element.className = "graphic";
    this.colors = ["red", "yellow", "green", "blue"];
  } 
  addColumn (value, description){
const column = document.createElement("div");
    column.className = "graphic-column";
    const color = document.createElement("div");
    color.style.height = (value * 100) / 10000 + "px";
    color.style.background = this.colors.pop();
    column.appendChild(color);
    const monthName = document.createElement("div");
    monthName.className = "graphic-column-text";
    monthName.innerText = description;
    column.appendChild(color);
    column.appendChild(monthName);
    this.element.appendChild(column);
  }
}