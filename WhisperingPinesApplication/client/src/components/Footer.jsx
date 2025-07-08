import FooterCSS from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={FooterCSS.footer}>
            <div className={FooterCSS.row}>
                <div className={FooterCSS.footer_box}>
                    <h2>Whispering Pines Library</h2>
                    <div className={FooterCSS.footer_content}>
                        <p>125 Evergreen Lane Havenbrook, CT 12345</p>
                        <p>Tel: 123-456-7890</p>
                    </div>
                </div>
                <div className={FooterCSS.footer_box}>
                    <h2>Sign Up for our News Letter</h2>
                    <div className={FooterCSS.footer_content}>
                        <form>
                            <label htmlFor="email_address">Email Address:</label>
                            <input id="email_address" type="text" required maxLength="15"/>
                            <button type="submit"> Sign Up</button>
                        </form>
                    </div>
                </div>

                <div className={FooterCSS.footer_box}>
                    <h2>Hours</h2>
                    <div className={FooterCSS.footer_content}>
                        <ul className={FooterCSS.hours_list}>
                            <li>Monday: 9am-7pm</li>
                            <li>Tuesday: 9am-7pm</li>
                            <li>Wednesday: 9am-7pm</li>
                            <li>Thursday: 9am-7pm</li>
                            <li>Friday: 9am-7pm</li>
                            <li>Saturday: 9am-7pm</li>
                            <li>Sunday: 9am-7pm</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;