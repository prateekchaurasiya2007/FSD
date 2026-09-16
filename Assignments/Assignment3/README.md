# Assignment 3: Developer Portfolio & Working Resume

**Student:** Prateek Chaurasiya  
**College:** ABES Engineering College, Ghaziabad  
**Course:** B.Tech Computer Science & Engineering (2nd Year)  
**Subject:** Full Stack Development (FSD)  

---

## 🎯 Overview

Assignment 3 consists of a full-stack personal developer portfolio and a printable, ATS-friendly curriculum vitae (resume) served via an Express.js web server.

### Features Included:
1. **Interactive Portfolio (`/`):**
   - Modern dark theme with glassmorphic cards and responsive layouts.
   - Live navigation links to projects, coursework, and GitHub repositories.
   - Comprehensive contact section and direct call-to-action to the resume.

2. **Working Printable Resume (`/resume`):**
   - Printable ATS-compliant layout styled for both web viewing and physical printing or PDF export.
   - One-click **Print / Save as PDF** button utilizing `window.print()` and custom print media queries.
   - One-click **Copy Email** action with interactive toast alert.
   - Categorized technical skills, coursework, academic background, and project descriptions.

3. **Machine-Readable Resume API (`/api/resume`):**
   - Express REST API endpoint delivering complete structured JSON resume data.

---

## 🚀 How to Run

### Step 1: Navigate to the portfolio folder
```bash
cd "Assignments/Assignment3/portfolio"
```

### Step 2: Install Dependencies (if not already installed)
```bash
npm install
```

### Step 3: Start the Express Server
```bash
npm start
```

### Step 4: Access in Browser
- **Portfolio Home:** [http://localhost:3000](http://localhost:3000)
- **Resume Page:** [http://localhost:3000/resume](http://localhost:3000/resume)
- **Resume JSON API:** [http://localhost:3000/api/resume](http://localhost:3000/api/resume)
