import { useNavigate } from "react-router-dom";
const Blog=()=>{
const navigate =useNavigate();

const handleChange=()=>{
    navigate("/Contact");
}

return(
    <div>
        <h1>Blog page</h1>
        <button onClick={handleChange}>Visit Contact Page</button>
    </div>
)
}
export default Blog;