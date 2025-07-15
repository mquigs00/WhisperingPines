import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import RegisterCSS from './Register.module.css';

const Register = () => {
    const [form, setForm] = useState({
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

    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    // every time a character is typed into a field, handleChange is called to update that field
    const handleChange = async(e) =>
        setForm({
            ...form,                                                                                // copy current form values
            [e.target.name]: e.target.value                                                    // update next field
        });
    
    const handleSubmit = async(e) => {
        e.preventDefault();                                                                         // prevent page reload
        setError('');

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',},
                body: JSON.stringify(form),
            });

            if (res.ok) {
                console.log('Registration success');
                navigate('/account/my-account');
            }
        } catch(err) {
            setError(err.message);
        }
    }

    return (
        <div>
            <h1>Register for an Account</h1>
            <h2>Already a member?</h2>
            <form className={RegisterCSS.formcontainer} action="/login" method="POST">
                <div>
                    <label htmlFor="email_address">Email Address:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="email_address"
                        name="email_address"
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
                        type="text"
                        required
                    />
                </div>
                <button type='submit'>Login</button>
                <button type='reset'>Clear</button>
            </form>
            <h2>Register</h2>
            <form className={RegisterCSS.formcontainer} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
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
                        value={form.middleName}
                        onChange={handleChange}
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
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
                        value={form.dateOfBirth}
                        onChange={handleChange}
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
                        value={form.phoneNumber}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="emailAddress">Email Address:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="emailAddress"
                        name="emailAddress"
                        value={form.emailAddress}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="streetAddress">Street Address:</label>
                    <input
                        className={RegisterCSS.account_input}
                        id="streetAddress"
                        name="streetAddress"
                        value={form.streetAddress}
                        onChange={handleChange}
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
                        value={form.city}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="state">State:</label>
                    <select className={RegisterCSS.account_input} id="state" name="state" type="text" value={form.state} onChange={handleChange} required>
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
                        value={form.zipcode}
                        onChange={handleChange}
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
                        value={form.password}
                        onChange={handleChange}
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