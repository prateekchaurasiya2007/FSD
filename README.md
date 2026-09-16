# Full Stack Development (FSD) Coursework

**Student Name:** Prateek Chaurasiya  
**Branch / Course:** B.Tech Computer Science and Engineering (CSE)  
**Institution:** ABES Engineering College  
**Email:** [prateekchaurasiya2007@gmail.com](mailto:prateekchaurasiya2007@gmail.com)  
**GitHub:** [prateekchaurasiya2007](https://github.com/prateekchaurasiya2007)  
**Repository:** [https://github.com/prateekchaurasiya2007/FSD](https://github.com/prateekchaurasiya2007/FSD)  

---

## 📁 Repository Structure

```plaintext
FSD/
├── Assignments/
│   ├── Assignment1/
│   │   └── Student-Records/     # HTTP & File System (fs) REST API for Student Records
│   ├── Assignment2/
│   │   └── Product RestAPI/     # Express.js REST API for Product Catalog
│   └── Assignment3/
│       ├── README.md            # Assignment 3 documentation & test guide
│       └── portfolio/           # Developer Portfolio & Printable Resume Web Server
├── Experiments/
│   └── Experiment 1/            # Lab experiment scripts (Program1, Program2)
├── Express HTML/
│   ├── Pages/                   # Multi-page Express static website (About, Contact, Index)
│   └── server.js                # Express static server
├── HTTP MODULE/
│   ├── HTTP_Module.js           # Native Node.js HTTP server implementation
│   └── DAY 9/                   # Day 9 HTTP module exercises
├── class/                       # Daily class exercises, notes & lab code (Day 1 - Day 8)
├── RestAPI/                     # Express REST API experiments & controllers
└── package.json                 # Project configuration and metadata
```

---

## 🚀 Assignments Overview

### Assignment 1: Student Records REST API
* **Location:** `Assignments/Assignment1/Student-Records/`
* **Technologies:** Node.js (native `http` and `fs/promises` modules), JSON
* **Features:** 
  * Asynchronous CRUD operations for student records.
  * Native HTTP request parsing without external frameworks.
  * Query parameters and request buffering handling.

### Assignment 2: Product Catalog REST API
* **Location:** `Assignments/Assignment2/Product RestAPI/`
* **Technologies:** Express.js, Node.js, CommonJS
* **Features:**
  * Express routing, modular controllers, and body parsing middleware.
  * REST endpoints for retrieving, adding, and filtering products.

### Assignment 3: Personal Developer Portfolio & Interactive Resume
* **Location:** `Assignments/Assignment3/portfolio/`
* **Technologies:** Express.js static server, HTML5, CSS3 (Glassmorphism & Responsive Design), Vanilla JavaScript
* **Features:**
  * **Interactive Portfolio (`/`):** Hero section, technical skills, coursework highlights, GitHub project links, and contact information.
  * **Curriculum Vitae / Resume (`/resume`):** Printable, ATS-friendly resume format with a one-click **Print / Save as PDF** button (`window.print()`), copy email button, and clean typography.
  * **Machine-Readable API (`/api/resume`):** REST API endpoint delivering complete structured resume JSON.
  * Run locally with `npm start` inside `Assignments/Assignment3/portfolio/` or `npm run assignment3` from the repository root.

---

## 💻 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* npm (bundled with Node.js)

### Running Assignment 3 (Portfolio & Resume Server)
```bash
# Option 1: Direct from root
npm run assignment3

# Option 2: From portfolio directory
cd "Assignments/Assignment3/portfolio"
npm install
npm start
```
* **Portfolio URL:** `http://localhost:3000/`
* **Resume URL:** `http://localhost:3000/resume`
* **Resume JSON API:** `http://localhost:3000/api/resume`

---

## 📜 License
This repository is licensed under the ISC License.  
© 2026 **Prateek Chaurasiya**. All Rights Reserved.
