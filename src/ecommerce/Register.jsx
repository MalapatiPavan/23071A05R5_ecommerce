import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
        dob: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        alert('Registration submitted!');
        navigate('/loginn'); // Redirects to login page after registration
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto' }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                FirstName: <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                /><br /><br />
                Last name: <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                /><br /><br />
                email: <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                /><br /><br />
                Password: <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                /><br /><br />
                confirm Password:<input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                /><br /><br />
                Contact: <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                /><br /><br />
                Address: <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={form.address}
                    onChange={handleChange}
                    required
                /><br /><br />
                DOB: <input
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                    value={form.dob}
                    onChange={handleChange}
                    required
                /><br /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;