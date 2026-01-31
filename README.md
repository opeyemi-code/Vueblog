# VueBlog 📝

VueBlog is a simple blog web application built with **Vue 3** and **Vue Router** as part of an **AltSchool Africa Frontend Engineering assignment**. The project demonstrates client-side routing, API data fetching, lazy loading, error handling, and clean UI state management.

---

## 📌 Project Overview

The application fetches blog posts from an external API and displays them on the Home page. Each post links to a detailed view where users can read the full content. The app also includes proper loading states, error boundaries, and a fallback 404 page for non-existent routes.

---

## 🚀 Features

- Home page displaying a list of blog posts
- Blog post summary with title and excerpt
- Dynamic blog post details page
- API data fetching
- Loading state while posts are being fetched
- Error page when API requests fail
- 404 Not Found page for invalid routes
- Vue Router for navigation
- Lazy loading with `Suspense`
- Easy navigation back to Home or previous page

---

## 🛠️ Tech Stack

- **Vue 3** (Composition API)
- **Vue Router**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **REST API** for blog posts
- **Fontawesome Icon**

---

## 📂 Project Structure (Simplified)

```
src/
│── components/
│   ├── Card.vue
│   ├── LoadingState.vue
│   ├── ErrorBoundary.vue
│   ├── Hero.Vue
│   ├── BackButton.vue
│   ├── Button.vue
│   ├── ErrorMessage.vue
│   ├── Footer.vue
│   ├── Header.vue
│   ├── HeaderNav.vue
│   ├── Post.vue
│   ├── PostLists.vue
│
│── views/
│   ├── HomeViews.vue
│   ├── DetailView.vue
│   ├── AboutView.vue
│   ├── ErrorPageView.vue
│
│── router/
│   └── index.ts
│
│── types/
│   └── models.ts
│
│── store/
│   └── useStore.ts
│
│── App.vue
│── main.ts
```

---

## 🔄 Routing

| Route        | Description                         |
| ------------ | ----------------------------------- |
| `/`          | Home page – displays all blog posts |
| `/posts/:id` | Blog post details page              |
| `/about`     | About page                          |
| `*`          | 404 Not Found page                  |

---

## ⏳ Loading & Error Handling

- A **loading state UI** is displayed while fetching posts
- An **error page** is rendered if the API request fails
- A **404 page** is shown for invalid routes
- Vue `Suspense` is used for lazy-loaded pages

---

## 🧪 Assignment Requirements Covered

✅ Vue Router navigation
✅ Dynamic routes
✅ API data fetching
✅ Error handling
✅ Lazy loading with Suspense
✅ Error boundary
✅ Loading state UI
✅ 404 fallback page

---

## 🏁 Getting Started

### Clone the Repository

```
git clone https://github.com/your-username/VueBlog.git
cd VueBlog
```

### Install Dependencies

```
bun install
```

### Run the App

```
bun run dev
```

---

## 📅 Submission Details

- **Assignment:** Vue Router Blog Application
- **Program:** AltSchool Africa – Frontend Engineering
- **Deadline:** 28th January, 11:59 PM (WAT)

---

## 👤 Author

**Opeyemi Obatola**
Frontend Developer

---

## 📄 License

This project is for educational purposes only as part of an AltSchool Africa assignment.
