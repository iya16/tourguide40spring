import React, { Component } from 'react'
import "./package.css"

export class Package extends Component {
    state = {
        showInfo: false
    };
    handleInfo= ()=>{
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
  render() {
    const { city, img, Name, info}=this.props;
    return (
            <article className='package'>
                <div className='img-container'>
                    <img src={img} alt="" />
                        <span className='close-btn'>
                            {/* <i className='fas fa-window-close'></i> */}
                        </span>
                </div>
                <div className='package-info'>
                    <h3>{city}</h3>
                    <h4>{Name}</h4>
                    <h5>
                        More{""}
                        <span onClick={this.handleInfo}>
                            <i className='fas fa-caret-square-down'></i>
                        </span>
                    </h5>
                    
                        {this.state.showInfo && <p>{info} </p>}
                
                </div>
            </article>
    );
  }
}

export default Package;
