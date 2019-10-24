import React, { Component } from 'react';
import NavBar from './navbar';
import MobileCart from './mobileCart';

class MobileApp extends Component {
    state = { 
         mobileArr : [
            { name:'Redmi 6',desc1:'(Upto 64GB)',desc2:'Dual Rear Cam|3000mAh',price: 7499},
            { name:'Realme 3',desc1:'(Upto 4GB)',desc2:'Dual Rear Cam|4230mAh',price: 8999},
            { name:'Honor 7S',desc1:'(2GB|16GB)',desc2:'Face Unlock|3020mAh',price: 5499},
            { name:'Samsung J6',desc1:'(4GB|64GB)',desc2:'14.22cm HD|Face Unlock',price: 9490},
            { name:'Moto One',desc1:'(4GB|64GB)',desc2:'Extra 2000 off on Exchange',price: 13999},
            { name:'Nokia 6.1',desc1:'(3GB|32GB)',desc2:'Full HD Display|SD 630',price: 6999},
        ],
        cart : [],
        quantity : 0,
        cartValue: [],
     }

        handleBuy = (val) => {
            const mobileArr = this.state.mobileArr.filter( mobile => mobile !== val );
            this.setState({ mobileArr }); 
            console.log(val.name)
                        
                   
            if(this.state.cart.length === 0 || this.state.cart.find(data => data.name === val.name) === undefined){
                    this.state.cart.push({name: val.name, quantity: 1, price: val.price });
                    this.setState({ cart : this.state.cart });
                    console.log(this.state.cart)
                    this.setState({quantity : this.state.quantity + 1})
            }
            else {
                    this.state.cart.find(data => {
                        if(data.name === val.name){
                            data.quantity++ ;
                            data.price = (data.price+val.price) ; 
                            this.setState({quantity : this.state.quantity + 1})          
                        }
                    
                    })         
            }
                                         
            const mobileVal = this.state.mobileArr.filter( mobile => mobile !== val.price );
            this.setState({ mobileArr: mobileVal }); 
            this.state.cartValue.push(val.price);
            this.setState({ cartValue : this.state.cartValue });   
                          
       }       
                  
        handleRemove = (mobile) => {
            const cart = this.state.cart.filter( val => val.name !== mobile.name );
            this.setState({ cart  });
            console.log(cart)  
            console.log(mobile)
            this.setState({quantity: this.state.quantity - mobile.quantity})
            if(cart == 0){
                this.setState({quantity: this.state.quantity = 0})
            }
          
       }

        renderCart(){
            if(this.state.cart.length === 0) return <div className="container"><h6>Cart Is Empty</h6></div>

                return(
                    <div>
                        <ul>{this.state.cart.map((mobile,i) => <li  key={i}>
                            {mobile.name}, quantity : {mobile.quantity}
                            <button onClick={ () => this.handleRemove(mobile)} className="btn btn-secondary btn-sm m-2">Remove from Cart</button>
                            </li> )} 
                        </ul> 
                        <h6>Number of items in cart ={ this.formatQuantity() }</h6>
                        <h6>Value of cart ={ this.state.cart.map((mobile) => mobile.price).reduce((a,b) => a+b) }</h6>  
                    </div>
                )
        }

    render() { 
        return ( 
            <React.Fragment>
            <NavBar cartProduct={this.state.quantity}/>
            <main className="container bg-light">
                <div style={{textAlign: 'center'}}> <h3>Exciting Deals on Mobiles</h3></div>

                <MobileCart
                mobileArr={this.state.mobileArr}
                onBuy={this.handleBuy}              
                />  
                  <h4>Cart</h4>  
                    {this.renderCart()}  
                </main>
        </React.Fragment>
         );
    }

     formatQuantity(){
        const { quantity } = this.state;
        return quantity === 0 ? <span>0</span> : quantity; 
    }
}
 
export default MobileApp;