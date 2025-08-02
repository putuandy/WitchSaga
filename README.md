# WitchSaga

This project is for test purposes only.

It is an ASP.NET Core web application demonstrating basic form handling, validation, and AJAX communication between the frontend and backend.
Do not use this project in production environments.

## About

WitchSaga is a simple web app where users can input multiple people's "Age of Death" and "Year of Death" using a dynamic form.
The form supports adding multiple entries and uses HTML5 validation to ensure correct input.

When the user submits the form, the data is sent via AJAX to the backend `/Home/CalculateDeath` endpoint, which processes the data and returns a result (such as the calculated average dead count).
The result is then displayed on the page.

This project is intended for test and demonstration purposes only.
