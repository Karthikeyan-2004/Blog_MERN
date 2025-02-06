# 📖 MERN Blog App  

## 📝 Overview  
The **MERN Blog App** is a full-stack web application that allows users to create, read, update, and delete (CRUD) blog posts. It provides a platform for bloggers to share content while allowing users to interact with posts through comments and likes. The application includes user authentication, role-based access control, and a responsive UI for a seamless experience.  

---

## 🎯 Objective  

### **Project Objectives:**  
✔️ Develop a dynamic and interactive blogging platform.  
✔️ Implement secure user authentication and authorization.  
✔️ Provide a smooth user experience with a responsive UI.  
✔️ Allow users to create and manage blog posts easily.  
✔️ Enable social interactions through comments and likes.  

---

## 📌 Project Workflow  

### **📍 Pages and Navigation:**  
- 🏠 **Home Page** – Displays all blog posts with categories, tags, and search functionality.  
- 🔐 **Login & Register Pages** – User authentication with JWT-based login.  
- 🎛 **Dashboard (User & Admin)** – Manage blog posts, comments, and profile settings.  
- ✏️ **Create/Edit Blog Page** – Rich text editor for writing and updating blog posts.  
- 📖 **Single Blog View Page** – Displays an individual blog post with comments and likes.  
- 👤 **Profile Page** – Shows the user’s published blogs and profile details.  
- 🛠 **Admin Panel (Optional)** – Manage all blogs, users, and comments.  

### **👥 Roles & Permissions**  

| Role    | Description |
|---------|------------|
| Admin   | Can delete blog posts. Has full control over user management, comments, and overall platform moderation. Access to an admin panel for managing the application. |
| Author  | Can create, edit, and delete their own blog posts. Can interact with posts by commenting and liking. Cannot manage other users or modify posts created by others. |
| Guest   | Can only view blog posts. Cannot create, edit, delete, comment, or like posts. |



## 🛠 Tech Stack  

### **Frontend:**  
- ⚛️ **React.js** – UI development  
- 🔄 **React Router** – Navigation  
- 🗂 **Redux (Optional)** – State management  
- 🎨 **Material UI / Tailwind CSS** – Styling  

### **Backend:**  
- 🌐 **Node.js & Express.js** – Backend API  
- 🛢 **Mongoose** – MongoDB ORM  
- 🔑 **JWT (JSON Web Token)** – Authentication  
- 🔐 **bcrypt.js** – Password hashing  

### **Database:**  
- 🗄 **MongoDB (Atlas or Local)** – Stores blogs, users, and comments  


---
