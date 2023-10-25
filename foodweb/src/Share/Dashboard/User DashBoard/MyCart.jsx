import React from 'react';
import SectionTitle from '../Share/SectionTitle/SectionTitle';
import useCart from '../pages/useCart/useCart';
import { key } from 'localforage';
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useBookings from '../pages/useBookings/useBookings';
import useAuth from '../pages/useAuth/useAuth';

const MyCart = () => {
    const [cart,refetch] = useCart()
    const items = cart.reduce((acc, item) => acc + item.price , 0)
    console.log(items);

    const deleteBtn = (item) =>{
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
                fetch(`http://localhost:8000/carts/${item._id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount> 0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
            }
          })
    }
    return (
        <div>
            <SectionTitle
                header={'wanna add more?'}
                subtitle={'my cart'}
            ></SectionTitle>
            <div className='w-2/3 mx-auto bg-white py-16 px-8 text-black font-bold'>
                <div className='cinzel uppercase text-2xl grid grid-cols-3 mb-10'>
                    <h1>total orders: {cart.length}</h1>
                    <h1>total price: $ {items}</h1>
                    <Link to='/dashboard/payment' className='btn btn-success'>pay</Link>
                </div>
                <div className="overflow-x-auto rounded-t-lg">
                    <table className="table">
                        {/* head */}
                        <thead className='border-b-0 uppercase'>
                            <tr className='text-xl text-white bg-[#D1A054]'>
                                <th >#</th>
                                <th className='font-normal'>Item Image</th>
                                <th className='font-normal'>Item name</th>
                                <th className='font-normal'>price</th>
                                <th className='font-normal'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                cart.map((row, index) => <tr
                                    key={row._id}
                                    >
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img className='' src={row.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{row.name}</td>
                                    <td>${row.price}</td>
                                    <td>
                                        <button onClick={()=>deleteBtn(row)} className="bg-red-500 p-4 rounded-md"><RiDeleteBin6Fill className='text-xl text-white'></RiDeleteBin6Fill></button>
                                    </td>
                                </tr>
                                )
                            }


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;