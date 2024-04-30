import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import haile_resorts_outdoor3 from './../../../assets/haile_resorts_outdoor3.jpg';
import haile_resorts_outdoor4 from './../../../assets/haile_resorts_outdoor4.jpg';
import haile_resorts_outdoor5 from './../../../assets/haile_resorts_outdoor5.jpg';
import imageee from './../../../assets/imageee.jpg'
 // import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { withTranslation } from 'react-i18next';



class HotelCard extends Component{
    render(){
        const { t } = this.props;

        return(
            <div>
             
                <h2 className='text-center text-success my-5'>Recommended Hotel and Resort</h2>
                <h2 className='text-center text-success my-5'>{t("main.cardheader")}</h2>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                        <div className="card">
                            <img src={haile_resorts_outdoor3} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <p className="card-text">{t("main.cardOne.para")}</p>
                                <a href="#" className="btn btn-primary">See More</a>
                            </div>
                        </div>
                    </div>
                     <div className='col-md-3'>
                         <div className="card">
                            <img src={haile_resorts_outdoor5} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">See More</a>
                             </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card">
                            <img src={imageee} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">See More</a>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
         
         </div>
        )

}
}

class CardPlace extends Component{
    render(){
        return(
            <div> 
                <h2 className='text-center text-success my-5'>Recommended Place</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                         <div class="card">
                            <img src={haile_resorts_outdoor3} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">See More</a>
                             </div>
                        </div>
                    </div>
                    <div className='col-md-3'> 
                        <div className="card">
                             <img src={haile_resorts_outdoor4} className="card-img-top" alt="..."/>
                             <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">See More</a>
                              </div>
                         </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card">
                            <img src={haile_resorts_outdoor5} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">See More</a>
                             </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
        )
    }
}


class Card extends Component{
    render(){
        const { t } = this.props;

        return(
            <div>
      
                <HotelCard t={t} />
                <CardPlace />
      
            </div>
        )
    }
}
export default  withTranslation()(Card, HotelCard);