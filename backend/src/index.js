const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const userRoutes = require("./routes/userRoutes");

app.use("/api/user", userRoutes);


app.get("/", (req, res) => {
    res.send("CPilot Backend Running 🚀");
});


const PORT = 8000;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});