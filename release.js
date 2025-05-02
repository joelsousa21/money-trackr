class Release {
  constructor(category, type, value) {
    if (type !== "income" && type !== "expensive") {
      throw new Error(
        "Lançamento Inválido: O tipo deve ser receita ou despesa"
      );
    }
    if (value <= 0) {
      throw new Error("Lançamento Inválido: O valor deve ser maior que zero.");
    }
    if (category === "") {
      throw new Error("Lançamento Inválido: A categoria é obrigatória.");
    }
    this.category = category;
    this.type = type;
    this.value = value;
  }
}
