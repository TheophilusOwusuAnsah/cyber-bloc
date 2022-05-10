import { useParams,useHistory } from "react-router-dom";
import useFetch from "./useFetch";
//import {useHistory} from "react-router-dom"

const BlogDetails =()=>{
    const {id}= useParams();
    const {data:blogs,error, isPending}= useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();

const deleteBlog = ()=>{
    fetch('http://localhost:8000/blogs/'+ blogs.id,{
method:'DELETE'
    })
.then(()=>{
    history.push('/');
}
)    
}

    return(
<div className="blog-details"> 
<h2>Blog Details</h2>
{isPending && <div>Loading...</div>}
{error && <div>{error}</div>}
{blogs && (
    <article>
        <h2>{blogs.title}</h2>
        <p>Written by{blogs.author}</p>
        <div>{blogs.body}</div>
        <button onClick={deleteBlog}>Delete Blog</button>
    </article>
)}
</div>
    )
}
export default BlogDetails;