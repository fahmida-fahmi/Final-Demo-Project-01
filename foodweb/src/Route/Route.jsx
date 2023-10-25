import { createBrowserRouter } from "react-router-dom";
import NavBar from "../Share/NavBar/NavBar";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import OurShop from "../pages/OurShop/OurShop";
import UserDashboard from "../User DashBoard/UserDashboard";
import UserHome from "../User DashBoard/UserHome";
import PaymentHistory from "../User DashBoard/paymentHistory";
import MyCart from "../User DashBoard/MyCart";
import UserReview from "../User DashBoard/UserReview";
import UserReservation from "../User DashBoard/UserReservation";
import UserReservationPayment from "../User DashBoard/payment/UserReservationPayment";
import UserAllBookings from "../User DashBoard/UserAllBookings";
import AdminDashboard from "../Share/AdminDashboard/AdminDashboard";
import AdminAddItemPage from "../Share/AdminDashboard/AdminAddItemPage";
import ManageItem from "../Share/AdminDashboard/ManageItem";
import UpdateItem from "../Share/AdminDashboard/UpdateItem";
import AllUsersManage from "../Share/AdminDashboard/AllUsersManage";
import ManageBookings from "../Share/AdminDashboard/ManageBookings";
import DashboardHeader from "../User DashBoard/DashboardHeader";
import PrivateRoute from "./PrivateRoute";
import AdminPrivateRoute from "./AdminPRivateRoute";
import HomeDashboard from "../Share/Home Dashboard/HomeDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'ourMenu',
        element: <OurMenu />
      },
      {
        path: 'contactUs',
        element: <Contact />
      },
      {
        path: 'ourShop',
        element: <OurShop />,
        // loader: () => fetch('http://localhost:8000/services')
      },
    ]
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'register',
    element: <Register />
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><AdminDashboard /></PrivateRoute>,
    children: [
      {
        path: '',
        element: <HomeDashboard />,

      },
      // {
      //   path: 'userHome',
      //   element: <UserHome />
      // },
      {
        path: 'payment',
        element: <UserReservationPayment></UserReservationPayment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory />
      },
      {
        path: 'myCart',
        element: <MyCart />
      },
      {
        path: 'addReviews',
        element: <UserReview></UserReview>
      },
      {
        path: 'reservation',
        element: <UserReservation></UserReservation>,

      },
      // {
      //   path: 'reservationPayment',
      //   element: <UserReservationPayment></UserReservationPayment>
      // },
      {
        path: 'myBookings',
        element: <UserAllBookings></UserAllBookings>
      },
      {
        path:'',
        element: <AdminPrivateRoute><HomeDashboard/></AdminPrivateRoute>
        // element: <AdminAddItemPage/>
      },
      {
        path:'addItem',
        element: <AdminPrivateRoute><AdminAddItemPage/></AdminPrivateRoute>
        // element: <AdminAddItemPage/>
      },
      {
        path:'manageItem',
        element: <AdminPrivateRoute><ManageItem/></AdminPrivateRoute>
      },
      {
        path:'updateItem/:id',
        element:<AdminPrivateRoute><UpdateItem/></AdminPrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:8000/services/${params.id}`)
      },
      {
        path:'manageBookings',
        element:<AdminPrivateRoute><ManageBookings/></AdminPrivateRoute>,

      },
      {
        path:'allUsers',
        element:<AdminPrivateRoute><AllUsersManage/></AdminPrivateRoute>
        // element: <AllUsersManage></AllUsersManage>
      },

    ]
  },
  // {
  //   path: 'admin',
  //   element: <AdminDashboard/>,
  //   children:[
      
  //   ]
  // }
]);

export default router;
