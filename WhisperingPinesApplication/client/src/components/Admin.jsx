import AdminCSS from './Admin.module.css';

const Admin = () => {
    return (
        <div className={AdminCSS.admin_page}>
            <h1 className={AdminCSS.title}>Admin Settings</h1>
            <div className={AdminCSS.admin_nav_bar}>
                {/*
                    Navigation bar that lets admin
                    1. Generate reports (overdue books, view all users, view catalog),
                    2. Load more books into the database
                    3. Search and manage users (delete users)
                
                */}
            </div>
        </div>
    )
}

export default Admin;