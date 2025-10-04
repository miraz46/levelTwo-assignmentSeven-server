# Portfolio Backend API

This is the backend API for my personal portfolio website. It is built with **Node.js**, **Express**, **TypeScript**, and **MongoDB (Mongoose)**. The API allows the portfolio owner to manage their projects, blogs, and profile information through a secure admin dashboard.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Environment Variables](#environment-variables)  
- [API Endpoints](#api-endpoints)  
- [Folder Structure](#folder-structure)  
- [Seeding Super Admin](#seeding-super-admin)  
- [License](#license)  

---

## Features

- **Authentication**: Login system for portfolio owner only.  
- **Profile Management**: Edit personal details like bio, skills, and social links.  
- **Project Management**: CRUD operations for portfolio projects.  
- **Blog Management**: CRUD operations for blog posts with SEO-friendly slugs.  
- **Validation**: Request validation using Zod schemas.  
- **Secure Passwords**: Passwords are hashed with bcrypt.  

---

## Tech Stack

- **Node.js**  
- **Express.js**  
- **TypeScript**  
- **MongoDB (Mongoose)**  
- **Zod** (for validation)  
- **bcryptjs** (for password hashing)  
- **Slugify** (for SEO-friendly URLs)  

---

## Getting Started

### Prerequisites

- Node.js >= 18.x  
- MongoDB (local or Atlas)  
- npm or yarn  

### Installation

1. Clone the repository:

```bash
git clone https://github.com/miraz46/levelTwo-assignmentSeven-server.git
cd portfolio-backend
```
2. Install dependencies:
```bash
npm install
# or
# yarn install
```

3. Set up environment variables

4. Start the server:
```bash
npm run dev
# or
yarn dev

```

Made with ❤️ by Miraz Rahman





