import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Orders = ()=>{

    const [orderList,setOrders] = useState([]);
    const [tags,SetTags] = useState({
        transito:0,
        prealertado:0,
        entregado:0
    })

    let ordenesUrl = 'http://localhost:5000/Ordenes'

    useEffect(()=>{
         // first start the json server on port 5000
        // json-server --watch db.json --port 5000

        axios.get(ordenesUrl)
        .then(response=>{
            setOrders({
                ...orderList,
                orderList:[response.data]
            });
            console.log(response.data);
            contarTags(response.data)

        }).catch(error=>console.log(error))

        SetTags({
            ...tags
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function contarTags(arg){
       const result = arg.filter(transito=>
           transito.Tag == 'transito'
       );
       const result2 = arg.filter(alertado=>
        alertado.Tag == 'prealertado'
    );
    const result3 = arg.filter(entrega=>
        entrega.Tag == 'entregado'
    );
       let enTransito = result.length;
       let preAlertado = result2.length;
       let entregado = result3.length;

       SetTags({
           ...tags,
           transito:enTransito,
           prealertado:preAlertado,
           entregado:entregado

       })
       

    }

    return(
       
                    <div className="orders">
                         <ul className="nav nav-tabs" id="nav-tab" role="tablist">

                                <li className="nav-item active">
                                <a className="nav-link" href="#nav-paq" data-toggle="tab" role="tab" aria-controls="nav-paq" >Paquetes</a>
                                </li>

                                <li className="nav-item">
                                 <a className="nav-link" href="#nav-ord" data-toggle="tab" role="tab" aria-controls="nav-ord" >Ordenes de Compra</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#nav-pag" data-toggle="tab" role="tab" aria-controls="nav-pag" >Pagos Pendientes</a>
                                </li>
                            </ul>

                        <div className="tab-content">

                        <div className="tab-pane fade show active table-responsive" id="nav-paq" role="tabpanel">
                        <div className="tags row">
                            <h4>En Tránsito <span className="cantidad-tag">{tags.transito}</span></h4>
                            <h4>Prealertados <span className="cantidad-tag">{tags.prealertado}</span></h4>
                            <h4>Entregados <span className="cantidad-tag">{tags.entregado}</span></h4>
                        </div>
                        <table className="table table-striped table-pagination">
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
                            orderList.length === 0 ? <tr><td>Cargando ordenes...</td></tr> : orderList.orderList[0].map(ordenes=>(
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
                        <table className="table table-striped table-responsive"> 
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
                        <table className="table table-striped table-responsive"> 
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