import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home.component';
import Contact from './component/Contact/Contact.component';
import Blog from './component/Blog/Blog.component';
import About from './component/About/About.component';

function App() {
  return (
    <div>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/About' element={<About/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;