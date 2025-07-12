import {useNavigate} from 'react-router-dom';
import NavigationBarCSS from './NavigationBar.module.css';

const NavigationBar = () => {
    const navigate = useNavigate();

    return (
        <ul className={NavigationBarCSS.flex_container}>
            <li className={NavigationBarCSS.nav_title} onClick = {() => navigate('/account')}>
                Account
            </li>
            <li className={NavigationBarCSS.nav_title} onClick = {() => navigate('/catalog')}>
                Search the Catalog
            </li>
            <li className={NavigationBarCSS.nav_title} onClick = {() => navigate('/contact-us')}>
                Contact
            </li>
        </ul>
    )
}

export default NavigationBar;