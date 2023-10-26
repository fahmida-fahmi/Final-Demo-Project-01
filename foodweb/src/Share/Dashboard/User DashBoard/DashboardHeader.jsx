import AdminDashboard from '../Share/AdminDashboard/AdminDashboard';
import { Outlet } from 'react-router-dom';

const DashboardHeader = () => {
    return (
        <div>
            <AdminDashboard></AdminDashboard>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardHeader;