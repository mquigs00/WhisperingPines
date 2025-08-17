import CheckOutCSS from './Checkout.module.css';

const CheckOut = ({onClose, book}) => {
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14);

    return (
        <div className={CheckOutCSS.checkout_overlay}>
            <div className={CheckOutCSS.checkout_box}>
                <h2>Checkout</h2>
                <p><strong className={CheckOutCSS.label}>Title:</strong> {book.title}</p>
                <p><strong className={CheckOutCSS.label}>Author:</strong> {book.fullName}</p>
                <p><strong className={CheckOutCSS.label}>Due Date:</strong> {dueDate.toDateString()}</p>
                <p><strong className={CheckOutCSS.label}>Late Fee:</strong> $1/wk</p>
                <h3>Rules</h3>
                <p className={CheckOutCSS.rules}>1. You cannot checkout more than two books at a time</p>
                <p className={CheckOutCSS.rules}>2. If your account hits $10 in late charges you will lose access to checking out books until balance is paid</p>

                <div className={CheckOutCSS.button_row}>
                    <button>Check Out</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;