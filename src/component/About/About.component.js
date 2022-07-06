import { useNavigate } from "react-router-dom";
const About=()=>{
const navigate =useNavigate();

const handleChange=()=>{
    navigate("/Blog");
}

return(
    <div>
        <h1>About page</h1>
        <button onClick={handleChange}>Visit Blog Page</button>
    </div>
)
}
export default About;