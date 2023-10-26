import  { useContext } from 'react';
import { GrSend } from 'react-icons/gr';
import Swal from 'sweetalert2';
import useAuth from '../../../pages/Hooks/useAuth/useAuth';
import useServices from '../../../pages/Hooks/useServices/useServices';
import SectionTitle from '../../SectionTitle/SectionTitle';
import ContactCardMap from '../../../pages/Contact/ContactCardMap';

const UserReservation = () => {
    const { user } = useAuth()
    const [services] = useServices()
    console.log(services);
    const handleBooking = e => {
        e.preventDefault()

        const form = e.target

        const date = form.date.value
        const time = form.time.value
        const guest = form.guest.value
        const name = form.name.value
        const phone = form.phone.value
        const email = form.email.value
        const itemName = form.itemName.value

        const item = services.find(item => item.name === itemName)
        const { image, price } = item
        console.log(image,price);
        // console.log(item);

        const reservation = { date, time, guest, name, phone, email, itemName,  image, price}
        console.log(reservation);

        fetch('http://localhost:8000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reservation)
        })
            .then(res => res.json())
            .then(data => {
                // if(data.insertedId  > 0 ){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your Booking has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                // }
            })

    }
    return (
        <div className='px-10 bg-white'>
            <SectionTitle
                header={'reservation'}
                subtitle={'book a table'}
            ></SectionTitle>

            <form className='w-2/3 mx-auto ' onSubmit={handleBooking}>
                <div >
                    <label htmlFor="">Item Name*</label>
                    <input type="text" className='border' name='itemName' required />
                </div>
                <div className='grid grid-cols-3 gap-10'>
                    <div >
                        <label htmlFor="">Date*</label>
                        <input type="date" className='border' name='date' required />
                    </div>
                    <div >
                        <label htmlFor="">Time*</label>
                        <input type="time" placeholder='' name='time' required />
                    </div>
                    <div >
                        <label htmlFor="">Guest*</label>
                        <input type="text" placeholder='' name='guest' required />
                    </div>
                    <div >
                        <label htmlFor="">Name*</label>
                        <input type="text" placeholder='Your Name' name='name' defaultValue={user?.name} required />
                    </div>
                    <div >
                        <label htmlFor="">Phone*</label>
                        <input type="text" placeholder='Phone Number' name='phone' required />
                    </div>
                    <div >
                        <label htmlFor="">Email*</label>
                        <input type="text" placeholder='Email' name='email' defaultValue={user?.email} required />
                    </div>
                </div>
                <div className='text-center flex justify-center' >
                    <button className='flex items-center py-3 px-5 text-white font-bold text-xl ' style={{ background: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)' }}>
                        <p className='pe-3 capitalize'>Book a table</p>
                        <GrSend></GrSend>
                    </button>
                </div>
            </form>
            <ContactCardMap></ContactCardMap>
        </div>
    );
};

export default UserReservation;