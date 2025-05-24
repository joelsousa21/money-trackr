class Button{
  constructor(id, text){
    this.element = document.createElement("button");
    this.element.id = id;
    this.element.innerText = text;
  }
  addListenner(fn){
    this.element.addEventListener("click", fn);
  }
}