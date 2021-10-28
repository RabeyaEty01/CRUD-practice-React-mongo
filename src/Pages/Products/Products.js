import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isDeleted]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount) {
                    setIsDeleted(true);
                    alert('Product Deleted Successfully');
                }
                else {
                    setIsDeleted(false);
                }
            })

    };

    //buy now 
    const handleAddToCart = (index) => {
        const data= products[index];
        data.email="rabeya@gmail.com";
        data.status="pending"; //(extra data chaile evabe pathaite pari)
        // console.log(data);

        fetch('http://localhost:5000/addOrder',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if (result.insertedId) {
                alert('OrderHas been placed Successfully');
            }
        })
    };


    return (
        <div>
            <h1>All Products</h1>

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ps-2 ms-2">
                {
                    products.map((product, index) =>
                        <div class="col">
                            <div class="card shadow p-2 m-2">
                                <div class="card-body">
                                    <h5 class="card-title">{product?.name}</h5>
                                    <p class="card-text">{product?.price}</p>
                                    <p class="card-text">{product?.description}</p>

                                    <button onClick={() => handleDelete(product._id)} className="btn btn-danger m-2 p-2">Delete</button>

                                    <Link to={`/update/${product._id}`}>
                                        <button className="btn btn-success m-2 p-2">Edit</button></Link>


                                    <button onClick={() => handleAddToCart(index)} className="btn btn-warning m-2 p-2">Buy Now</button>
                                </div>
                            </div>
                        </div>



                    )
                }

            </div>

        </div>
    );
};


export default Products;