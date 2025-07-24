import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import RegisterCSS from './Register.module.css';
import useUserStore from '../stores/useUserStore';



const Register = () => {
    const [registerForm, setRegisterForm] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dateOfBirth: '',
        phoneNumber: '',
        emailAddress: '',
        streetAddress: '',
        city: '',
        state: '',
        zipcode: '',
        password: ''
    });

    const [loginForm, setLoginForm] = useState({
        emailAddress: '',
        password: '',
    });

    const {setUser} = useUserStore();

    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    // every time a character is typed into a field, handleChange is called to update that field
    const handleRegisterChange = async(e) => {
        setRegisterForm({
            ...registerForm,                                                                                // copy current form values
            [e.target.name]: e.target.value                                                    // update next field
        });
    };
    
    const handleLoginChange = async(e) => {
        setLoginForm({
            ...loginForm, [e.target.name]: e.target.value
        });
    };

    const handleSubmitLogin = async(e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(loginForm),
            });

            if (res.ok) {
                console.log('Login Success');
                navigate('/account/my-account');
            }
        } catch(error) {
            setError(error.message);
        }
    }
    
    const handleSubmitRegister = async(e) => {
        e.preventDefault();                                                                         // prevent page reload
        console.log('handleSubmit triggered');
        setError('');

        try {
            console.log('calling register api');
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',},
                body: JSON.stringify(registerForm),
            });

            console.log('Called register api');

            if (res.ok) {
                console.log('Registration success');
                const data = await res.json();
                useUserStore.getState().setUser(data.user);
                navigate('/account/my-account');
            }
        } catch(err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Register for an Account</h1>
            <h2>Already a member?</h2>
            <form className={RegisterCSS.formcontainer} onSubmit={handleSubmitLogin}>
                <div>
                    <label htmlFor="emailAddress">Email Address:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="emailAddress"
                        name="emailAddress"
                        value={loginForm.emailAddress}
                        onChange={handleLoginChange}
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="password"
                        name="password"
                        value={loginForm.password}
                        onChange={handleLoginChange}
                        type="text"
                        required
                    />
                </div>
                <button type='submit'>Login</button>
                <button type='reset'>Clear</button>
            </form>
            <h2>Register</h2>
            <form className={RegisterCSS.formcontainer} onSubmit={handleSubmitRegister}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="firstName"
                        name="firstName"
                        value={registerForm.firstName}
                        onChange={handleRegisterChange}
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="middleName">Middle Name:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="middleName"
                        name="middleName"
                        value={registerForm.middleName}
                        onChange={handleRegisterChange}
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="lastName"
                        name="lastName"
                        value={registerForm.lastName}
                        onChange={handleRegisterChange}
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dateOfBirth">Date of Birth:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={registerForm.dateOfBirth}
                        onChange={handleRegisterChange}
                        type="date"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="phoneNumber"
                        name="phoneNumber"
                        value={registerForm.phoneNumber}
                        onChange={handleRegisterChange}
                        type="tel"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="emailAddress">Email Address:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="emailAddress"
                        name="emailAddress"
                        value={registerForm.emailAddress}
                        onChange={handleRegisterChange}
                        type="email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="streetAddress">Street Address:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="streetAddress"
                        name="streetAddress"
                        value={registerForm.streetAddress}
                        onChange={handleRegisterChange}
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="city"
                        name="city"
                        value={registerForm.city}
                        onChange={handleRegisterChange}
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="state">State:</label>
                    <select className={RegisterCSS.account_input} id="state" name="state" type="text" value={registerForm.state} onChange={handleRegisterChange} required>
                        <option disabled value="DEFAULT">Select</option>
                        <option value="alabama">AL</option>
                        <option value="alaska">AK</option>
                        <option value="arizona">AR</option>
                        <option value="alabama">AL</option>
                        <option value="california">CA</option>
                        <option value="colorado">CO</option>
                        <option value="connecticut">CT</option>
                        <option value="delaware">DE</option>
                        <option value="florida">FL</option>
                        <option value="georgia">GA</option>
                        <option value="hawaii">HI</option>
                        <option value="idaho">ID</option>
                        <option value="illinois">IL</option>
                        <option value="indiana">IN</option>
                        <option value="iowa">IA</option>
                        <option value="kansas">KS</option>
                        <option value="kentucky">KY</option>
                        <option value="louisiana">LA</option>
                        <option value="maine">ME</option>
                        <option value="maryland">MD</option>
                        <option value="massachusetts">MA</option>
                        <option value="michigan">MI</option>
                        <option value="minnesota">MN</option>
                        <option value="mississippi">MS</option>
                        <option value="missouri">MO</option>
                        <option value="montana">MT</option>
                        <option value="nebraska">NE</option>
                        <option value="nevada">NV</option>
                        <option value="new_hampshire">NH</option>
                        <option value="new_jersey">NJ</option>
                        <option value="new_mexico">NM</option>
                        <option value="new_york">NY</option>
                        <option value="north_carolina">NC</option>
                        <option value="north_dakota">ND</option>
                        <option value="ohio">OH</option>
                        <option value="oregon">OR</option>
                        <option value="pennsylvania">PA</option>
                        <option value="rhode_island">RI</option>
                        <option value="south_carolina">SC</option>
                        <option value="south_dakota">SD</option>
                        <option value="tennessee">TN</option>
                        <option value="texas">TX</option>
                        <option value="utah">UT</option>
                        <option value="vermont">VT</option>
                        <option value="virginia">VA</option>
                        <option value="washington">WA</option>
                        <option value="west_virginia">UT</option>
                        <option value="wisconsin">WI</option>
                        <option value="wyoming">WY</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="zipcode">Zipcode:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="zipcode"
                        name="zipcode"
                        value={registerForm.zipcode}
                        onChange={handleRegisterChange}
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="password"
                        name="password"
                        value={registerForm.password}
                        onChange={handleRegisterChange}
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="retypePassword">Re-Type Password:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="retypePassword"
                        name="retypePassword"
                        type="text"
                        required
                    />
                </div>
                <button type='submit'>Register</button>
                <button type='reset'>Clear</button>
            </form>
        </div>
    )
}

export default Register;