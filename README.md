# NetworqHub

Welcome to **NetworqHub** - an exclusive student network platform designed to connect students, reduce scams, and create a vibrant online ecosystem.

![NetworqHub Logo](src/assets/images/logo.png)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## About

NetworqHub is a social networking platform exclusively for students. It aims to provide a secure and dynamic environment for students to connect, collaborate, and grow. The platform includes features such as networking, selling or renting items, participating in hackathons and codejams, and accessing job listings from LinkedIn and Indeed via API.

## Features

- **Exclusive Student Network**: Connect with students from your college or university.
- **Scam Free Selling**: Buy, sell, or rent items within your student community.
- **Groups and Communities**: Join groups related to your interests or academic pursuits.
- **Chat and Messaging**: Communicate with other students in real-time.
- **Job Listings**: Access job opportunities from LinkedIn and Indeed.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Aizen741/CapstoneProject_Group1_sec2_PROG8225.git
    cd CapstoneProject_Group1_sec2_PROG8225
    ```

2. **Install dependencies for both frontend and backend:**

    For the frontend:

    ```bash
    cd my-react-app
    npm install
    ```

    For the backend:

    ```bash
    cd ../backend
    npm install
    ```

### Running the Application

1. **Start the backend server:**

    ```bash
    cd backend
    npm start
    ```

    The backend server will start on `http://localhost:5000`.

2. **Start the frontend application:**

    ```bash
    cd ../my-react-app
    npm start
    ```

    The frontend will start on `http://localhost:3000`.

## Project Structure

```plaintext
CapstoneProject_Group1_sec2_PROG8225/
├── my-react-app/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── ...
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   │   ├── background.mp4
│   │   │   │   ├── logo.png
│   │   │   │   └── ...
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── ResetPW.jsx
│   │   │   ├── Feed.jsx
│   │   │   ├── Groups.jsx
│   │   │   ├── Friends.jsx
│   │   │   ├── Chat.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Page404.jsx
│   │   │   └── ...
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── index.css
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
│   └── ...
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── ...
└── .gitignore
└── README.md

  ```

## Contributing

We welcome contributions from the community. Please fork the repository and submit a pull request for review.

1. **Fork the repository**
2. **Create your feature branch:**

    ```bash
    git checkout -b feature/my-new-feature
    ```

3. **Commit your changes:**

    ```bash
    git commit -m 'Add some feature'
    ```

4. **Push to the branch:**

    ```bash
    git push origin feature/my-new-feature
    ```

5. **Submit a pull request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


### Instructions for Adding to Your GitHub Repository

1. **Create a `README.md` file** in the root of your repository:

    ```bash
    touch README.md
    ```

2. **Copy the contents** of the provided `README.md` into your new file.

3. **Commit and push** the changes:

    ```bash
    git add README.md
    git commit -m "Add README.md with project details"
    git push origin main
    ```

This improved `README.md` provides a clear and visually appealing project structure, along with comprehensive details to help others understand, set up, and contribute to your project.

