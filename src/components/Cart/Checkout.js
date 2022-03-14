import classes from "./Checkout.module.css";

const Checkout = (props) => {
    const confirmHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" />
            </div>
            <div className={classes.control}>
                <label htmlFor="pin">PIN Code</label>
                <input type="text" id="pin" />
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
