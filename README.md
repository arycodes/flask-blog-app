
---

# Flask Blog Platform

The Flask Blog Platform is a web application designed to host and manage a collection of blog posts. It provides users with a user-friendly interface for reading and exploring different posts, as well as toggling between light and dark themes for better readability.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Understanding the Application Structure](#understanding-the-application-structure)
6. [Deployment](#deployment)
7. [Contributing](#contributing)
8. [License](#license)

## Features

1. **Dynamic Routing**: Utilizes Flask's routing mechanism to render different blog posts based on the post ID.
2. **Theme Toggle**: Allows users to switch between light and dark themes for better reading experience.
3. **Responsive Design**: The application is designed to be responsive and works well on various screen sizes.
4. **404 Error Handling**: Includes custom error handling for 404 (Page Not Found) errors.
5. **JSON Data Management**: The blog posts are stored as JSON data and dynamically loaded into the application.
6. **Markdown Content Parsing**: Utilizes the `marked.js` library to parse Markdown content into HTML for rendering blog posts.

## Technologies Used

- **Flask**: Python-based micro web framework for building web applications.
- **HTML/CSS/JavaScript**: Frontend technologies used for creating the user interface and interactivity.
- **marked.js**: JavaScript library used for parsing Markdown content into HTML for rendering blog posts.

## Installation

To run the Flask Blog Platform locally on your machine, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/arycodes/flask-blog-app.git
   ```

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Run the application:
   ```
   python app.py
   ```

## Usage

- Navigate to the root URL to access the latest blog post.
- Click on individual blog posts to view them.
- Toggle between light and dark themes using the theme toggle button in the header.

## Understanding the Application Structure

The application structure consists of the following key components:

- **`app.py`**: Contains the Flask application setup and routing logic.
- **`blogdata.json`**: JSON file containing data about the blog posts, including titles, authors, dates, tags, and content paths.
- **`templates`**: Directory containing HTML templates for rendering different pages and blog posts.
- **`static`**: Directory containing static assets such as CSS stylesheets and JavaScript files.

## Deployment

To deploy the Flask Blog Platform to a production environment, follow standard deployment practices for Flask applications. This may involve configuring a web server (e.g., Nginx), setting up a WSGI server (e.g., Gunicorn), and managing application dependencies.

## Contributing

Contributions to the Flask Blog Platform are welcome! If you'd like to contribute to the project, please fork the repository, create a new branch for your feature or fix, and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---

