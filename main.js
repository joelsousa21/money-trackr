const initialBalance = 0;
const jenuary = new Month("janeiro", initialBalance);
jenuary.addRelease(new Release("Salário", "income", 5000));
jenuary.addRelease(new Release("Aluguel", "expensive", 1000));
jenuary.addRelease(new Release("Conta de luz", "expensive", 500));
jenuary.addRelease(new Release("Conta de Água", "expensive", 500));
jenuary.addRelease(new Release("Internet", "expensive", 500));
jenuary.addRelease(new Release("Transporte", "expensive", 200));
jenuary.addRelease(new Release("Lazer", "expensive", 300));
jenuary.addRelease(new Release("Alimentação", "expensive", 1000));
jenuary.calculateBalance();
console.log(jenuary);

const february = new Month("fevereiro", jenuary.totalizer.balance);
february.addRelease(new Release("Salário", "income", 6000)),
  february.addRelease(new Release("Aluguel", "expensive", 3000)),
  february.addRelease(new Release("Conta de luz", "expensive", 1000)),
  february.addRelease(new Release("Conta de Água", "expensive", 1000)),
  february.addRelease(new Release("Internet", "expensive", 250)),
  february.addRelease(new Release("Transporte", "expensive", 250)),
  february.addRelease(new Release("Lazer", "expensive", 250)),
  february.addRelease(new Release("Alimentação", "expensive", 250)),
  february.calculateBalance();
console.log(february);

const march = new Month("março", february.totalizer.balance);
march.addRelease(new Release("Salário", "income", 4000)),
  march.addRelease(new Release("Aluguel", "expensive", 1200)),
  march.addRelease(new Release("Conta de luz", "expensive", 200)),
  march.addRelease(new Release("Conta de Água", "expensive", 100)),
  march.addRelease(new Release("Internet", "expensive", 200)),
  march.addRelease(new Release("Transporte", "expensive", 500)),
  march.addRelease(new Release("Lazer", "expensive", 800)),
  march.addRelease(new Release("Alimentação", "expensive", 1000)),
  march.calculateBalance();
console.log(march);
