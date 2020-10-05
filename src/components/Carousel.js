import React, {useState,useEffect} from 'react';
import axios from 'axios';
import SingleProduct from './SingleProduct';


const Carousel = ()=>{

    // set api res to state to pass props to the single products

    let productosUrl = 'http://localhost:5000/productos'

    const [products,setProducts] = useState([]);

    useEffect(()=>{

        // first start the json server on port 5000
        // json-server --watch db.json --port 5000

        
        axios.get(productosUrl)
        .then(response=>
          {
                setProducts({
                    ...products,
                    products:[response.data]
                })
          }
        )
        .catch(error=>console.log(error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    let scrollLeft;
    let grabbing = false;
    let startX;

    const dragHandle=(e)=>{
        grabbing = true;
        startX = e.pageX - e.target.offsetLeft;
        scrollLeft = e.target.scrollLeft;
        
    }

    const dragHandleRelease=(e)=>{
        grabbing = false;
    }

    const mouseMove=(e)=>{
        if(!grabbing) return;
        e.preventDefault();
        const x = e.pageX - e.target.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        e.target.scrollLeft = scrollLeft - walk;
    }

    const mouseLeaveHandle=(e)=>{
        grabbing = false;
    }

    return(
        <div 
        className="carousel" 
        onMouseDown={e=>dragHandle(e)} 
        onMouseUp={e=>dragHandleRelease(e)} 
        onMouseMove={e=>mouseMove(e)} 
        onMouseLeave={e=>mouseLeaveHandle(e)}>
          
            {
                products.length === 0 ? 'Cargando...' : products.products[0].map(product=>(
                   <SingleProduct
                        key = {product.id}
                        product={product}
                    />
                )) 
                
            }
            
         
        </div>
    )
}

export default Carousel;