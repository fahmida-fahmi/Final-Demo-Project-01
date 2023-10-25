import { BiSolidHome, BiRestaurant } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../pages/useCart/useCart";
import UserHome from "./UserHome";
const UserDashboard = () => {
    const [cart] = useCart()
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

                            {/* Sidebar content here */}
                            <li className='text-lg'><NavLink to='/dashboard/userHome' className="hover:text-white"><BiSolidHome></BiSolidHome>user  Home</NavLink></li>
                            <li className='text-lg'><NavLink to='/dashboard/reservation' className="hover:text-white"><BiRestaurant></BiRestaurant> reservation</NavLink></li>
                            <li className='text-lg'><NavLink to='/paymentHistory' className="hover:text-white"><TfiMenuAlt></TfiMenuAlt> payment histroy</NavLink></li>
                            <li className='text-lg'><NavLink to='/dashboard/myCart' className="hover:text-white"><FaBook></FaBook> my cart <span>{cart.length}</span></NavLink>
                            
                            </li>
                            <li className='text-lg'><NavLink to='/dashboard/addReviews' className="hover:text-white"><FaUsers></FaUsers> add reviews</NavLink></li>
                            <li className='text-lg'><NavLink to='/dashboard/myBookings' className="hover:text-white"><FaUsers></FaUsers> my booking</NavLink></li>
                        </div>
                        <div className="border-bottom-2 border-white">

                            {/* Sidebar content here */}
                            <li className='text-lg'><NavLink to='/' className="hover:text-white"><BiSolidHome></BiSolidHome> Home</NavLink></li>
                            <li className='text-lg'><NavLink to='' className="hover:text-white"><BiRestaurant></BiRestaurant> Add items</NavLink></li>
                            <li className='text-lg'><NavLink to='' className="hover:text-white"><TfiMenuAlt></TfiMenuAlt> manage items</NavLink></li>
                            <li className='text-lg'><NavLink to='' className="hover:text-white"><FaBook></FaBook> manage bookings</NavLink></li>
                            <li className='text-lg'><NavLink to='' className="hover:text-white"><FaUsers></FaUsers> all users</NavLink></li>
                        </div>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default UserDashboard;