import React from 'react';


const SingleProduct = ({product})=>{

    const {Title,Image,Footer} = product
return(
    <div key={product.id} className="single-product">
         <h3>{Title}</h3>
         <img
         src={Image}
         loading="lazy"
         />
         <p>{Footer}</p>
    </div>
   
)
}

export default SingleProduct