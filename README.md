# 🦁 DevGrowthLab SSR Wildlife Photography Project

## 🌟 Overview

A **server-side rendered (SSR)** web application for showcasing stunning wildlife photography. Built with **Node.js**, this project features dynamic content rendering, secure authentication, and a clean, modern design.

---

## 🚀 Features

- **Server-Side Rendering**: Dynamic EJS templates for fast and SEO-friendly pages.
- **Authentication**: Secure login system using `bcrypt` and session management with `cookie-parser`.
- **Database Integration**: Powered by MongoDB and Mongoose for flexible and scalable data handling.
- **Styling**: Built with SCSS for clean and maintainable CSS.
- **Responsive Design**: Optimized for both desktop and mobile.

---

## 🛠 Installation

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd devgrowthlab_ssr_wildlife_photography
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory with the following keys:

   ```env
   MONGO_URI=<your_mongo_connection_string>
   SESSION_SECRET=<your_secret_key>
   ```

4. **Run the Application**:

   ```bash
   npm start
   ```

5. **Compile SCSS**:
   ```bash
   npm run build-css
   ```

---

## 🧩 Folder Structure

```
📂 src
 ┣ 📜 app.js            # Main server file
 ┣ 📂 routes            # Application routes
 ┣ 📂 models            # MongoDB schemas
 ┣ 📂 controllers       # Business logic
📂 public
 ┣ 📂 styles
 ┃ ┣ 📂 scss            # Source SCSS files
 ┃ ┗ 📜 style.css       # Compiled CSS
📂 views
 ┣ 📂 layouts           # Layout templates
 ┗ 📂 pages             # EJS page templates
📜 .env                 # Environment variables
```

---

## 📜 Scripts

- **Start Development Server**:

  ```bash
  npm start
  ```

  Automatically restarts the server on file changes using `nodemon`.

- **Compile SCSS**:
  ```bash
  npm run build-css
  ```
  Converts SCSS to CSS using `node-sass`.

---

## 📦 Dependencies

| Package         | Version | Purpose                 |
| --------------- | ------- | ----------------------- |
| `bcrypt`        | ^5.1.1  | Password hashing        |
| `cookie-parser` | ^1.4.7  | Parsing cookies         |
| `ejs`           | ^3.1.10 | Templating engine       |
| `express`       | ^4.21.1 | Web framework           |
| `mongoose`      | ^8.7.1  | MongoDB object modeling |

### Development Dependencies

| Package     | Version | Purpose                |
| ----------- | ------- | ---------------------- |
| `node-sass` | ^9.0.0  | SCSS compilation       |
| `nodemon`   | ^3.1.7  | Auto-restarting server |
| `sass`      | ^1.79.5 | SCSS compilation       |

---

## 💡 Future Enhancements

- 🌐 **Image Uploads**: Allow users to upload their own wildlife photos.
- 📱 **Progressive Web App**: Add offline support and better performance.
- 📊 **Analytics**: Integrate tracking for user interactions and photo views.

---

## 📄 License

This project is licensed under the **ISC License**.
