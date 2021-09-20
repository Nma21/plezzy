import React from 'react';
import Logo from '../images/img-prody.jpg';
import Pastery from '../images/img-past.jpg';

const Products = () => {
    return ( 
        <div className='prods'>
            <div>
                <div>
                <h2>Our Products</h2>
                <p>At PlezziCakes, we pride ourselves in making delicious and healthy cakes and pasteries.</p>
                <p>We also bake to your desire.</p>
                </div>
              <div> 
            <img src={Logo} className='pastes' alt='plain butter scotch cake' height='auto' width='60%'></img>
            </div> 
            </div>
          <div>
              <div>
                  <p>Our cakes include Plain Butter Scotch, Chocolate, Red Velvet, Banana, Fruit and Carrot Cakes.</p>
                  <p>We also make cakes for wedding and traditional marriage ceremonies, as well as customized cakes for birthdays and other events.</p>
              </div>
              <div>
                  <p>PlezziCakes pasteries include Small Chops, Doughnuts, Puff-Puff, Chin-Chin, Enriched Meatpie, Scotch-Eggs, Pizza, waffles, corn-dog and so much more.</p>
                  <img src={Pastery} className='pastes' alt='pasteries' height='auto' width='100%'></img>
              </div>
          </div>
        </div>
     );
}
 
export default Products;