import { useNavigate } from "react-router-dom";
const Home=()=>{
const navigate =useNavigate();

const handleChange=()=>{
    navigate("/About");
}

return(
    <div>
        <h1>Home page</h1>
        <button onClick={handleChange}>Visit About Page</button>
    </div>
)
}
export default Home;