DevGrowthLab SSR Wildlife Photography Project
Overview
This project is a server-side rendered (SSR) application built with Node.js. It is designed to support a wildlife photography website. The application uses Express.js as the backend framework and EJS for rendering dynamic HTML pages. MongoDB is used for database management.

Features
Server-Side Rendering: Uses EJS templates to deliver dynamic web pages.
Authentication: Secure user authentication with bcrypt for password hashing and cookie-parser for session management.
Styling: SCSS (compiled to CSS) for modular and maintainable styles.
Database: Integration with MongoDB using Mongoose for schema-based data management.
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
cd devgrowthlab_ssr_wildlife_photography
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory.
Add variables like MONGO_URI and SESSION_SECRET.
Run the development server:

bash
Copy code
npm start
Build CSS:

bash
Copy code
npm run build-css
Scripts
Start the server:

bash
Copy code
npm start
Uses nodemon to watch for changes in src/app.js.

Build SCSS:

bash
Copy code
npm run build-css
Compiles SCSS files from public/styles/scss/main.scss to public/styles/style.css.

Dependencies
Production:

bcrypt: Secure password hashing.
cookie-parser: Middleware to parse cookies.
ejs: Template engine for server-side rendering.
express: Backend framework.
mongoose: ODM for MongoDB.
Development:

node-sass: SCSS compiler.
nodemon: Monitors for file changes and restarts the server automatically.
sass: Sass compiler.
Folder Structure
bash
Copy code
src/
├── app.js # Main application entry point
├── routes/ # Application routes
├── models/ # Mongoose schemas
├── controllers/ # Route logic
public/
├── styles/
├── scss/ # SCSS files
├── style.css # Compiled CSS file
views/
├── layouts/ # EJS layout templates
├── pages/ # Individual page templates
.env # Environment variables
Future Improvements
Add testing using Jest or Mocha.
Integrate image upload functionality for wildlife photography.
Optimize SCSS and CSS for performance.
License
This project is licensed under the ISC License.
