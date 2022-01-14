import React,{Component} from 'react';
import Counter from './Counter';
/* Update Parent State Melalui Child Component */
class CardProduct extends Component {
    render(){
        return (
            <div className='card'>
                <div className='img-thumb-prod'>
                    <img src="https://i.picsum.photos/id/559/400/200.jpg?hmac=qNgxui0Qrjlv9HSBFRV8WL7P6g_Wp8NJYB-aO4VrJnQ" alt="" />
                </div>
                <p className='product-title'>Daging Ayam</p>
                <p className='product-price'>Rp 410,000</p>
                <Counter/>
            </div>
        )
    }
}

export default CardProduct;