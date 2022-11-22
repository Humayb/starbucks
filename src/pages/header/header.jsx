import './header.css'
import logo from '../../img/Starbucks-Logo.png'

export default function Header(){
    return(
        <nav className='navbar fixed-top navbar-expand-lg bg-dark'>
                <Menu />
        </nav>
    )
}

// container-fluid

function Menu(){
    return(
        <div className='container'>

            <div className="col-1">
                <a className='navbar-brand text-light navbar-right col-2' href="#">  
                    <img className='col-3 logo' src={logo} alt="" />
                    <span>کافه با ما </span>
                </a>
            </div>


            <div className="col-10">
                <div className='collapse navbar-collapse' id="navbarSupportedContent">
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0 justify-content-center col-12'>
                        <li className='nav-item col-2'>
                            <a className='nav-link text-light' aria-current="page" href="">
                                فروشگاه
                            </a>
                        </li>
                        <li className='nav-item col-2'>
                            <a className='nav-link text-light' href="#">
                                منو
                            </a>
                        </li>
                        <li className='nav-item col-2'>
                            <a className=' nav-link text-light'>
                                درباره ما
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className='col-2 btn-en'>
                <button className='btn btn-success text-light'>ورود</button>
            </div>

        </div>
    )
}






