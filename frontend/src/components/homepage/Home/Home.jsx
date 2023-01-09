import React from "react";
import logo from "./logo.png";
import "./home.css";
import Navbar from "./nav/Nav";
import axios from "axios";
import { useState, useEffect } from "react/cjs/react.development";
import { useHistory } from "react-router-dom";
import Card from "./Card";

const Home = ({ setLoginUser, user }) => {
  const history = useHistory();
  const [dta, setdta] = useState([]);

  useEffect(async () => {
    await axios
      .get("http://localhost:9002/getposts")
      .then((res) => {
        setdta(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dta]);

  const onDelete = async (e) => {
    console.log(e);
    try {
      await axios.delete(`http://localhost:9002/posts/${e}`).then((res) => {
        history.push("/");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const update = (id, title, content, image) => {
    history.push({
      pathname: "/posts",
      state: {
        id,
        title,
        content,
      },
    });
  };

  return (
    <>
      <div>
        <Navbar user={user} setLoginUser={setLoginUser} />
        <section>
          <div className="leftHome">
            <h1 className="Heading">Create your To-Do's</h1>
          </div>
          <div className="rightHome">
            <img className="logoImg" src={logo} alt="Logo" />
          </div>
        </section>

        {dta.map((elm, index) => {
          return (
            <Card
              title={elm.title}
              content={elm.content}
              image={elm.image}
              onDelete={onDelete}
              _id={elm._id}
              update={update}
            />
          );
        })}
      </div>
    </>
  );
};
export default Home;
