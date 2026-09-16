const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from Public directory
const publicPath = path.join(__dirname, "Public");
app.use(express.static(publicPath));
app.use(express.static(path.join(__dirname, "public")));

// Resume structured JSON data
const resumeData = {
    name: "Prateek Chaurasiya",
    title: "Full Stack Web Developer & B.Tech CSE Undergraduate",
    email: "prateekchaurasiya2007@gmail.com",
    github: "https://github.com/prateekchaurasiya2007",
    repository: "https://github.com/prateekchaurasiya2007/FSD",
    location: "Ghaziabad, Uttar Pradesh, India",
    education: [
        {
            institution: "ABES Engineering College, Ghaziabad",
            degree: "Bachelor of Technology in Computer Science and Engineering",
            year: "2023 - 2027",
            status: "2nd Year Undergraduate"
        },
        {
            institution: "CBSE Board",
            degree: "Class XII (Senior Secondary)",
            year: "2023"
        },
        {
            institution: "CBSE Board",
            degree: "Class X (Secondary)",
            year: "2021"
        }
    ],
    skills: {
        languages: ["C++", "JavaScript (ES6+)", "HTML5", "CSS3", "C", "SQL"],
        backend: ["Node.js", "Express.js", "RESTful APIs", "HTTP Modules", "fs/promises", "JSON"],
        tools: ["Git", "GitHub", "VS Code", "Postman", "npm"],
        core: ["Data Structures & Algorithms", "OOPs", "Asynchronous Programming", "MVC"]
    },
    projects: [
        {
            name: "Personal Developer Portfolio & Resume Server",
            assignment: "Assignment 3",
            technologies: ["Express.js", "HTML5", "CSS3", "JavaScript"],
            description: "Modern glassmorphic developer portfolio with print-optimized resume and JSON API."
        },
        {
            name: "Student Records Management REST API",
            assignment: "Assignment 1",
            technologies: ["Node.js", "HTTP Module", "fs/promises"],
            description: "Native Node.js REST API with file-system JSON persistence and full CRUD operations."
        },
        {
            name: "Product Catalog REST API",
            assignment: "Assignment 2",
            technologies: ["Express.js", "Node.js", "CommonJS"],
            description: "Express backend with modular routing, body parsing middleware, and query filtering."
        }
    ]
};

// Root route: Portfolio
app.get("/", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

// Resume page route
app.get("/resume", (req, res) => {
    res.sendFile(path.join(publicPath, "resume.html"));
});

// API endpoint returning structured resume JSON
app.get("/api/resume", (req, res) => {
    res.status(200).json({
        success: true,
        data: resumeData
    });
});

// 404 Fallback
app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html>
        <head><title>404 - Page Not Found</title><link rel="stylesheet" href="/style.css"></head>
        <body style="background:#090d16;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;text-align:center;">
            <h1 style="font-size:3rem;color:#38bdf8;">404</h1>
            <p style="margin: 15px 0 25px; color:#94a3b8;">Page not found.</p>
            <div style="display:flex;gap:12px;">
                <a href="/" class="btn-primary" style="padding:10px 20px;text-decoration:none;border-radius:8px;background:#38bdf8;color:#000;font-weight:700;">Go to Portfolio</a>
                <a href="/resume" class="btn-secondary" style="padding:10px 20px;text-decoration:none;border-radius:8px;background:#1e293b;color:#fff;border:1px solid #334155;">View Resume</a>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`Portfolio & Resume Server active at:`);
    console.log(`- Portfolio: http://localhost:${PORT}`);
    console.log(`- Resume:    http://localhost:${PORT}/resume`);
    console.log(`- Resume API:http://localhost:${PORT}/api/resume`);
    console.log(`====================================================`);
});