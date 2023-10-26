import Swal from 'sweetalert2';

import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import useAxiosCart from '../../../pages/Hooks/useCart/useAxiosCart';
import SectionTitle from '../../SectionTitle/SectionTitle';
import useServices from '../../../pages/Hooks/useServices/useServices';

const ManageItem = () => {
    const [services, refetch] = useServices()
    
    // const items = cart.reduce((acc, item) => acc + item.price, 0)
    // console.log(items);
    const [axiosSecure] = useAxiosCart()


    const deleteBtn = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                
                axiosSecure.delete(`services/${item._id}`)
                .then(res =>{
                    console.log('deleted res', res.data);
                    if(res.data.deletedCount >0 ){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })

                // fetch(`http://localhost:8000/services/${item._id}`, {
                //     method: 'DELETE'
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         // if (data.deletedCount > 0) {
                //             refetch()
                //             Swal.fire(
                //                 'Deleted!',
                //                 'Your file has been deleted.',
                //                 'success'
                //             )
                //         }
                //     // }
                //     )
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
                    <h1>total orders: {services.length}</h1>
                </div>
                <div className="overflow-x-auto rounded-t-lg">
                    <table className="table">
                        {/* head */}
                        <thead className='border-b-0 uppercase'>
                            <tr className='text-xl text-white bg-[#D1A054] text-center'>
                                <th >#</th>
                                <th className='font-normal'>Item Image</th>
                                <th className='font-normal'>Item name</th>
                                <th className='font-normal'>price</th>
                                <th className='font-normal'>action</th>
                                <th className='font-normal'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                services.map((item, index) => <tr
                                    key={item._id}
                                    className='text-center'
                                >
                                    <td>{index + 1}</td>
                                    {/* {console.log(item._id)} */}
                                    <td>
                                        <div className="flex items-center space-x-3 justify-center">
                                            <div className="avatar">
                                                <div className="mask  w-12 h-12 flex ">
                                                    <img className='' src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`} >
                                        <button  className="bg-red-500 p-4 rounded-md">
                                            <FaRegEdit className='text-xl text-white'></FaRegEdit>
                                        </button>
                                        </Link>
                                        
                                    </td>
                                    <td>
                                        <button onClick={() => deleteBtn(item)} className="bg-red-500 p-4 rounded-md"><RiDeleteBin6Fill className='text-xl text-white'></RiDeleteBin6Fill></button>
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


export default ManageItem;