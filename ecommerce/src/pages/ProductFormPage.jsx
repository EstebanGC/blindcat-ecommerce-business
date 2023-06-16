import {useForm } from 'react-hook-form'
import { createProduct } from '../api/products.api';

export function ProductFormPage() {

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = handleSubmit(async data => {
        console.log(data);
        try{const res = await createProduct(data);
            console.log(res.data);
        } catch (error) {
            console.log(error.response.data);
        } 
    });

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Name" 
                {...register("productName", { required: true })}/>
                {errors.productName && <span>Required field</span>}
                <textarea rows="3" placeholder="Description"
                {...register("description", { required: true })}></textarea>
                {errors.description && <span>Required field</span>}
                <input type='number' placeholder='Price' 
                {...register("productPrice", {required: true})}/>
                {errors.productPrice && <span>Required field</span>}
                <input type='text' placeholder="Quantity"
                {...register("producQuantity", {required:true})}/>
                {errors.producQuantity && <span>Required field</span>}
                <input type="number" placeholder='Stock'
                {...register("stock", {required:true})}/>
                {errors.stock && <span>Required field</span>}
                <input type="number" placeholder='Minimum units'
                {...register("minProduct", {required:true})}/>
                {errors.minProduct && <span>Required field</span>}
                <button>Save</button>
            </form>
        </div>
    )
}