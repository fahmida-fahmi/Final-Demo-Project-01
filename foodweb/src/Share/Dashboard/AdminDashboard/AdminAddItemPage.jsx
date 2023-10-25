import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { GrSend } from 'react-icons/gr';
import { BiRestaurant } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import useAxiosCart from '../../pages/useCart/useAxiosCart';
import Swal from 'sweetalert2';


const imageUploadToken = import.meta.env.VITE_image_upload_token
const AdminAddItemPage = () => {
    const [axiosSecure] = useAxiosCart()
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imageUploadToken} `

    // const onSubmit = data => {
    //     console.log(data);
    //     const formData = new FormData()
    //     formData.append('image', data.image[0])

    //     fetch(imageUploadURL, {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json)
    //         .then(imgResponse => {
    //             if(imgResponse.success);{
    //                 const imgURL = imgResponse.data.display_url 
    //                 const { name,price,category,recipe} = data
    //                 const newItem  =  { name,price: parseFloat(price),category,recipe, image: imgURL}

    //                 console.log(newItem);
    //                 axiosSecure.post('/services', newItem)
    //                 .then(data => {
    //                     console.log('after posting new menu item ', data.data);

    //                     if(data.data.insertedId){
    //                         reset()
    //                         Swal.fire({
    //                             position: 'top-end',
    //                             title: 'Item successfully added',
    //                             icon: 'success'
    //                         })
    //                     }
    //                 })
    //             }
    //         })
    // };
    // console.log(errors);

    // const handleAddItem = e => {
    //     e.preventDefault()

    //     const form = e.target
    //     const recipeName = form.recipeName.value
    //     const category = form.category.value
    //     const price = form.price.value
    //     const details = form.details.value
    //     const image = form.image.value

    //     const formData = new FormData()
    //     formData.append('image', data.image[0])

    //     fetch(imageUploadURL, {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json)
    //         .then(imgResponse => {
    //             console.log(imgResponse);
    //         })

    //     const service = { recipeName, category, price, details, image }

    //     console.log(service);

    //     fetch('http://localhost:8000/services', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(service)
    //     })
    // }

    const onSubmit = data => {

        const formData = new FormData();
        console.log(data.image);
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price, category, recipe, image: imgURL }
                    console.log(newItem)
                    axiosSecure.post('/services', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        }
                        )
                }
            })

    };
    return (
        <div className='bg-white'>
            <SectionTitle
                header={'add an item'}
                subtitle={`what's new?`}
            ></SectionTitle>

            {/* <form className='w-2/3 mx-auto bg-[#F3F3F3] p-10' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Recipe name*</label>
                <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                <div className='grid grid-cols-2 gap-10'>
                    <div>
                        <label htmlFor="">category*</label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Desi</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">price*</label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <label >recipe details*</label>
                <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                
                <input  type="submit" value='Add Item' className='btn w-1/3 mx-auto py-5 flex ' />
  
            </form>  */}
             <form className='w-2/3 mx-auto bg-[#F3F3F3] p-10' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form> 
        </div>

    );
};

export default AdminAddItemPage;