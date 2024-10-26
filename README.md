Serverless Greeting App

This project is an serverless web application that greets users, tracks the number of views, and provides a personalized experience using AWS services like **Lambda** and **DynamoDB**. The app is designed to showcase the power of AWS's serverless infrastructure while offering an engaging user interface with several modern features.

## Features

- **Personalized Greeting**: Users can input their name to receive a personalized greeting, displayed with a typing animation for a more engaging experience.
- **View Count Tracking**: Tracks and displays the number of views of the page, utilizing AWS Lambda to update the count in real-time.
- **User Personalization**: The user's name is stored in `localStorage`, allowing the app to greet them with their name on subsequent visits.
- **Dark Mode Toggle**: Users can switch between light and dark modes, with their preference saved locally.
- **Daily Greetings**: Displays a dynamic greeting message based on the day of the week, enhancing the user experience.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: AWS Lambda (Python), DynamoDB
- **API**: AWS Lambda URL
