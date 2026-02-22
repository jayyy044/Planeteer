import "./LandingPage.css"
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/upload"); // 👈 change this to whatever route you want
  };
  return (
    <div className="homePageMainCont">
      <h1 >Plane<span>Teer</span></h1>
      <p>Your road to safer and healthier crops starts here</p>
      <button onClick={handleClick}>GET STARTED</button>

    </div>
  );
};



export default LandingPage;
