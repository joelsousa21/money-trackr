const express = require ("express");
const app = express();
app.use(express.json());
app.use("/", express.static("./client"));

const releases = [
    {month: "jenuary", category: "Salário", type: "income", value: 6000},
    {month: "jenuary", category: "Aluguel", type: "expensive", value: 1000},
    {month: "jenuary", category: "Conta de luz", type: "expensive", value: 500},
    {month: "jenuary", category: "Conta de Água", type: "expensive", value: 500},
    {month: "jenuary", category: "Internet", type: "expensive", value: 500},
    {month: "february", category: "Salário", type: "income", value: 6000},
    {month: "february", category: "Aluguel", type: "expensive", value: 3000},
    {month: "february", category: "Conta de luz", type: "expensive", value: 1000},
    {month: "february", category: "Conta de Água", type: "expensive", value: 1000},
    {month: "february", category: "Internet", type: "expensive", value: 250},
    {month: "march", category: "Salário", type: "income",value: 4000},
    {month: "march", category: "Aluguel", type: "expensive",value: 1200},
    {month: "march", category: "Conta de luz", type: "expensive",value: 200},
    {month: "march", category: "Conta de Água", type: "expensive",value: 100},
    {month: "march", category: "Internet", type: "expensive",value: 200},
    {month: "april", category: "salário", type: "income",value: 7000},
];

app.get("/api/releases", function(req, res){
    res.json(releases);
});

app.post("/api/releases", function(req, res){
    const release = req.body;
    releases.push(release);
    res.end();
});

app.listen(3000);