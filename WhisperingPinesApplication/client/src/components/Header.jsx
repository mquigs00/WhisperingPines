import {useNavigate} from 'react-router-dom';
import HeaderCSS from './Header.module.css';
import NavigationBar from './NavigationBar';

const Header = () => {
    const navigate = useNavigate();
    const navItems = {
        "Account": "/account/my-account",
        "Search Catalog": "/catalog",
        "Contact": "/contact-us",
        "Admin": "/admin"
    }

    return (
        <header>
            <section className ={HeaderCSS.top_contact_bar}>
                <p className={HeaderCSS.top_contact_bar_text}>125 Evergree Lane Havernbrook, CT 12345 Tel: 123-456-7890</p>
            </section>
            <section className={HeaderCSS.header_login_section}>
                <a href="/">
                    <img className={HeaderCSS.logo} src="https://whispering-pines-images.s3.amazonaws.com/WP_Logo.png" alt="Whispering Pines Logo" />
                </a>
                <div className={HeaderCSS.header_login_bars}>
                    <form action="/login" method="POST">
                        <label className={HeaderCSS.header_login_label} htmlFor="email_address">Email Address:</label>
                        <input id="email_address" type="text" name="email_address" required maxLength="15"/>

                        <label className={HeaderCSS.header_login_label} htmlFor="password">Password:</label>
                        <input id="password" type="text" name="password" required maxLength="15"/>

                        <button type="submit" onClick = {() => navigate('/account/my-account')}>
                            Log In
                        </button>
                    </form>
                    <button onClick={() => navigate('/account/register')}>
                        Register
                    </button>
                </div>
            </section>
            <section>
                <NavigationBar navItems={navItems} />
            </section>
        </header>
    )
}

export default Header;