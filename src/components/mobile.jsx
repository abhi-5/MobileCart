import React, { Component } from 'react';

class Mobile extends Component {

    render() { 
        return ( 
             <div className="col-sm-4">       
                 <div  className="card-body" style={{background: 'lightgreen',textAlign: 'center'}}> 
                         <h5 className="card-title">{this.props.mobile.name}{this.props.mobile.desc1}</h5>
                         <p className="card-text">{this.props.mobile.desc2}</p>
                         <button  onClick= { () => this.props.onBuy(this.props.mobile)} 
                                     className="btn btn-light btn-sm m-2">Just {this.props.mobile.price}</button>
                         <br/> 
                 </div>     
                 <br/>
          </div>
         );
    }
}
 
export default Mobile;