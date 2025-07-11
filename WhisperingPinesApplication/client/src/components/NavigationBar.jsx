import NavigationBarCSS from './NavigationBar.module.css';

const NavigationBar = () => {
    return (
        <ul className={NavigationBarCSS.flex_container}>
            <li><a className={NavigationBarCSS.nav_title} href="#">Account</a></li>
            <li><a className={NavigationBarCSS.nav_title} href="#">Search the Catalog</a></li>
            <li><a className={NavigationBarCSS.nav_title} href="#">Contact</a></li>
        </ul>
    )
}

export default NavigationBar;