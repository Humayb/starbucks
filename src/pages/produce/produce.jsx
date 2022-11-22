import './produce.css'
import starbucks3 from '../../img/starbucks-3.png'
import starbucks2 from '../../img/starbucks-2.png'
import starbucks4 from '../../img/starbucks-4.png'
import starbucks5 from '../../img/starbucks-5.png'

export default function Produce(){
    return(
        <div className="container">
            <div className="row">
                <h2 className='d-flex justify-content-center'>محصولات</h2>

                <div className="produce row">

                    <a className='produce-items col-3'>
                        <img src={starbucks3} alt="" />
                        <div></div>
                        <button className='btn btn-success col-8'>خرید</button>
                    </a>

                    <a className='produce-items col-3'>
                        <img src={starbucks2} alt="" />
                        <div></div>
                        <button className='btn btn-success col-8'>خرید</button>
                    </a>

                    <a className='produce-items col-3'>
                        <img src={starbucks4} alt="" />
                        <div></div>
                        <button className='btn btn-success col-8'>خرید</button>
                    </a>
                  
                </div>
            </div>
        </div>
    )
}