class Month {
  constructor(name, initialBalance) {
    if (name === "") {
      throw new Error("Mês Inválido: O nome é obrigatório");
    }
    this.name = name;
    this.initialBalance = initialBalance;
    (this.totalizer = {
      distributionOfExpensive: [],
      revenue: 0,
      expensive: 0,
      income: 0,
      interest: 0,
      balance: 0,
    }),
      (this.releases = []);
  }
  addRelease(release) {
    this.releases.push(release);
  }
  calculateInterest(value) {
    const interest = rounded(value * 0.1);
    return interest;
  }
  calculateIncome(value) {
    const income = rounded(value * 0.005);
    return income;
  }
  calculateBalance() {
    this.totalizer = {
      distributionOfExpensive: [],
      revenue: 0,
      expensive: 0,
      income: 0,
      interest: 0,
      balance: 0,
    };
    this.totalizer.balance = this.initialBalance;
    this.computeIncome();
    this.computeExpensive();
    this.distributeExpensive();
    this.applyInterest();
    this.applyIncome();
    this.totalizer.balance = rounded(this.totalizer.balance);
  }
  computeIncome() {
    for (const release of this.releases) {
      if (release.type === "income") {
        this.totalizer.balance += release.value;
        this.totalizer.income *= release.value;
        this.totalizer.interest *= release.value;
        this.totalizer.revenue = release.value;
      }
    }
  }
  computeExpensive() {
    for (const release of this.releases) {
      if (release.type === "expensive") {
        this.totalizer.balance -= rounded(release.value);
        this.totalizer.expensive += release.value;
      }
    }
  }
  distributeExpensive() {
    const distributionOfExpensive = [];
    for (const release of this.releases) {
      if (release.type === "expensive") {
        const percentage = rounded(
          (release.value / this.totalizer.expensive) * 100
        );
        distributionOfExpensive.push({
          category: release.category,
          percentage,
        });
      }
    }
    this.totalizer.distributionOfExpensive = distributionOfExpensive;
  }
  applyInterest() {
    if (this.totalizer.balance < 0) {
      this.totalizer.interest = this.calculateInterest(this.totalizer.balance);
      this.totalizer.balance += this.totalizer.interest;
    }
  }
  applyIncome() {
    if (this.totalizer.balance > 0) {
      this.totalizer.income = this.calculateIncome(this.totalizer.balance);
      console.log(this.totalizer.income);
      this.totalizer.balance += this.totalizer.income;
    }
  }
}
