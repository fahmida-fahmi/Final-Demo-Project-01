import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const UpdateItem = () => {
    const servicesLoader = useLoaderData();
    console.log(servicesLoader);
    const { _id, name, category, price, recipe} = servicesLoader 
    console.log(  _id, name, category, price, recipe);

    const handleAddItem = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.recipeName.value;
        const category = form.category.value;
        const price = form.price.value;
        const recipe = form.details.value;

        const service = { name, category, price, recipe };

        fetch(`http://localhost:8000/services/${servicesLoader._id}`, {
            method: 'PATCH', // Use the correct HTTP method for updating data
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            // if(data.modifiedCount){

            Swal.fire(
                'Updated!',
                'Your service has been updated.',
                'success'
            );
        // }
        })

        
    };

    return (
        <div className='bg-white'>
            <h1 className='text-5xl uppercase my-20 text-center'>Update Item</h1>

            <form
                
                className='w-2/3 mx-auto bg-[#F3F3F3] p-10'
                onSubmit={handleAddItem}
            >
                <label >Recipe name*</label>
                <input type="text" placeholder='Recipe name' name='name' id='recipeName' defaultValue={name} />
                <div className='grid grid-cols-2 gap-10'>
                    <div>
                        <label >Category</label>
                        <input type="text" placeholder='Category' name='category' id='category' defaultValue={category}/>
                    </div>
                    <div>
                        <label >Price*</label>
                        <input type="text" placeholder='Price' name='price' id='price' defaultValue={price}/>
                    </div>
                </div>
                <label >Recipe details*</label>
                <textarea name="recipe" id="details" cols="30" rows="10" placeholder='Recipe Details' defaultValue={recipe}></textarea>
                <button
                    className='flex items-center py-3 px-5 text-white font-bold text-xl'
                    style={{
                        background: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)',
                    }}
                >
                    <p className='pe-3 capitalize'>Update Recipe Details</p>
                </button>
            </form>
        </div>
    );
};

export default UpdateItem;
