# SoftSell

**SoftSell** is a responsive, interactive frontend for a software sales platform built during my internship. It features a modern user interface, smooth animations, and an integrated chatbot experience designed for intuitive user interaction.

## ✨ Features Implemented

- **Interactive Landing Page**
  - Smooth scroll-based animations using GSAP.
  - Hero sections and call-to-action buttons.
  
- **Chatbot Integration**
  - Simple, client-side chatbot UI for guiding users.
  - Styled for seamless embedding within the page.

- **Responsive UI**
  - Fully optimized for mobile, tablet, and desktop.
  - Tailwind CSS used for quick and scalable design.

- **Component-Based Architecture**
  - Modular React components for maintainability and scalability.
  - Timeline and section transitions using `react-vertical-timeline-component` and GSAP.

## 🛠️ Tech Stack

| Tool/Library              | Purpose                             |
|---------------------------|-------------------------------------|
| **React.js**              | UI Development                      |
| **Tailwind CSS**          | Utility-first CSS styling           |
| **GSAP + @gsap/react**    | Smooth animations                   |
| **lucide-react, heroicons**| Iconography                        |
| **react-use**             | Useful hooks and utils              |
| **react-vertical-timeline-component** | Timeline animations     |
| **ESLint + Prettier**     | Code linting and formatting         |
| **Vite**                  | Fast bundler and development server |

## 🧠 Design Decisions

- **Vite** was chosen for rapid setup and HMR during development.
- **GSAP** and `react-use` allowed complex scroll and animation behavior with minimal overhead.
- Chatbot UI was built from scratch using React to ensure flexibility and custom styling.
- Tailwind’s utility classes enabled quick iteration on visual design without custom CSS bloat.

## ⏱️ Time Spent

| Task                     | Duration    |
|--------------------------|-------------|
| Project Setup            | 0.2 days    |
| UI + Animations          | 0.6 days    |
| Chatbot Development      | 0.5 days    |
| Final Polishing & Fixes  | 0.2 days    |

**Total:** ~1.5 days

---

![Screenshot 2025-05-10 075853](https://github.com/user-attachments/assets/7c884b35-9d0f-4877-84a5-864e6390dafd)

## 📂 Project Setup

```bash
npm install
npm run dev
