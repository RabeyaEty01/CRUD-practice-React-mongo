import React, { useEffect } from 'react';
import { useState } from 'react';

const AdminDashboard = () => {
    const email="rabeya@gmail.com";
    const [orders,setOrders]=useState([]);
    

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

   

    return (
        <div>
            <h1>Total Order: {orders.length}</h1>
            <div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ps-2 ms-2">
                {
                    orders.map((order, index) =>
                        <div class="col">
                            <div class="card shadow p-2 m-2">
                                <div class="card-body">
                                    <h5 class="card-title">{order?.name}</h5>
                                    <p class="card-text">{order?.price}</p>
                                    <p class="card-text">{order.email}</p>
                                    <p class="card-text">{order?.description}</p>

                                    <button className="btn btn-danger m-2 p-2">Cancel Order</button>
                                </div>
                            </div>
                        </div>



                    )
                }

            </div>
            </div>
        </div>
    );
};

export default AdminDashboard;