import React, { Component } from 'react';
import Mobile from './mobile';

class MobileCart extends Component {   

    render() { 
        return ( 
            <div className="container">
                    <div className="row">
                        {this.props.mobileArr.map((mobile,i)  =>  ( 
                            <Mobile
                            key={i}
                            onBuy={this.props.onBuy}
                            mobile={mobile}
                            />
                         )) }
                        </div>
                                                                
         </div> 
         );
    }

   
}
 
export default MobileCart;