import HeaderCSS from './Header.module.css';
import NavigationBar from './NavigationBar';

const Header = () => {
    return (
        <header>
            <section className ={HeaderCSS.top_contact_bar}>
                <p className={HeaderCSS.top_contact_bar_text}>125 Evergree Lane Havernbrook, CT 12345 Tel: 123-456-7890</p>
            </section>
            <section className={HeaderCSS.header_login_section}>
                <a href="">
                    <img className={HeaderCSS.logo} src="https://whispering-pines-images.s3.amazonaws.com/WP_Logo.png" alt="Whispering Pines Logo" />
                </a>
                <div className={HeaderCSS.header_login_bars}>
                    <form>
                        <label className={HeaderCSS.header_login_label} htmlFor="username">Username:</label>
                        <input id="username" type="text" required maxLength="15"/>

                        <label className={HeaderCSS.header_login_label} htmlFor="password">Password:</label>
                        <input id="password" type="text" required maxLength="15"/>

                        <button type="submit">Log In</button>
                        <button>Register</button>
                    </form>
                </div>
            </section>
            <section>
                <NavigationBar></NavigationBar>
            </section>
        </header>
    )
}

export default Header;