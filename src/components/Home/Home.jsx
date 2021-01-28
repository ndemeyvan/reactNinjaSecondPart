import "./Home.css";
import { useState } from "react";
import BlogItem from "./blogItem";

const Home = () => {
  //   const [name, setName] = useState("Mario");
  const [blogs, setBlogs] = useState([
    {
      title: "Pere riche pere pauvre",
      Author: "Robert Kiosaki",
      id: 0,
      body:
        "Runlet is a cloud-based job manager that offers device synchronization and reliable message delivery in a network of connected devices even after connectivity issues.",
    },
    {
      title: "Reflechissez et devenez riche",
      Author: "Napoleon hill",
      id: 1,
      body:
        "Runlet provides an easy to use interface to manage jobs across a fleet of connected devices, trigger remote executions, and view logs from remotely executed jobs. You can also quickly get a new device started since all configuration files and records are in the cloud.",
    },
    {
      title: "La loi de l'attraction universelle",
      Author: "Robert Kiosaki",
      id: 2,
      body:
        "We only collect necessary user information during registration (such as your name, email address, and social media avatar). We do not share your data with any affiliates or service providers. For more details, have a look at our terms of service and privacy policy.",
    },
  ]);

  const deleteBlog = (id) => {
    console.log("This is the id :", id);
    const newBlog = blogs.filter((item) => item.id !== id);
    console.log("This is the new blog : ", newBlog);
    setBlogs(newBlog);
  };

  //   const handleClick = () => {
  //     console.log("This is click");
  //   };

  //   const handleClickAgain = (name) => {
  //     console.log("This is click " + name);
  //     setName(name);
  //   };
  return (
    <div className="Home">
      {/* <h2>Hellomy name is {name}</h2> */}
      
      {blogs.length == 0 ? (
        <p>La liste est vide </p>
      ) : (
      <div>
            <h3>Hello Welcome on React Blog </h3>
        <BlogItem blogs={blogs} deleteBlog={deleteBlog} />
      </div>
      )}
      {/* <button onClick={handleClick}>Click me bro</button>
            <button onClick={()=>{handleClickAgain("Luigi")}}>Click me again bro</button> */}
    </div>
  );
};

export default Home;
