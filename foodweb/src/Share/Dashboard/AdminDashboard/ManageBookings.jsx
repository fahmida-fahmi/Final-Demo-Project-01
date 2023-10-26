import Swal from 'sweetalert2';
import { LuFileWarning } from "react-icons/lu";
import SectionTitle from '../../SectionTitle/SectionTitle';
import useBookings from '../../../pages/Hooks/useBookings/useBookings';

const ManageBookings = () => {
    const [bookings, setBookings] = useBookings()
    // const [isPending, setIsPending] = useState(true)
    // const bookings = cart.reduce((acc, booking) => acc + booking.price, 0)
    // console.log(bookings);

    // let isPending = true

    
    const handleBooking = (bookingId) => {
        //  isPending = false
        const updatedBookings = bookings.map((booking) => {
            if (booking._id === bookingId) {
                return { ...booking, isPending: false };
            }
            return booking;
        });

        setBookings(updatedBookings);

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, approved it!'
        }).then((result) => {
            // let isPending = false
            if (result.isConfirmed) {
                // setIsPending(false)
                Swal.fire(
                    'Done!',
                    'success'
                )

            }
        })
        // console.log(isPending);
    }
    return (
        <div>
            <SectionTitle
                header={'wanna add more?'}
                subtitle={'my cart'}
            ></SectionTitle>
            <div className='w-2/3 mx-auto bg-white py-16 px-8 text-black font-bold'>
                <div className='cinzel uppercase text-2xl grid grid-cols-3 mb-10'>
                    <h1>total orders: {bookings.length}</h1>
                </div>
                <div className="overflow-x-auto rounded-t-lg">
                    <table className="table">
                        {/* head */}
                        <thead className='border-b-0 uppercase'>
                            <tr className='text-xl text-white bg-[#D1A054] text-center'>
                                <th className='font-normal'>user email</th>
                                <th className='font-normal'>phone number</th>
                                <th className='font-normal'>booking date</th>
                                <th className='font-normal'>booking time</th>
                                <th className='font-normal'>Action</th>
                                <th className='font-normal'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((booking) => <tr
                                    key={booking._id}
                                    className='text-center'
                                >
                                    <td>{booking.email}</td>
                                    <td>{booking.phone}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.time}</td>
                                    <td>
                                        <button onClick={()=>handleBooking(booking._id)} className="bg-red-500 p-4 rounded-md">
                                            <LuFileWarning />
                                        </button>
                                    </td>
                                    <td>
                                        {


                                            booking.isPending ?
                                                'pending'
                                                :
                                                'done'
                                        }
                                    </td>
                                    {/* {
                                        isPending ?
                                            <>
                                                <td>pending</td>
                                                <td>


                                                </td>
                                            </>
                                            :
                                            <>
                                                <td>done</td>
                                                <td>
                                                    <button className="bg-red-500 p-4 rounded-md">
                                                        <MdDone />
                                                    </button>

                                                </td>
                                            </>
                                    } */}


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

export default ManageBookings;