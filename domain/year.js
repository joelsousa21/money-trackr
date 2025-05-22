class Year {
  constructor() {
    this.months = [];
  }

  addMonth(month) {
    this.months.push(month);
  }

  addRelease(monthName, release) {
    for (const month of this.months) {
      if (month.name === monthName) {
        month.addRelease(release);
        break;
      }
    }
  }

  calculateBalance() {
    let initialBalance = 0;
    for (const month of this.months) {
      month.initialBalance = initialBalance;
      month.calculateBalance();
      initialBalance = month.totalizer.balance;
    }
  }
}
