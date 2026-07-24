require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
    res.send("CPilot Backend Running 🚀");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});