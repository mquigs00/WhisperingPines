import AccountCSS from "./Account.module.css";

const Account = () => {
    const user = {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        account_number: "1234-5678-9102",
        phone_number: "123-456-7890",
        email: "myemail@email.com",
        balance_due: 30.25,
        language: "English"
    }

    return (
        <div className={AccountCSS.account_grid}>
            <section className={AccountCSS.welcome}>
                <h1 className={AccountCSS.greeting}>Hello, {user.first_name}</h1>
                <div className={AccountCSS.details_box}>
                    <p className={AccountCSS.account_detail}>Account Number: {user.account_number}</p>
                    <p className={AccountCSS.account_detail}>Phone Number: {user.phone_number}</p>
                    <p className={AccountCSS.account_detail}>Email Address: {user.email}</p>
                    <p className={AccountCSS.account_detail}>Balance Due: {user.balance_due}</p>
                    <p className={AccountCSS.account_detail}>Preferred Language: {user.language}</p>
                    <button className={AccountCSS.edit_account_btn}>Edit</button>
                </div>
            </section>
            <section className={AccountCSS.checkout_history}>
                <h2>Checkout History</h2>
                <table>
                    <thead>
                        <tr>
                            <th className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}>Checkout Date</th>
                            <th className={`${AccountCSS.history_cell} ${AccountCSS.history_title}`}>Title</th>
                            <th className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}>Due Date</th>
                            <th className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}>Status</th>
                            <th className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}>Fine</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_title}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                        </tr>
                        <tr>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_title}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                        </tr>
                        <tr>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_title}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                        </tr>
                        <tr>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_title}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                        </tr>
                        <tr>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_title}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                        </tr>
                        <tr>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_title}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                        </tr>
                        <tr>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_title}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                        </tr>
                        <tr>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_title}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                        </tr>
                        <tr>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_title}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                        </tr>
                        <tr>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_title}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                        </tr>
                        <tr>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_title}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                            <td className={`${AccountCSS.history_cell} ${AccountCSS.history_small}`}></td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className={AccountCSS.recommended}>
                <h2>Recommended For You</h2>
                {/* 
                    Currently I am just putting a single random book cover to finish the MVP of the front end. Will build out carousel component in the future.
                */}
                <img src="https://whispering-pines-images.s3.us-east-2.amazonaws.com/book-covers/Baseball_A_Literary_Anthology.jpg" alt="Baseball: A Literary Anthology Cover" />
            </section>
        </div>
    )
}

export default Account;