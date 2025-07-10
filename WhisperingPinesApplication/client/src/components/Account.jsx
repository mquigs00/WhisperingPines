import AccountCSS from "./Account.module.css";

const Account = () => {
    const user = {
        id: 1,
        first_name: "John",
        last_name: "Doe"
    }

    return (
        <div className={AccountCSS.account_grid}>
            <section className={AccountCSS.welcome}>
                <h1>Hello, {user.first_name}</h1>
            </section>
            <section className={AccountCSS.checkout_history}>
                <h2>Checkout History</h2>
                <table>
                    <thead>
                        <tr>
                            <th className={AccountCSS.table_cell}>Checkout Date</th>
                            <th className={AccountCSS.table_cell}>Title</th>
                            <th className={AccountCSS.table_cell}>Due Date</th>
                            <th className={AccountCSS.table_cell}>Status</th>
                            <th className={AccountCSS.table_cell}>Fine</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                        </tr>
                        <tr>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                        </tr>
                        <tr>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                        </tr>
                        <tr>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                        </tr>
                        <tr>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                        </tr>
                        <tr>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                        </tr>
                        <tr>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                        </tr>
                        <tr>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                        </tr>
                        <tr>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                            <td className={AccountCSS.table_cell}></td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Recommended For You</h2>
            </section>
        </div>
    )
}

export default Account;