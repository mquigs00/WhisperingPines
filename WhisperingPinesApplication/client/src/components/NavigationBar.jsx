import {useNavigate} from 'react-router-dom';
import NavigationBarCSS from './NavigationBar.module.css';

const NavigationBar = ({navItems}) => {
    const navigate = useNavigate();

    return (
        <ul className={NavigationBarCSS.flex_container}>
            {Object.entries(navItems).map(([title, route]) => (
                <li
                    key={title}
                    onClick = {() => navigate(route)}
                    className = {NavigationBarCSS.nav_title}
                >
                    {title}
                </li>
            ))}
        </ul>
    )
}

export default NavigationBar;