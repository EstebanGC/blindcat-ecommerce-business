import {useForm} from 'react-hook-form';
import {createBuy} from '../api/buy.api';


export function BuyFormPage() {

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = handleSubmit(async data => {

        console.log(data);

        try {const res = await createBuy(data);
            console.log(res.data);
        } catch(error){
            console.log(error.response.data);
        }
    });

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Total price" 
                {...register("totalPrice", { required: true })}/>
                {errors.totalPrice && <span>Required field</span>}
                <input type="number" placeholder='Quantity'
                {...register("quantity", { required:true })} />
                {errors.quantity && <span>Required field</span>}
                <textarea type="text" placeholder='Id Type'
                {...register("clientIdType", { required:true })} />
                {errors.clientIdType && <span>Required field</span>}    
                <button>Save</button>            
            </form>
        </div>
    )
}





