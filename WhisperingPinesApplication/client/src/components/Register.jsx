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
        apartmentNumber: '',
        locality: '',
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
            const res = await fetch('/api/account/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(loginForm),
            });

            if (res.ok) {
                console.log('Login Success');
                const data = await res.json();
                const token = data.accessToken;
                console.log("Setting token");
                localStorage.setItem('token', token); // store the access token in local storage for dev. Update to HttpOnly cookie
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
            const res = await fetch('/api/account/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',},
                body: JSON.stringify(registerForm),
            });

            console.log('Called register api');

            if (res.ok) {
                console.log('Registration success');
                const data = await res.json();
                localStorage.setItem('token', data.accessToken);
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
                    <label htmlFor="apartmentNumber">Apartment Number:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="apartmentNumber"
                        name="apartmentNumber"
                        value={registerForm.apartmentNumber}
                        onChange={handleRegisterChange}
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="locality">City:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="locality"
                        name="locality"
                        value={registerForm.locality}
                        onChange={handleRegisterChange}
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="state">State:</label>
                    <select className={RegisterCSS.account_input} id="state" name="state" type="text" value={registerForm.state} onChange={handleRegisterChange} required>
                        <option disabled value="DEFAULT">Select</option>
                        <option value="AL">AL</option>
                        <option value="AK">AK</option>
                        <option value="AZ">AR</option>
                        <option value="AR">AL</option>
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="CT">CT</option>
                        <option value="DC">DC</option>
                        <option value="DE">DE</option>
                        <option value="FL">FL</option>
                        <option value="GA">GA</option>
                        <option value="HI">HI</option>
                        <option value="ID">ID</option>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="IA">IA</option>
                        <option value="KS">KS</option>
                        <option value="KY">KY</option>
                        <option value="LA">LA</option>
                        <option value="ME">ME</option>
                        <option value="MD">MD</option>
                        <option value="MA">MA</option>
                        <option value="MI">MI</option>
                        <option value="MN">MN</option>
                        <option value="MS">MS</option>
                        <option value="MO">MO</option>
                        <option value="MT">MT</option>
                        <option value="NE">NE</option>
                        <option value="NV">NV</option>
                        <option value="NH">NH</option>
                        <option value="NJ">NJ</option>
                        <option value="NM">NM</option>
                        <option value="NY">NY</option>
                        <option value="NC">NC</option>
                        <option value="ND">ND</option>
                        <option value="OH">OH</option>
                        <option value="OR">OR</option>
                        <option value="PA">PA</option>
                        <option value="RI">RI</option>
                        <option value="SC">SC</option>
                        <option value="SD">SD</option>
                        <option value="TN">TN</option>
                        <option value="TX">TX</option>
                        <option value="UT">UT</option>
                        <option value="VT">VT</option>
                        <option value="VA">VA</option>
                        <option value="WA">WA</option>
                        <option value="UT">UT</option>
                        <option value="WI">WI</option>
                        <option value="WY">WY</option>
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