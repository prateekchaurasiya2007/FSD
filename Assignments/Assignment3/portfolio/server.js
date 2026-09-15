const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from Public directory
const publicPath = path.join(__dirname, "Public");
app.use(express.static(publicPath));
app.use(express.static(path.join(__dirname, "public")));

// Resume route
app.get("/resume", (req, res) => {
    res.sendFile(path.join(publicPath, "resume.html"));
});

app.listen(PORT, () => {
    console.log(`Portfolio server running at http://localhost:${PORT}`);
});