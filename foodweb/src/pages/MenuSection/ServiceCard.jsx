import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Share/Context/Context';
import Swal from 'sweetalert2';
import useCart from '../Hooks/useCart/useCart';
import Nutritional from './Nutritional';
// import useCart from '../useCart/UseCart';

const ServiceCard = ({ service }) => {
    const { recipe_name, image, price_bdt, category, nutritional_value, ingredients } = service
    console.log(recipe_name);
    const [, refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()
    const { user } = useContext(AuthProvider)

    const addToCart = service => {

        if (user && user.email) {
            const itemsAddToCart = { recipe_name, image, category, price_bdt, email: user.email }
            console.log(itemsAddToCart);

            fetch('http://localhost:8000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(itemsAddToCart)
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `Successfully added this ${category} item`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

        }
        else {
            Swal.fire({
                title: 'Please log in for ordering an item',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ok!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className='flex'>
            <img className='w-[118px] h-[104px]' style={{ borderRadius: '0px 200px 200px 200px' }} src={image} alt="" />
            <div className='ps-6'>
                <h3 className='text-2xl cinzel'>{recipe_name} -------</h3>
                {/* <p className='inter text-xl py-3'>{recipe}</p> */}

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn cursor-pointer uppercase rounded-lg bg-white p-4 border-b-4 border-0 border-red-500 text-black font-semibold" onClick={() => document.getElementById('my_modal_2').showModal()}>Details</button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <img className='w-2/5 mx-auto rounded-lg mb-5' src={image} alt="" />
                        <div className='flex justify-between'>
                            <h1 className="font-bold text-lg text-center">{recipe_name}</h1>
                            <h1 className='text-center text-[#bb8506] font-bold'>Price: <span className='text-2xl'>&#2547;</span> {price_bdt}</h1>
                        </div>
                        <div className='grid grid-cols-2 my-5'>
                            
                            <div>
                                <h3 className='font-bold text-[#bb8506]'>Ingredients</h3>
                                {
                                    ingredients.map((ingredient, index) => (
                                        <p key={index}>{ingredient}</p>
                                    ))
                                }
                            </div>
                            <div className='text-right'>
                                <h3 className='font-bold text-[#bb8506]'>Nutritional Value:</h3>
                                <p>Calories: {nutritional_value.calories || 0}g</p>
                                <p>Protein: {nutritional_value.protien || 0}g</p>
                                <p>Carbohydrates: {nutritional_value.carbohydrates || 0}g</p>
                                <p>Fat: {nutritional_value.fat || 0}g</p>
                                <p>Fiber: {nutritional_value.fiber || 0}g</p>
                            </div>
                        </div>
                        <div className='text-center mt-5'>
                            <button onClick={() => addToCart(service)} className='mx-auto cursor-pointer uppercase rounded-lg bg-white p-3 border-b-4 border-red-500  text-black font-semibold'>Add To Cart </button>
                        </div>
                    </div>

                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                {/* <button onClick={()=> addToCart(service)} className='cursor-pointer uppercase rounded-lg bg-white p-4 border-b-4 border-red-500  text-black font-semibold'>Add To Cart </button> */}
            </div>
            <p className='text-2xl flex justify-between text-[#bb8506]'> <span className='ps-2'>&#2547;</span>{price_bdt}</p>

        </div>
    );
};

export default ServiceCard;