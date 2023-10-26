import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from 'sweetalert2';
import useBookings from "../../../pages/Hooks/useBookings/useBookings";
import SectionTitle from "../../SectionTitle/SectionTitle";


const UserAllBookings = () => {
    const [bookings, refetch] = useBookings()
    console.log(bookings);
    
    // const myBookings =  bookings.filter(bookings => bookings.email === user.email)

    const totalAllBookingsPrice = bookings.reduce((acc, item) => acc + item.price*item.guest , 0)
    // const totalAllBookingsPrice =  10
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
              
                fetch(`http://localhost:8000/bookings/${item._id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount> 0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your booking has been deleted.',
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
                header={'my bookings'}
                subtitle={'excellent ambience'}
            ></SectionTitle>
            <div className='w-2/3 mx-auto bg-white py-16 px-8 text-black font-bold'>
                <div className='cinzel uppercase text-2xl grid grid-cols-3 mb-10'>
                    <h1>total orders: {bookings.length}</h1>
                    <h1>total price: $ {totalAllBookingsPrice}</h1>
                    {/* <Link to='/dashboard/payment' className='btn btn-success'>pay</Link> */}

                </div>
                <div className="overflow-x-auto rounded-t-lg">
                    <table className="table">
                        {/* head */}
                        <thead className='border-b-0 uppercase'>
                            <tr className='text-xl text-white bg-[#D1A054]'>
                                <th >#</th>
                                <th className='font-normal'>item image</th>
                                <th className='font-normal'>Guest</th>
                                <th className='font-normal'>category</th>
                                <th className='font-normal'>price</th>
                                <th className='font-normal'>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                bookings.map((row, index) => <tr
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
                                    <td>{row.guest}</td>
                                    <td>${row.price}</td>
                                    <td>${row.price* row.guest}</td>
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

export default UserAllBookings;