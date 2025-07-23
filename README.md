# 🏗️ Infrasnap

_Effortless Infrastructure Reporting & Management Platform_

![Last Commit](https://img.shields.io/badge/last%20commit-recently-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-100%25-yellow)
![Languages](https://img.shields.io/badge/languages-2-blue)

---

### 🛠️ Built With

![npm](https://img.shields.io/badge/npm-red)
![React](https://img.shields.io/badge/React-blue)
![Vite](https://img.shields.io/badge/Vite-purple)
![Firebase](https://img.shields.io/badge/Firebase-orange)
![Redux](https://img.shields.io/badge/Redux-purple)
![Express](https://img.shields.io/badge/Express-black)
![MongoDB](https://img.shields.io/badge/MongoDB-green)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-blue)

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Problem](#-problem)
- [Why This Problem Exists](#-why-this-problem-exists)
- [Our Solution](#-our-solution)
  - [Core Features](#-core-features)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)

---

### 📘 Overview

**Infrasnap** is a modern platform designed to streamline infrastructure project reporting and management. It enables teams to efficiently track daily site activities, manage resources, and collaborate in real-time, all from a unified dashboard.

---

### ❓ Problem

Infrastructure projects often struggle with:

- Inefficient daily reporting and manual paperwork
- Lack of real-time collaboration between site and office
- Difficulty tracking resources, progress, and issues
- Fragmented communication and data silos

---

### 🔍 Why This Problem Exists

- Traditional reporting relies on paper or disconnected spreadsheets
- Communication gaps between field and management
- No single platform for real-time updates, analytics, and resource management

---

### 💡 Our Solution

**Infrasnap** provides a centralized, digital-first platform for infrastructure teams to:

### 🧠 Core Features

- **📅 Daily Site Reports**  
  Log daily progress, issues, and resource usage from any device.
- **👥 Team Collaboration**  
  Real-time updates and notifications for all stakeholders.
- **📊 Analytics Dashboard**  
  Visualize project progress, resource allocation, and trends.
- **🗂️ Document Management**  
  Store and share site photos, documents, and plans securely.
- **🔒 Secure Authentication**  
  User roles and permissions for data privacy.
- **⚡ Fast & Responsive UI**  
  Built with React, Vite, and TailwindCSS for a seamless experience.

---

### 🚀 Getting Started

#### Prerequisites

- **Node.js**: v18.x or above
- **npm**: Latest version
- **MongoDB**: For backend data storage
- **Git**

---

### Installation

#### 1. Clone the repository

    git clone https://github.com/sabhyalokhande/infrasnap

#### 2. Navigate into the project directory

    cd infrasnap

#### 3. Install dependencies for both client and server

    # Install root dependencies (if any)
    npm install

    # Install client dependencies
    cd client
    npm install

    # Install server dependencies
    cd ../server
    npm install

---

### Usage

#### Run the development servers:

    # Start the backend server
    cd server
    npm start

    # In a new terminal, start the frontend
    cd ../client
    npm run dev

- The frontend will launch at http://localhost:5173 (or as specified by Vite)
- The backend will run at http://localhost:5000 (or as specified in your server config)

---

### Testing

#### Client (Frontend)

If you have tests set up (e.g., with Jest, React Testing Library, or Vitest):

    cd client
    npm test
    # or, for Vitest (if used)
    npm run test

To check code quality with ESLint:

    npm run lint

If you do not have automated tests yet, you can manually test the frontend by running:

    npm run dev

and visiting [http://localhost:5173](http://localhost:5173) in your browser.

---

#### Server (Backend)

If you have tests set up (e.g., with Jest, Mocha, or Supertest):

    cd server
    npm test

To check code quality with ESLint (if configured):

    npm run lint

If you do not have automated tests yet, you can manually test the backend by running:

    npm start

and using tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to send requests to your API endpoints (e.g., http://localhost:5000).

---
