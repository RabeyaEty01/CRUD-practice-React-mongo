import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/addProduct', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added Successfully');
                    reset();
                }
            })
    };

    return (
        <div className="add-div shadow my-5">
            <h2 className="m-3 p-2">Please Add A Product</h2>
            <div>
                <form className="add-form" onSubmit={handleSubmit(onSubmit)}>

                    <input className="rounded p-2 m-2 " placeholder="Name" {...register("name")} />

                    <input className="rounded p-2 m-2" placeholder="Price" type="number"{...register("price", { required: true })} />

                    <textarea className="rounded p-2 m-2" placeholder="Description" {...register("description")} />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="btn btn-danger mt-3" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;