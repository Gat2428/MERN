/*Steps:-
Install node js
Create project folder in VS Code – fruit-ajax
Terminal → New Terminal
npm init -y
Install Express and CORS
npm install express cors*/



//Create file: server.js

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());
app.post("/fruit", (req, res) => {
    const { name, price } = req.body;
    console.log("Fruit Name:", name);
    console.log("Price:", price);
    res.send("Data received successfully");
});
app.listen(PORT, () => {
    console.log(`⁠ Server running on http://localhost:${PORT}`);
});

//index.html

<!DOCTYPE html>
<html>
<head>
    <title>Fruit Form</title>
</head>
<body>
    <h2>Fruit Data</h2>

    <form id="fruitForm">
        Fruit Name:
        <input type="text" id="name" required><br><br>

        Price:
        <input type="text" id="price" required><br><br>

        <button type="submit">Submit</button>
    </form>

    <script>
        document.getElementById("fruitForm").addEventListener("submit", function(e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let price = document.getElementById("price").value;

            fetch("http://localhost:5000/fruit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    price: price
                })
            })
            .then(res => res.text())
            .then(data => alert(data))
            .catch(err => console.error("Error:", err));
        });
    </script>
</body>
</html>
