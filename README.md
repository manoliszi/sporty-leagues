# Sports Leagues SPA – Notes

## Time Spent

- ~30 minutes: project setup, tooling, and initial structure (Vue 3, Vite, Vuetify, routing, state management)
- ~1 hour 30 minutes: implementation of features, state logic, API integration, caching, and UI adjustments

Total time: approximately **2 hours**

---

## AI Tools Usage

AI tools were used in a **supportive capacity**, mainly to speed up routine tasks and validate decisions.

Specifically, AI assistance was used for:
- Verifying Vuex or Pinia store best practices
- Double-checking API usage and edge cases from TheSportsDB documentation

---

## Design & Technical Decisions

- **Vue 3 + Vite** were chosen for fast development and modern tooling.
- **Pinia** was used for state management instead of Vuex, as it is the recommended solution for Vue 3.
- **Vue Router** handles navigation between the leagues list and league details.
- **Vuetify** was used for layout and responsive UI components.
- API calls are centralized in a **service layer** to keep components clean.
- **Caching**:
  - Leagues list is cached in `localStorage` to avoid repeated API calls.
  - League badges are cached per league ID to prevent duplicate requests.
- The UI prioritizes functionality and responsiveness over heavy styling, as requested.

---

## How to Run the Project

1. Install dependencies:
   ```bash
   npm install
