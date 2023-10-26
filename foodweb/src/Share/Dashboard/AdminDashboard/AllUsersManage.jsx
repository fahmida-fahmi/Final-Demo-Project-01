import Swal from 'sweetalert2';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FaUserShield } from 'react-icons/fa6';
import useUsers from '../../../pages/Hooks/useUsers/useUsers';
import SectionTitle from '../../SectionTitle/SectionTitle';

const AllUsersManage = () => {
    const [users, refetch] = useUsers()


    const deleteBtn = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:8000/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
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
    const handleMakeAdmin = (user) =>{
        fetch(`http://localhost:8000/users/admin/${user._id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ role: 'admin' })
            // 
        })
        .then(res => res.json())
        .then(data =>{
            // user.role = 'admin'
            console.log(data);
            if(data.modifiedCount) {
                refetch()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title:`${user.name} is admin now`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
        // console.log(user.role);

    }
    return (
        <div>
            <SectionTitle
                header={'manage all users'}
                subtitle={'how many??'}
            ></SectionTitle>
            <div className='w-2/3 mx-auto bg-white py-16 px-8 text-black font-bold'>
                <div className='cinzel uppercase text-2xl grid grid-cols-3 mb-10'>
                    <h1>total users: {users.length}</h1>
                </div>
                <div className="overflow-x-auto rounded-t-lg">
                    <table className="table">
                        {/* head */}
                        <thead className='border-b-0 uppercase'>
                            <tr className='text-xl text-white bg-[#D1A054] text-center'>
                                <th >#</th>
                                <th className='font-normal'>name</th>
                                <th className='font-normal'>email</th>
                                {/* <th className='font-normal'>Action</th> */}
                                <th className='font-normal'>role</th>
                                {/* <th className='font-normal'>role</th> */}
                                <th className='font-normal'>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                users.map((user, index) => <tr
                                    key={user._id}
                                    className='text-center'
                                >
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    {/* <td> */}
                                    {/* <button onClick={() => handleMakeAdmin(user)} className='btn btn-ghost bg-teal-600'>
                                    make admin</button>
                                    </td> */}
                                    <td>
                                        {
                                            user.role === 'admin'
                                            ?
                                            'admin'
                                            :
                                            
                                            <button onClick={() => handleMakeAdmin(user)} className='btn btn-ghost bg-red-600'>
                                                   
                                                    <FaUserShield></FaUserShield>
                                            </button>
                                            
                                        }
                                    </td>

                                    <td>
                                        <button onClick={() => deleteBtn(user)} className="bg-red-500 p-4 rounded-md"><RiDeleteBin6Fill className='text-xl text-white'></RiDeleteBin6Fill></button>
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

export default AllUsersManage;