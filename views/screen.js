class Screen {
    constructor(){
        const jenuary = new Month("janeiro");
        jenuary.addRelease(new Release("Salário", "income", 5000));
        jenuary.addRelease(new Release("Aluguel", "expensive", 1000));
        jenuary.addRelease(new Release("Conta de luz", "expensive", 500));
        jenuary.addRelease(new Release("Conta de Água", "expensive", 500));
        jenuary.addRelease(new Release("Internet", "expensive", 500));

        const february = new Month("fevereiro");
        february.addRelease(new Release("Salário", "income", 6000));
        february.addRelease(new Release("Aluguel", "expensive", 3000));
        february.addRelease(new Release("Conta de luz", "expensive", 1000));
        february.addRelease(new Release("Conta de Água", "expensive", 1000));
        february.addRelease(new Release("Internet", "expensive", 250));


        const march = new Month("março");
        march.addRelease(new Release("Salário", "income", 4000));
        march.addRelease(new Release("Aluguel", "expensive", 1200));
        march.addRelease(new Release("Conta de luz", "expensive", 200));
        march.addRelease(new Release("Conta de Água", "expensive", 100));
        march.addRelease(new Release("Internet", "expensive", 200));


        const april = new Month("abril");
        april.addRelease(new Release("salário", "income", 7000));

        const year = new Year();
        year.addMonth(jenuary);
        year.addMonth(february);
        year.addMonth(march);
        year.addMonth(april);
        year.calculateBalance();
        this.year = year;
    }

    moneyFormat(value) {
        return Intl.NumberFormat("pt-br", {
            currency: "BRL",
            style: "currency",
        }).format(value);
        }

    addRelease() {
        const month = document.getElementById("month").value;
        const type = document.getElementById("type").value;
        const category = document.getElementById("category").value;
        const value = document.getElementById("value").value;
        this.year.addRelease(month, new Release(category, type, parseFloat(value)));
        this.year.calculateBalance();
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