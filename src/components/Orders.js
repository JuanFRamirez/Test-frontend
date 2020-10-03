import React,{useState,useEffect,Fragment} from 'react';
import axios from 'axios';

const Orders = ()=>{

    const [orderList,setOrders] = useState([]);

    useEffect(()=>{
         // first start the json server on port 5000
        // json-server --watch db.json --port 5000

        axios.get('http://localhost:5000/Ordenes')
        .then(response=>{
            setOrders({
                ...orderList,
                orderList:[response.data]
            });
            console.log(response.data);
        }).catch(error=>console.log(error))

    },[])

    return(
       
                    <div className="orders">
                         <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                           
                                <a className="nav-item nav-link active" href="#nav-paq" data-toggle="tab" role="tab" aria-controls="nav-paq" aria-selected="true">Paquetes</a>
                            
                                 <a className="nav-link" href="#nav-ord" data-toggle="tab" role="tab" aria-controls="nav-ord" aria-selected="false">Ordenes de Compra</a>
                            
                                <a className="nav-link" href="#nav-pag" data-toggle="tab" role="tab" aria-controls="nav-pag" aria-selected="false">Pagos Pendientes</a>
                            </ul>

                        <div className="tab-content">

                        <div className="tab-pane fade show active" id="nav-paq" role="tabpanel">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Tracking</th>
                                    <th>Fecha</th>
                                    <th>Descripcion</th>
                                    <th>Tracking Courier</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                        {
                            orderList.length === 0 ? <tr><td>no hay ordenes</td></tr> : orderList.orderList[0].map(ordenes=>(
                                <tr key={ordenes.id}>
                                    <td>{ordenes.tracking}</td>
                                    <td>{ordenes.fecha}</td>
                                    <td>{ordenes.descripcion}</td>
                                    <td>{ordenes.tracking_courier}</td>
                                    <td><a href="#">Ver detalles</a></td>
                                </tr>
                                
                            ))
                        }
                        </tbody>
                        </table>
                        </div>

                        <div className="tab-pane fade" id="nav-ord" role="tabpanel">
                        <table> 
                            <thead>

                            </thead>
                            <tbody>
                                <tr>
                                    <td>No hay nada</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>

                        <div className="tab-pane fade" id="nav-pag" role="tabpanel">
                        <table> 
                            <thead>

                            </thead>
                            <tbody>
                                <tr>
                                     <td>No hay nada</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
    )
}

export default Orders;