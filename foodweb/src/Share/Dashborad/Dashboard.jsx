import AdminDashboard from '../Share/AdminDashboard/AdminDashboard';
import UserDashboard from './UserDashboard';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <AdminDashboard></AdminDashboard>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;