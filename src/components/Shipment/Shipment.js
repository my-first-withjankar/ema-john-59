import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    // const navigate = useNavigate()
    const handleName = event => {
        setName(event.target.value)
    }
    const handlePhoneNumber = event => {
        setPassword(event.target.value)
    }
    const handleAddress = event => {
        setConfirmPassword(event.target.value)
    }
    const createUser = event => {
        event.preventDefault()

    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipping Information </h1>
                <form onSubmit={createUser}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleName} type="text" name="name" id="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} type="email" readOnly name="email" id="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PhoneNumber">Phone Number</label>
                        <input onBlur={handlePhoneNumber} type="text" name="PhoneNumber" id="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddress} type="text" name="address" id="" required />
                    </div>
                    <p>{error}</p>
                    <input className='login-btn' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;