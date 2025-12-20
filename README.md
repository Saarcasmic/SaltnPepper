# Salt & Pepper: Your Gateway to Culinary Excellence

## Project Overview
Salt & Pepper is a robust online platform offering specialized cooking and baking classes. The goal of this platform is to inspire culinary enthusiasts and provide hands-on training for people worldwide to become proficient in culinary arts.

### Live Demo
🌐 **Access the application live at:** [Salt & Pepper Website](https://saltypepper.netlify.app/)

---

## Technical Stack

This project is built with modern web technologies to provide an efficient, scalable, and maintainable platform.

### Frontend
- **Language**: TypeScript
- **Framework**: React
- **Styling**: CSS Modules and Tailwind CSS
- **Build Tool**: Vite
- **State Management**: Context API

### Backend
- **Environment**: Node.js (Vercel Hosting)
- **APIs**: Customized REST endpoints for course management and payments

### Development
- **Environments**:
  - Development: `http://localhost:3000`
  - Production: [https://saltn-pepper.vercel.app](https://saltn-pepper.vercel.app/)
  - API Endpoints reside in `/src/config/api.ts`

---

## Application Features

### Culinary Education
> **Purpose-driven courses with a focus on skill development.**
- 40+ Courses: From beginner-level guides to advanced, career-focused paths.
- Modular Curriculum: Courses on snacks, international cuisines, desserts, and more.

### Key Features
- **Fully Responsive Design**: Seamlessly adapts across devices
- **Global Learning**: Offers both online and offline courses
- **Recognition and Empowerment**: Achievements include 6,000+ trained students worldwide
- **Course Videos**: Select courses curated with pre-recorded sessions for on-demand learning

---

## Developer Experience

### Local Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/Saarcasmic/SaltnPepper.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

### Deployment
Vercel handles all deployment workflows via continuous integration when pushing to the `main` branch.

---

## API Documentation

### REST Endpoints
1. **Payment API:** 
   - Endpoint: `POST /payment`
   - Example:
     ```json
     {
       "amount": 500,
       "currency": "INR"
     }
     ```
   - Response:
     ```json
     {
       "status": "success",
       "receipt_id": "12345ABC"
     }
     ```

2. **Course API**
   - Coming Soon

---

## Team
This platform is maintained by Saarcasmic with the support of passionate developers and instructors focusing on sharing culinary wisdom.

---

🚀 **Transform Your Culinary Journey with [Salt & Pepper](https://saltypepper.netlify.app/)**