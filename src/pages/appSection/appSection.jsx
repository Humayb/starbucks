import './appSection.css'
import apple from '../../img/App_Store.svg'
import googleplay from '../../img/app-on-google-play.svg'
import starbucksapp  from '../../img/starbucksapp.png'

export default function AppSection(){
    return(
        <div className='container'>
            <section className='row'>
                <div className='col-12 d-flex box bg-success'>
                    <ImgApp />
                    <DownloadApp />
                </div>

        </section>
        </div>
    )
}

function ImgApp(){
    return(
        <figure className='col-5 right'>
            <img src={starbucksapp} alt="" />
        </figure>
    )
}

function DownloadApp(){

    return(
        <div className="left col-5">
            <div className=' txt row'>
                <h3 className='text-light'>
                    دانلود      
                </h3>
   
                <h2 className='app-text'>
                اپ نرم افزار
                </h2>
            </div>
            
            <figure className='col-12'>
                <a className='col-6'  href="">
                    <img className='img-fluid col-6' src={apple} alt="" />
                </a>
                
                <a  className='col-6'   href="">
                    <img className='img-fluid col-6' src={googleplay} alt="" />
                </a >

            </figure>
        </div>
    )

}