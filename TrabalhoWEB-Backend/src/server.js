const express = require("express")
const cors = require("cors")
const app = express()

const allRoutes = require("./routes/routes")

app.use(express.json());
app.use(cors())
app.use(allRoutes);

app.get("/health", (req, res) => {
    return res.json("up");
});

app.listen(3333, () => console.log("Server up in 3333"));