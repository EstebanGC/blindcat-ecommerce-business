import {useForm } from 'react-hook-form'

export function ProductFormPage() {

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(data => {
        console.log(data)
    })

    return(
        <div>
            <form action="">
                <input type="text" placeholder="Name" 
                {...register("title", { required: true })}/>
                <textarea rows="3" placeholder="Description"
                {...register("description", { required: true })}></textarea>
                <input type='number' placeholder='Price' 
                {...register("price", {required: true})}/>
                <textarea rows="1" placeholder="Quantity"
                {...register("quantity", {required:true})}></textarea>
                <input type="number" placeholder='Stock'
                {...register("stock", {required:true})}/>
                <input type="number" placeholder='Minimum units'
                {...register("minUnits", {required:true})}/>
                <button>Save</button>
            </form>
        </div>
    )
}