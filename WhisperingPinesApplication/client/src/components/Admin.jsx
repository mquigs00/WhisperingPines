import { Outlet } from 'react-router-dom';
import AdminCSS from './Admin.module.css';
import NavigationBar from './NavigationBar';

const Admin = () => {
    const navItems = {
        "Reports": "/admin/reports",
        "Data": "/admin/database",
        "Search Users": "/admin/search-users"
    }
    return (
        <div className={AdminCSS.admin_page}>
            <h1 className={AdminCSS.title}>Admin Settings</h1>
            <NavigationBar navItems={navItems} />
            <Outlet />
        </div>
    )
}

export default Admin;