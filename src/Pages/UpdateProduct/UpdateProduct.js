import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { useForm } from "react-hook-form";

const UpdateProduct = () => {
    const { productId } = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch(`http://localhost:5000/update/${productId}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert('Updated Successfully');
                    reset();
                }

            })
    }


    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${productId}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data));
    }, [])

    return (
        <div className="add-div shadow my-5">
            <h2 className="m-3 p-2">Update Product</h2>
            <div>
                <form className="add-form" onSubmit={handleSubmit(onSubmit)}>

                    <input className="rounded p-2 m-2 " defaultValue={singleProduct.name || ''} {...register("name")} />

                    <input className="rounded p-2 m-2" defaultValue={singleProduct.price || ''} type="number"{...register("price", { required: true })} />

                    <textarea className="rounded p-2 m-2" defaultValue={singleProduct.description || ''} {...register("description")} />

                    <input className="btn btn-danger mt-3" type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;