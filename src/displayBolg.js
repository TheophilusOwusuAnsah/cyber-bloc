import {Link} from 'react-router-dom'
const DisplayBlog = ({blogs, blogtitle,deleteBlog})=>{
    //const blogs = props.blogs;
    return(
        <div className='display-blog'>
            <h2>{blogtitle}</h2>
        {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
            <h2>{blogtitle}</h2>
            <h2>{blog.title}</h2>
            <h1>{blog.author}</h1>
            <br/>
           </Link>
           <p>{blog.body}</p>
            </div>    
            ))}
            </div>
        
    )
}
export default DisplayBlog;