import { useState } from "react";
import { PostComponent } from "./post";
import "./card.css";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map((post) => (
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  ));

  function addPost() {
    const nameInput = document.getElementById("name");
    const subtitleInput = document.getElementById("subtitle");
    const timeInput = document.getElementById("time");
    const imageInput = document.getElementById("image");
    const descriptionInput = document.getElementById("description");

    setPosts([
      ...posts,
      {
        name: nameInput.value,
        subtitle: subtitleInput.value,
        time: timeInput.value,
        image: URL.createObjectURL(imageInput.files[0]),
        description: descriptionInput.value,
      },
    ]);


    nameInput.value = "";
    subtitleInput.value = "";
    timeInput.value = "";
    imageInput.value = "";
    descriptionInput.value = "";
  }

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <form
          className="post-form"
          onSubmit={(e) => {
            e.preventDefault();
            addPost();
          }}
        >
          <h2>Add a Post</h2>
          <input id="name" type="text" placeholder="Enter your name" required />
          <input
            id="subtitle"
            type="text"
            placeholder="Enter your follower"
            required
          />
          <input id="time" type="time" />
          <input id="image" type="file" accept="image/*" required />
          <input
            id="description"
            type="text"
            placeholder="What's going on?"
            required
          />
          <button type="submit">Add post</button>
        </form>

        <div className="posts-wrapper">{postComponents}</div>
      </div>
    </div>
  );
}

export default App;
