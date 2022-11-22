import './footer.css'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";





export default function Footer(){
    return(
        // <div className="container">
            <div className="row footer bg-dark">
                <h3 className='text-light'>شبکه اجتماعی</h3>
                <div className="icons d-flex">
                    <a className='col-1' href="https://github.com/humayb"><FaGithub/></a>
                    <a className='col-1' href="https://www.instagram.com/humayb.web"><FaInstagram/></a>
                    <a className='col-1' href="https://www.instagram.com/humayb.web"><FaLinkedin/></a>
                    <a className='col-1 ' href="https://www.instagram.com/humayb.web"><FaDribbbleSquare/></a>

                </div>
                
                <h4 className='text-light'>
                        <a href="http://humayb.com/">
                        Designer: Homa BahramParvar
                        </a>
                    </h4>
            </div>
        // </div>
    )
}