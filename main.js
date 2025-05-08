const jenuary = new Month("janeiro");
jenuary.addRelease(new Release("Salário", "income", 5000));
jenuary.addRelease(new Release("Aluguel", "expensive", 1000));
jenuary.addRelease(new Release("Conta de luz", "expensive", 500));
jenuary.addRelease(new Release("Conta de Água", "expensive", 500));
jenuary.addRelease(new Release("Internet", "expensive", 500));
jenuary.addRelease(new Release("Transporte", "expensive", 200));
jenuary.addRelease(new Release("Lazer", "expensive", 300));
jenuary.addRelease(new Release("Alimentação", "expensive", 1000));

const february = new Month("fevereiro");
february.addRelease(new Release("Salário", "income", 6000));
february.addRelease(new Release("Aluguel", "expensive", 3000));
february.addRelease(new Release("Conta de luz", "expensive", 1000));
february.addRelease(new Release("Conta de Água", "expensive", 1000));
february.addRelease(new Release("Internet", "expensive", 250));
february.addRelease(new Release("Transporte", "expensive", 250));
february.addRelease(new Release("Lazer", "expensive", 250));
february.addRelease(new Release("Alimentação", "expensive", 250));

const march = new Month("março");
march.addRelease(new Release("Salário", "income", 4000));
march.addRelease(new Release("Aluguel", "expensive", 1200));
march.addRelease(new Release("Conta de luz", "expensive", 200));
march.addRelease(new Release("Conta de Água", "expensive", 100));
march.addRelease(new Release("Internet", "expensive", 200));
march.addRelease(new Release("Transporte", "expensive", 500));
march.addRelease(new Release("Lazer", "expensive", 800));
march.addRelease(new Release("Alimentação", "expensive", 1000));

const april = new Month("abril");
april.addRelease(new Release("salário", "income", 7000));

const year = new Year();
year.addMonth(jenuary);
year.addMonth(february);
year.addMonth(march);
year.addMonth(april);
year.calculateBalance();

jenuary.addRelease(new Release("Escola", "expensive", 1100));
february.addRelease(new Release("Escola", "expensive", 1100));
march.addRelease(new Release("Escola", "expensive", 1100));
year.calculateBalance();

console.log(year.months);

function addElement(parent, elementType, text) {
  const element = document.createElement(elementType);
  if (text !== "" && text !== undefined && text !== null) {
    element.innerText = text;
  }
  parent.appendChild(element);
}

function render() {
  const app = document.getElementById("app");
  if (app.firstChild) {
    app.firstChild.remove();
  }
  const painel = document.createElement("div");
  for (const month of year.months) {
    addElement(painel, "h3", month.name);
    console.log(painel);
    for (const release of month.releases) {
      const releaseDetails =
        release.category + " " + release.type + " " + release.value;
      addElement(painel, "p", releaseDetails);
    }
    addElement(painel, "h4", month.totalizer.balance);
    addElement(painel, "hr");
  }
  app.appendChild(painel);
}

render();

function addRelease() {
  const month = document.getElementById("month").value;
  const type = document.getElementById("type").value;
  const category = document.getElementById("category").value;
  const value = document.getElementById("value").value;
  year.addRelease(month, new Release(category, type, parseFloat(value)));
  year.calculateBalance();
  document.getElementById("month").value = "";
  document.getElementById("type").value = "";
  document.getElementById("category").value = "";
  document.getElementById("value").value = "";
  render();
}

const button = document.getElementById("button");
console.log(button);
button.addEventListener("click", addRelease);
