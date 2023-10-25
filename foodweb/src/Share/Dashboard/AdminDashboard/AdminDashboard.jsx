import { BiSolidHome, BiRestaurant } from "react-icons/bi";
import { BsPower } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useUsers from "../../../pages/useUsers/useUsers";
import useAuth from "../../../pages/useAuth/useAuth";
import Swal from "sweetalert2";
import useCart from "../../../pages/useCart/UseCart";

const AdminDashboard = () => {
    const [cart] = useCart()
    const [users] = useUsers()
    const {user, logOut} = useAuth()

    const adminUser = users.find( adminUser => user.email === adminUser.email )
    console.log(adminUser.role);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You want to exit?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Logged Out!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className=' '>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* Page content here */}
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054] text-[#151515] ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <div className="px-8 pt-8">
                        <h1 className="text-3xl">Bistro Boss</h1>
                        <h1 className="text-2xl tracking-widest">Restaurant</h1>
                    </div>
                    <ul className="menu p-4 w-80  text-[#151515] uppercase ">
                        <div className="border-b border-white mb-12 pb-12">
                            {
                                adminUser === 'admin' ?
                                    <>
                                        <li className='text-lg'><NavLink to='/dashboard/' className="hover:text-white"><BiSolidHome></BiSolidHome>Admin  Home</NavLink></li>
                                        <li className='text-lg'><NavLink to='/dashboard/addItem' className="hover:text-white"><BiRestaurant></BiRestaurant> Add item</NavLink></li>
                                        <li className='text-lg'><NavLink to='/dashboard/manageItem' className="hover:text-white"><TfiMenuAlt></TfiMenuAlt> manage items</NavLink></li>
                                        <li className='text-lg'><NavLink to='/dashboard/manageBookings' className="hover:text-white"><FaBook></FaBook> manage bookings</NavLink>

                                        </li>
                                        <li className='text-lg'><NavLink to='/dashboard/allUsers' className="hover:text-white"><FaUsers></FaUsers> all users</NavLink></li>
                                    </>
                                    :
                                    <>
                                        <li className='text-lg'><NavLink to='/dashboard/' className="hover:text-white"><BiSolidHome></BiSolidHome>user  Home</NavLink></li>
                                        <li className='text-lg'><NavLink to='/dashboard/reservation' className="hover:text-white"><BiRestaurant></BiRestaurant> reservation</NavLink></li>
                                        <li className='text-lg'><NavLink to='/dashboard/paymentHistory' className="hover:text-white"><TfiMenuAlt></TfiMenuAlt> payment history</NavLink></li>
                                        <li className='text-lg'><NavLink to='/dashboard/myCart' className="hover:text-white"><FaBook></FaBook> my cart <span>{cart.length}</span></NavLink>

                                        </li>
                                        <li className='text-lg'><NavLink to='/dashboard/addReviews' className="hover:text-white"><FaUsers></FaUsers> add reviews</NavLink></li>
                                        <li className='text-lg'><NavLink to='/dashboard/myBookings' className="hover:text-white"><FaUsers></FaUsers> my booking</NavLink></li>
                                    </>
                            }
                            {/* Sidebar content here */}


                        </div>
                        <div className="border-b border-white mb-12 pb-12">

                            {/* Sidebar content here */}
                            <li className='text-lg'><NavLink to='/' className="hover:text-white"><BiSolidHome></BiSolidHome> Home</NavLink></li>
                            <li className='text-lg'><NavLink to='/ourMenu' className="hover:text-white"><BiRestaurant></BiRestaurant> Our Menu</NavLink></li>
                            <li className='text-lg'><NavLink to='/contactUs' className="hover:text-white"><TfiMenuAlt></TfiMenuAlt> contact</NavLink></li>
                            
                            {
                        user
                            ?
                            // <button className='text-lg mx-5 font-bold uppercase flex' onClick={handleSignOut}><BsPower></BsPower>sign out</button>
                            <li className='text-lg' onClick={handleSignOut}><NavLink to='/contactUs' className="hover:text-white"><BsPower></BsPower> sign out</NavLink></li>
                            :
                            <button className='text-lg mx-5 font-bold uppercase'>
                                <NavLink to='/login'><BsPower></BsPower>log in </NavLink>
                            </button>

                    }
                        </div>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;