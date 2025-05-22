class h4 {
  constructor(text){
    this.element = document.createElement("h4");
    this.element.innerText = text;
  }
  addElementChild (child){
    this.element.appendChild(child);
  }
}