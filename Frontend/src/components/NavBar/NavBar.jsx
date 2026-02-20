import "./NavBar.css"
import GlassCard from '../GlassCard/GlassCard'
import logoImg from '../../assets/planeteerLogo.png'
// import {useNavigate} from 'react-router-dom'

const NavBar = () => {
    // const navigate = useNavigate();
  return (
    <GlassCard 
        className="navbarCont"
        blurAmount={0}          // blur of the glass
        bgOpacity={0.15}          // background opacity
        contentBgOpacity={0.0}   // content background opacity
        borderOpacity={0.0}     // border transparency
        noiseOpacity={0.0}      // subtle noise
        borderRadius={18}        // border radius
    >
        <div className="navbar">
            <div className="logo">
                <img src={logoImg} alt="PlaneTeer Logo" className="logo-image" />
                <h1>PlaneTeer</h1>
            </div>
            {/* <div className="navlinks">
                <a onClick={() => navigate('/signin')}>
                    <h1>Sign In</h1>
                </a>
            </div>   */}
        </div>
        
    </GlassCard>
  )
}

export default NavBar