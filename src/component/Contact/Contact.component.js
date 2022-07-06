import { useNavigate } from "react-router-dom";
const Contact=()=>{
const navigate =useNavigate();

const handleChange=()=>{
    navigate("/Home");
}

return(
    <div>
        <h1>Contact page</h1>
        <button onClick={handleChange}>Visit Home Page</button>
    </div>
)
}
export default Contact;