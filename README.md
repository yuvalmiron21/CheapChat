# 🛍️ CheapChat - AI E-Commerce Intelligence Interface

![Framework](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Language](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)
![Styling](https://img.shields.io/badge/Tailwind-Glassmorphism-38bdf8?logo=tailwind-css)
![Status](https://img.shields.io/badge/Architecture-Event__Driven-success)

[![CheapChat Demo](https://raw.githubusercontent.com/yuvalmiron21/CheapChat/main/cheap-chat-source/image.png)](https://github.com/yuvalmiron21/CheapChat)
> **"More than just a UI."**
> CheapChat is a production-grade frontend application designed to simulate a complex, full-stack e-commerce environment using modern React architecture.

---

## 🚀 Project Overview

CheapChat demonstrates how complex business logic, state management, and data analytics pipelines can be implemented in a modern web application.
Unlike simple static pages, this project uses **Next.js App Router** to manage:
* **Simulated Backend:** Mock API layers with artificial latency and error handling.
* **State Management:** Complex React Hooks for cart, favorites, and chat history.
* **Data Persistence:** Local-first architecture mimicking database transactions.

## ✨ Key Features & Architecture

### 🧠 Simulated AI Core & NLP
* **Intent Recognition:** The bot logic parses user queries (e.g., *"headphones under $50"*) to detect buying intent vs. general support.
* **Future-Ready Architecture:** The codebase includes architectural hooks for **Vector Search** integration (see `TODOs` in `ChatBot.tsx`) to replace keyword matching with Semantic Search.

### 📊 Data-Driven Analytics Dashboard
* **Event Tracking:** The system is instrumented to track user interactions (`deal_clicked`, `search_failed`), demonstrating a "Data Analyst" mindset in code.
* **Conversion Metrics:** Built-in logic to measure engagement and optimize product suggestions based on user behavior.

### 🛡️ Secure & Scalable Pattern
* **Security First:** The application is hardened against XSS and contains no hardcoded secrets/keys.
* **Clean Code:** Includes "Strategic TODOs" marking migration paths to real backends (PostgreSQL/Redis), showing senior-level foresight.

## 🛠️ Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (Custom Glassmorphism Design System)
* **Performance:** Optimized LCP (Largest Contentful Paint) and responsive layout.

## 🏁 Getting Started

This project follows modern development standards.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YuvalMiron21/CheapChat-UI.git](https://github.com/YuvalMiron21/CheapChat-UI.git)
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) to view the application.

---
*Developed by Yuval Miron. Combining Full Stack Engineering with Data Analytics.*
