# 🎬 Movie Search App

This project is a **movie search and favorites** application built using [The Movie Database (TMDB)](https://www.themoviedb.org/) API. It consists of a **React frontend** and an **Express.js backend**. Users can search for movies and mark their favorite ones.

## 🧰 Technologies Used

- **Frontend:** React 19 + React Router DOM
- **Backend:** Node.js + Express 5
- **Build Tool:** Vite
- **Environment Configuration:** dotenv

---

## 🚀 Getting Started

### 1. Clone the Repository

```
git clone <your-repo-url>
cd <project-name>
````

### 2. Install Dependencies

#### Backend:

```
cd server
npm install
```

#### Frontend:

```
cd ../frontend
npm install
```

---

### 3. Set Up Environment Variables

You need to create a `.env` file inside the `server` folder and add your TMDB API key:

```
# server/.env
API_KEY=your_tmdb_api_key
```

> **Note:** You can get your API key from [TMDB's API settings page](https://www.themoviedb.org/settings/api).

---

### 4. Run the Project

#### Start the Backend Server:

```
cd server
node index.js
```

The backend will run on port `6000`.

#### Start the Frontend:

In a new terminal tab:

```
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173` and will proxy API requests to `http://localhost:6000`.

---

## 📁 Project Structure

```
├── server/        # Express.js backend
│   ├── index.js   # Server entry point
|   ├── package-lock.json
|   ├── package.json  
│   └── .env       # Contains API_KEY
├── frontend/      # React frontend
│   ├── src/       # Main React files
│   └── vite.config.js
```

---

## 💡 Features

* Search for movies using the TMDB API
* View detailed movie information
* Mark and manage favorite movies
* Simple and responsive user interface

---

## ⚙️ Technical Notes

* Uses `dotenv` to manage API keys securely
* Frontend and backend are fully decoupled
* `proxy` setting in Vite handles API routing during development

---

## 📄 License

This project is licensed under the **ISC License**.



