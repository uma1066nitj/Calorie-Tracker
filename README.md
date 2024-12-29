# 🍎 Calorie Tracker

Welcome to the **Calorie Tracker** web application! This project is designed to help users manage their daily food intake and monitor calorie consumption in a simple and user-friendly way. Built with modern web technologies, this tool ensures both functionality and scalability. 🚀

---

## 🎯 Features

### 🔒 User Authentication
- **Login**: Secure user login for personalized sessions.
- **Logout**: End sessions safely, clearing sensitive data.

### 🥗 Calorie Logging
- Log daily food items and corresponding calorie values.
- Organize data day-wise for efficient tracking.

### 📅 View Calorie Entries
- Retrieve and display calorie logs for specific dates.
- Automatic calculation of total calories consumed.

### 🛠️ Modular and Scalable Design
- Well-structured project for easy maintenance and scalability.

### 📱 Responsive UI
- Intuitive, mobile-friendly interface for seamless tracking on any device.

---

## 🗂️ Project Structure

```
Calorie-Tracker/
│
├── .vscode/                # VS Code configuration files
├── models/                 # Data models for application
│   ├── foodEntry.js        # Schema for calorie entries
│   ├── index.js            # Model exports
│   └── user.js             # Schema for user accounts
├── node_modules/           # Dependencies
├── public/                 # Frontend files
│   ├── css/                # Styling files
│   ├── html/               # HTML templates
│   ├── index.html          # Main user interface
│   └── script.js           # Frontend JavaScript logic
├── routes/                 # API route handlers
├── util/                   # Utility functions
│   └── database.js         # Database connection logic
├── app.js                  # Application entry point
├── package.json            # Project dependencies
├── package-lock.json       # Dependency lock file
└── README.md               # Project documentation
```

---

## 🛠️ Technologies Used

### Backend
- **Node.js**: JavaScript runtime for server-side scripting.
- **Express.js**: Web framework for building APIs.

### Frontend
- **HTML5**: Structure of the application.
- **CSS3**: Styling for an elegant interface.
- **JavaScript**: Logic for user interactions and API communication.

### Database
- **MySQL**: Reliable storage for user and calorie data.
- **Sequelize**: ORM for seamless database interactions.

---

## 🚀 Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/uma1066nitj/Calorie-Tracker.git
   cd Calorie-Tracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure the database**:
   - Create a MySQL database.
   - Update the database configuration in `util/database.js` with your credentials.

4. **Start the server**:
   ```bash
   node app.js
   ```

5. **Open the application**:
   - Navigate to `http://localhost:3000` in your browser.

---

## 🌐 API Endpoints

### **POST** `/log`
- **Description**: Log a food item and its calorie count for a specific date.
- **Request Body**:
  ```json
  {
      "date": "YYYY-MM-DD",
      "foodName": "Food Item",
      "quantity": 1,
      "calories": 200
  }
  ```

### **GET** `/entries`
- **Description**: Retrieve all logged food items and calories.
- **Response Example**:
  ```json
  [
      { "date": "2024-12-01", "foodName": "Apple", "quantity": 1, "calories": 95 },
      { "date": "2024-12-01", "foodName": "Banana", "quantity": 2, "calories": 210 }
  ]
  ```

---

## 💡 Usage

1. **Login**:
   - Enter your credentials to access your personalized session.

2. **Log Calorie Entries**:
   - Select a date, input food items, quantity, and calorie counts, and log the data.

3. **View Entries**:
   - View all logged entries for any date and check total calories.

4. **Logout**:
   - Click "Logout" to securely end your session.

---

## 🚀 Future Enhancements
- User registration and password recovery functionality.
- A dashboard with detailed calorie insights and trends.
- Integration with third-party APIs for automatic calorie data retrieval.
- Dark mode support for better usability.

---

## 📜 License

This project is licensed under the **ISC**. Feel free to use, modify, and share as needed.

---

✨ Happy calorie tracking! 🥗
