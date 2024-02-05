import { createBrowserRouter } from "react-router-dom";
import NavBar from "../Share/NavBar/NavBar";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import OurShop from "../pages/OurShop/OurShop";


import PrivateRoute from "./PrivateRoute";
import AdminPrivateRoute from "./AdminPRivateRoute";
import PaymentHistory from "../Share/Dashboard/User DashBoard/PaymentHistory";
import MyCart from "../Share/Dashboard/User DashBoard/MyCart";
import UserReview from "../Share/Dashboard/User DashBoard/UserReview";
import UserReservation from "../Share/Dashboard/User DashBoard/UserReservation";
import UserAllBookings from "../Share/Dashboard/User DashBoard/UserAllBookings";
import AdminAddItemPage from "../Share/Dashboard/AdminDashboard/AdminAddItemPage";
import UserReservationPayment from "../Share/Dashboard/User DashBoard/payment/UserReservationPayment";
import UpdateItem from "../Share/Dashboard/AdminDashboard/UpdateItem";
import ManageItem from "../Share/Dashboard/AdminDashboard/ManageItem";
import ManageBookings from "../Share/Dashboard/AdminDashboard/ManageBookings";
import AllUsersManage from "../Share/Dashboard/AdminDashboard/AllUsersManage";
import HomeDashboard from "../Share/Dashboard/Home Dashboard/HomeDashboard";
import AdminDashboard from "../Share/Dashboard/Home Dashboard/AdminDashboard";

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
        element: <UserReservationPayment></UserReservationPayment>,
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
  {
    path: 'donate',
    element: <PrivateRoute></PrivateRoute>
  }
  // {
  //   path: 'admin',
  //   element: <AdminDashboard/>,
  //   children:[
      
  //   ]
  // }
]);

export default router;
