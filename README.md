# Simple React Feed Application

This project is a basic React application that allows users to create and display posts dynamically. Each post contains a name, subtitle (e.g., follower information), time, an uploaded image, and a description.

---

## Features

- User input fields for name, subtitle, time, image upload, and description.
- Dynamically displays posts as cards upon submission.
- Supports image uploads with instant preview using `URL.createObjectURL`.
- Automatically clears form inputs after submitting a post.

---

## Installation and Usage

1. Clone or download the repository.
2. Install dependencies by running:

npm install

markdown
Copy
Edit

3. Start the development server:

npm start

yaml
Copy
Edit

4. Fill out the form with post details and click the "Add post" button.
5. Posts will be displayed below the form in card format.

---

## Project Structure

- `App.js` – Main React component containing the post form and post list.
- `post.js` – Component responsible for rendering individual post cards.
- `card.css` – Contains all styling related to the posts and layout.

---

## Additional Information

- Image uploads are handled via the browser's native file input.
- Each post is assigned a unique React key to ensure efficient rendering.
- Form inputs are reset automatically after a post is added.

---

## License

This project is licensed under the MIT License.

---

**Developed by Mohd Faizan**