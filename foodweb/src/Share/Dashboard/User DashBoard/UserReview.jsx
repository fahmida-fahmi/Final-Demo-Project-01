import  { useContext, useState } from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { GrSend } from 'react-icons/gr';
import { Rating } from '@smastrom/react-rating';
import { AuthProvider } from '../../Context/Context';
import Swal from 'sweetalert2';

const UserReview = () => {
    const [rating, setRating] = useState(0)

    const { user } = useContext(AuthProvider)
    console.log(user.email);
    const addReview = (e) => {
        e.preventDefault()
        const name = user.email
        const form = e.target
        const favRecipe = form.favRecipe.value
        const suggestion = form.suggestion.value
        const details = form.details.value
        const review = { favRecipe, suggestion, details, rating, name }
        console.log(review);

        fetch('http://localhost:8000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                    let timerInterval
                    Swal.fire({
                        title: 'Thanks For your Review',
                        // html: 'I will close in <b></b> milliseconds.',
                        timer: 2000,
                        timerProgressBar: true,
                        // didOpen: () => {
                        //     Swal.showLoading()
                        //     const b = Swal.getHtmlContainer().querySelector('b')
                        //     timerInterval = setInterval(() => {
                        //         b.textContent = Swal.getTimerLeft()
                        //     }, 100)
                        // },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                    })
            })
    }
    return (
        <div className=''>
            <SectionTitle
                header={'sharing is caring'}
                subtitle={'give a review...'}
            ></SectionTitle>

            <div className='w-2/3 mx-auto bg-[#F3F3F3] py-14 px-52 '>
                <div className=''>
                    <h1 className='text-5xl uppercase cinzel text-center mb-5'>rate us!</h1>
                    <Rating

                        style={{ maxWidth: 180, margin: '20px auto', }}
                        value={rating}
                        onChange={setRating}
                        isRequired
                    />

                </div>
                <form className='mt-14' onSubmit={addReview}>
                    <label htmlFor="">Which recipe you liked most?</label>
                    <input type="text" placeholder='Recipe you liked most' name='favRecipe' />
                    <label htmlFor="">Do you have any suggestion for us?</label>
                    <input type="text" placeholder='Suggestion' name='suggestion' />
                    <label htmlFor="">Kindly express your care in a short way.</label>
                    <textarea name="details" id="" cols="30" rows="10" placeholder='Review in detail'></textarea>
                    <button className='flex items-center py-3 px-5 text-white font-bold text-xl ' style={{ background: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)' }}>
                        <p className='pe-3 '>Send Message</p>
                        <GrSend className='text-white'></GrSend>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserReview;