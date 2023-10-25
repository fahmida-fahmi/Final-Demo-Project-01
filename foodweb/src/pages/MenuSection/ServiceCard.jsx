import  { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Share/Context/Context';
import Swal from 'sweetalert2';
import useCart from '../useCart/UseCart';

const ServiceCard = ({service}) => {
    const {name, image, price, recipe, category} = service
    // console.log(service);
    const [, refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()
    const {user} = useContext(AuthProvider)

    const addToCart = service => {

        if(user && user.email){
            const itemsAddToCart = {name, image, category, price, email: user.email}
            console.log(itemsAddToCart);
            
            fetch('http://localhost:8000/carts',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json',
                },
                body: JSON.stringify(itemsAddToCart)
            })
            .then(res => res.json())
            .then( data => {
                refetch()
                if( data.insertedId){
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
        else{
            Swal.fire({
                title: 'Please log in for ordering an item',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ok!'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login' , {state :{from: location}})
                }
              })
        }
    }
    return (
        <div className='flex'>
            <img className='w-[118px] h-[104px]' style={{borderRadius: '0px 200px 200px 200px'}} src={image} alt="" />
            <div className='ps-6'>
                <h3 className='text-2xl cinzel'>{name} -------------</h3>
                <p className='inter text-xl py-3'>{recipe}</p>
                <button onClick={()=> addToCart(service)} className='cursor-pointer uppercase rounded-lg bg-white p-4 border-b-4 border-red-500  text-black font-semibold'>add to cart </button>
            </div>
            <p className='text-2xl text-[#bb8506]'>${price}</p>
            
        </div>
    );
};

export default ServiceCard;