
import Inspo from './Inspo';
import stars from './stars.png';

const Home = () => {
    return (
    <div id = "home">
        <h1 id = "home-title">Welcome, </h1> 
        <p id = "home-descript">For this week's assignment I got inspiration from scrolling on Pinterest. Features to look for: offcanvas, background graphics (animated to ease in and out), navigation hover gradient.<br></br>4/3/23 </p>
        <Inspo />
        <img id = "stars" src = {stars} alt="stars"/>
    </div>
    );
  }
  
  export default Home;