class Div {
  constructor(id, className){
    this.element = document.createElement("div");
    this.element.id = id;
    this.element.className = className;
  }

  addElementChild (child){
    this.element.appendChild(child);
  }
}