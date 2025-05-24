class Screen {
    constructor(){
        this.init();
        
    }    
    async init(){
        const response = await fetch("http://localhost:3000/api/releases");
        const releases = await response.json();
        const year = new Year();
        year.addMonth(new Month("jenuary"));
        year.addMonth(new Month("february"));
        year.addMonth(new Month("march"));
        year.addMonth(new Month("april"));
        for (const release of releases){
            year.addRelease(release.month, new Release(release.category, release.type, release.value));
        }
        this.year = year;
        year.calculateBalance();
        this.render();
        this.year = year;
    }

    moneyFormat(value) {
        return Intl.NumberFormat("pt-br", {
            currency: "BRL",
            style: "currency",
        }).format(value);
        }

    addRelease() {
        const month = document.getElementById("month");
        const type = document.getElementById("type");
        const category = document.getElementById("category");
        const value = document.getElementById("value");
        this.year.addRelease(month.value, new Release(category.value, type.value, parseFloat(value.value)));
        this.year.calculateBalance();
        fetch("http://localhost:3000/api/releases", {method: "post", headers: {"content-type": "application/json"}, body: JSON.stringify({month: month.value, category: category.value, type: type.value, value: parseFloat(value.value)})});
        document.getElementById("month").value = this.year.months[0].name;
        document.getElementById("type").value = "income";
        document.getElementById("category").value = "";
        document.getElementById("value").value = "";
        this.render();
    }

    render() {
        document.getElementById("app").remove();
        const app = new Div("app");
        const title = new h4("Money Trackr");
        app.addElementChild(title.element);
        const form = new Div("form-release");
        const selectMonth = new Select("month");
        for (const month of this.year.months){
            selectMonth.addOption(month.name);
        }
        const selectType = new Select("type");
        selectType.addOption("income");
        selectType.addOption("expensive");
        
        const categoryInputText = new Input("category", "text", "Categoria");
        const valueInputNumber = new Input("value", "number", "Valor");
        const addButton = new Button("button", "Adicionar");
        addButton.addListenner(() => {
            this.addRelease();
        });
        form.addElementChild(selectMonth.element);
        form.addElementChild(selectType.element);
        form.addElementChild(categoryInputText.element);
        form.addElementChild(valueInputNumber.element);
        form.addElementChild(addButton.element);


        app.addElementChild(form.element);

        const graphic = new Graphic();
        for (const month of this.year.months) {    
            graphic.addColumn(month.totalizer.balance, month.name);    
        }
        app.addElementChild(graphic.element);
        for (const month of this.year.months) {
            const monthName = new h4(month.name);
            app.addElementChild(monthName.element);
            const releaseTable = new Table("release-table");
            releaseTable.addRow("th", ["Categoria", "Valor"])
            for (const release of month.releases) {
            releaseTable.addRow("td", [release.category, this.moneyFormat(release.getValueString())]);
            }
            releaseTable.addRow("th", ["Juros", this.moneyFormat(month.totalizer.interest)]);
            releaseTable.addRow("th", ["Rendimentos", this.moneyFormat(month.totalizer.income)]);
            releaseTable.addRow("th", ["Total", this.moneyFormat(month.totalizer.balance)]);
            app.addElementChild(releaseTable.element);
        }  
       const [body] = document.getElementsByTagName("body");
       body.appendChild(app.element);
    }
}