import {useState}from "react";
import {useHistory} from "react-router-dom"
const Create = ()=>{
    const [title,setTitle] =useState('')
    const [body,setBody]  =useState('')
    const [author,setAuthor]=useState('Theo')
    const [isPending,setisPending]=useState(false)


const history = useHistory();

const postBlog=(e)=>{
    e.preventDefault();
    const blog= {title,body,author}
    setisPending(true)
fetch('http://localhost:8000/blogs',{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(blog)
}).then(()=>{
    console.log ("new data added")
    setisPending(false)

    //history.go(-1)
    history.push ('/')
})
}

    return(
        <div className= "create">
        <h2>Add a New Blog</h2>
        <div className="create-blog">
        <form onSubmit={postBlog}>
            <label className="lab">Blog Title</label>
            <input type="text"
            required
            value= {title}
            onChange ={(e)=>setTitle(e.target.value)}
            />
            <label className="lab">Blog Body</label>
            <textarea
            required
            value= {body}
            onChange ={(e)=>setBody(e.target.value)}
            ></textarea>
            <label className="lab">Author</label>
            <select className="lab">
            value= {author}
            onChange ={(e)=>setAuthor(e.target.value)}
                <option value="Eugene">Eugene</option>
                <option value="Theo">Theo</option>
                <option value="Belle">Belle</option>
            </select>
            {!isPending &&<button className="lab">Add Button</button>}
            {isPending &&<button disabled className="lab">Adding Blog</button>}

        </form>
        </div>
        </div> 
        
    );
        

}
export default Create;