import AccountCSS from './Account.module.css';

const Account = () => {
    return (
        <div>
            <h1>Account</h1>
            <h2>Already a member?</h2>
            <form className={AccountCSS.formcontainer} action="">
                <div>
                    <label htmlFor="">Username:</label>
                    <input className={AccountCSS.account_input} type="text" />
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input className={AccountCSS.account_input} type="text" />
                </div>
                <button type='submit'>Login</button>
                <button type='reset'>Clear</button>
            </form>
            <h2>Register</h2>
            <form className={AccountCSS.formcontainer} action="">
                <div>
                    <label htmlFor="">First Name:</label>
                    <input className={AccountCSS.account_input} type="text" />
                </div>
                <div>
                    <label htmlFor="">Middle Name:</label>
                    <input className={AccountCSS.account_input} type="text" />
                </div>
                <div>
                    <label htmlFor="">Last Name:</label>
                    <input className={AccountCSS.account_input} type="text" />
                </div>
                <div>
                    <label htmlFor="">Date of Birth:</label>
                    <input className={AccountCSS.account_input} type="text" />
                </div>
                <div>
                    <label htmlFor="">Phone Number:</label>
                    <input className={AccountCSS.account_input} type="text" />
                </div>
                <div>
                    <label htmlFor="">Email Address:</label>
                    <input className={AccountCSS.account_input} type="text" />
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input className={AccountCSS.account_input} type="text" />
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input className={AccountCSS.account_input} type="text" />
                </div>
                <button type='submit'>Register</button>
                <button type='reset'>Clear</button>
            </form>
        </div>
    )
}

export default Account;