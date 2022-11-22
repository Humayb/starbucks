import './heroSection.css'
import { FaMotorcycle } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

import imgsec1 from '../../img/starbucks.png'



export default function HeroSection(){
    return(
        <section className="row herosec">
            <Right />
            <Center />
            <Left />
        </section>
    )
}

function Left(){
        return(
            <div className="col-sm-4 col-sx-12 left-herosec">
                <ul>
                    <li className='col-12'>   
                        <div className='icon'><FaMotorcycle /></div> 
                        <div>
                            <h4>ارسال سریع</h4>     
                            <span>ارسال کمتر از نیم ساعت</span> 
                        </div>          

                    </li>

                    <li className='col-12'>    
                        <div className='icon'><FaShoppingBag /></div>
                        <div>
                            <h4>ارسال سریع</h4>     
                            <span>ارسال کمتر از نیم ساعت</span> 
                        </div>          

                    </li>

                    <li className='col-12'>  
                        <div className='icon'><FaCoffee /></div>  
                        <div>
                            <h4>ارسال سریع</h4>     
                            <span>ارسال کمتر از نیم ساعت</span> 
                        </div>          

                    </li>
                </ul>
        </div>
        
    )
}

function Center(){
    return(
        <figure className="col-sm-4 d-flex align-items-center img-fluid imag col-sx-12">
            <img className='col-12' src={imgsec1} alt="" />
        </figure>

     )
}

function Right(){
    return(
        <div className="col-sm-4 col-sx-12 right-herosec ">

            <div className='right-herosec-items' >
                <div className='txt mt-10'>
                    <div className='circle'></div>
                    <h1>ارسال
                        <br />
                            <span>سریع</span> و
                            <br />
                            تحویل<span> آسان </span> 
                    </h1>
                </div>

                <div className='btns row'>
                    
                    <a className='btn-video col-3' href="">
                        <div className='bigcircle col-6'></div>
                        <div className='smalcircle col-6'>
                            <FaPlay />
                        </div>
                    </a>

                    <button className='col-3 btn btn-success text-light'>سفارش</button>

                </div>
            </div>
        </div>

    )
}