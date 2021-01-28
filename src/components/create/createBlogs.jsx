import './createBlog.css'
import {useState} from 'react'
const CreateBlog = () => {

  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  const [author,setAuthor] = useState("")

  const addBlog = (e)=>{
   e.preventDefault();
    const blog ={title,body,author};
    console.log("This is blog object : ", blog);
  }
  return (
    <div className="create">
      <h2>Welcome to create blog page </h2>
      <form>
      <label>Enter the Author</label>
        <input type="text" required value={author} onChange={ (e) => setAuthor(e.target.value) }/>
        <label>Enter the title</label>
        <input type="text" required value={title} onChange={ (e) => setTitle(e.target.value) }/>
        <label>Enter the content</label>
        <textarea type="text" required value={body} onChange={ (e) => setBody(e.target.value) }/>
        <button onClick={addBlog}>Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
