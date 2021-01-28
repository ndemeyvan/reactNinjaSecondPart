import {Link} from 'react-router-dom'

const BlogItem = (props) => {
  return (
    <div>
      {props.blogs.map((item) => (
        <div className="blog-preview" key={item.id}>
          <div className="inline_title">
          <Link to={`blog/${item.id}`}> <h3>{item.Author} : </h3></Link>
            {/* <h3>{item.Author} : </h3> */}
            <p> {item.title}</p>
            <button
              onClick={() => {
                props.deleteBlog(item.id);
              }}
            >
              Delete
            </button>
          </div>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogItem;
