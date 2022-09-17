import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {



    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />I'm
                <img src={LogoTitle} alt="developer" />
                lobodan
                <br />
                Web Developer
                </h1>
                <h2>Software Engineer / ASP.NET / JAVA / REACT</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home