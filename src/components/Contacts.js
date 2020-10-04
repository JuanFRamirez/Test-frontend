import React,{useEffect,useState} from 'react';
import Swal from 'sweetalert2';

const Contacts = ()=>{

    const [formState,setForm] = useState({
        search:'',
        titulo:'',
        nuevo:'',
        categoria:'',
        cantidad:0,
        peso:0,
        precio:0,
        detalles:''

    })

    const{search,titulo,nuevo,categoria,cantidad,peso,precio,detalles} = formState

    let precioConTax = 0;

    useEffect(()=>{
        setForm({
           ...formState
        })
    },[])

    const onChangeHandler=(e)=>{
        setForm({
            ...formState,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        if(search!=='' && titulo !==''&& nuevo!==''&& categoria!==''&& peso!=0 && cantidad!=0 && precio!=0 && detalles!==''){

            try{

                setForm({
                    ...formState,
                    search:search,
                    titulo:titulo,
                    nuevo:nuevo,
                    categoria:categoria,
                    peso:parseFloat(peso),
                    cantidad:Number(cantidad),
                    precio:Number(precio),
                    detalles:detalles
                })
                Swal.fire(
                    'Exito',
                    'Datos Enviados Correctamente, Revisar el console log',
                    'success'
                )
                console.log(formState);

            }catch(e){
                Swal.fire('Error',
                'Ha ocurrido un error',
                'error'
                )
            }
           
        }
        else{
            Swal.fire(
                'Error',
                'Los campos son requeridos',
                'error'
            )
        }
    }



    return(
        <div className="contact-form">
            <h1>Compra con nosotros</h1>
            <div className="search-box">
                <span><i className="fas fa-search"></i></span>
                <input
                type="text"
                name="search"
                required="required"
                placeholder="Pega aqui el enlace del producto de una tienda"
                className="form-control"
                onChange={e=>onChangeHandler(e)}
                value={search}
                />
            </div>

            <form onSubmit={e=>submitHandler(e)}>
                <label>Titulo del Producto</label>
                <p className="faded">Llena el titulo adecuadamente para recibir alertas</p>
                <input
                type="text"
                name="titulo"
                className="form-control"
                onChange={e=>onChangeHandler(e)}
                value={titulo}
                />
                <label>Detalles del producto:</label>
                <p className="faded">Es un producto Nuevo? A qué categoría pertenece? Cuánto cuesta?</p>
                <div className="two-fields">
                    <select className="select" name="nuevo" className="form-control w-25" onChange={e=>onChangeHandler(e)} value={nuevo}>
                        <option defaultValue="Estado">Estado</option>
                        <option value="nuevo">Nuevo</option>
                        <option value="usado">Usado</option>
                    </select>
                    
                    <select className="select" name="categoria" className="form-control w-75" placeholder="Categoría" onChange={e=>onChangeHandler(e)} value={categoria}>
                        <option>Categoria</option>
                        <option value="x">x</option>
                        <option value="y">y</option>
                        <option value="z">z</option>
                    </select>

                </div>

                <div className="three-fields">
                    <select className="select" name="cantidad" className="form-control w-33" onChange={e=>onChangeHandler(e)} value={cantidad}>
                        <option value="0">Cantidad</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    
                    <input
                    type="number"
                    name="peso"
                    className="peso"
                    placeholder="Peso"
                    className="form-control w-33"
                    value={peso}
                    onChange={e=>onChangeHandler(e)}
                    />
                    <input
                    type="number"
                    name="precio"
                    className="precio"
                    placeholder="Precio"
                    className="form-control w-33"
                    value={precio}
                    onChange={e=>onChangeHandler(e)}
                    >
                    </input>

                </div>

                <div className="one-side">
                    <span>Detalle: </span>
                    <input
                    type="text"
                    name="detalles"
                    className="detalles"
                    placeholder="Talla, Color, Modelo..."
                    className="form-control"
                    value={detalles}
                    onChange={e=>onChangeHandler(e)}
                    />
                </div>

                <div className="totales">
                    <div className="precio-total">
                        <span>total aproximado</span><b> ${precioConTax}</b>
                    </div>  

                <div className="detalles-facturacion">
                        <div className="precio-unitario">
                            <p>Precio unitario del producto: <span>$</span></p> 
                            <p>*TAX en EEUU. (7%): <span>$</span></p>
                            <p>Comisión total propuesta al viajero: <span>$</span></p> 
                            <p>Comisión calculada por Guvery: <span>$</span></p>
                            <p>Total a pagar aproximado: <span>$</span></p>
                        </div>

                        <div className="taxes">
                            <h3>TAX ó impuesto en EE.UU.:</h3>
                            <p>* El TAX varia por ciudad</p>
                            <p>El TAX más común es 7%</p>
                            <p>En ocasiones podría ser 0%</p>
                        </div>

                </div>
        </div>

                <button 
                type="input" 
                className="btn btn-warning comprar"
                >
                Comprar
                </button>

            </form>
         
        </div>
    )
}

export default Contacts
