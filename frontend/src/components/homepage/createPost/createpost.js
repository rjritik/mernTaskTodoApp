import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Navbar from "../Home/nav/Nav";
import axios from "axios";
import FileBase64 from "react-file-base64";
const CreatePost = () => {
  const location = useLocation();
  let updateTitle;
  let id;
  let updateContent;
  let updateImage;
  if (location.state) {
    const ldata = location.state;
    updateTitle = ldata.title;
    id = ldata.id;
    updateContent = ldata.content;
    updateImage = ldata.image;
  }
  const history = useHistory();
  const [posts, setposts] = useState({
    title: updateTitle ? updateTitle : "",
    contnet: updateContent ? updateContent : "",
    image: updateImage ? updateImage : "",
    id: id ? id : "",
  });
  const [file, setFile] = useState();
  const handler = (e) => {
    const { name, value } = e.target;

    setposts({
      ...posts,
      [name]: value,
    });
  };
  function handleChange(e) {
    console.log(e.target.files);
    setposts({ ...posts, image: URL.createObjectURL(e.target.files[0]) });
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const posted = () => {
    if (posts.title === "" || posts.contnet === "") {
      alert("Please write a note ");
    } else {
      axios.post("http://localhost:9002/posts", posts).then((res) => {
        // alert(res.data.message);
        history.push("/");
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="createPost">
        <h1>Create A New Todo Item</h1>
        <textarea
          rows="1"
          cols="50"
          name="title"
          placeholder="Write title "
          value={posts.title}
          onChange={handler}
        />
        <textarea
          rows="3"
          cols="50"
          name="contnet"
          placeholder="Write Description "
          value={posts.contnet}
          onChange={handler}
        />
        {/* <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setposts({ ...posts, image: base64 })}
        /> */}
        <img src={file} />
        <div>
          <input type="file" onChange={handleChange} />
        </div>
        <button className="post" onClick={posted}>
          Post
        </button>
      </div>
    </>
  );
};
export default CreatePost;
