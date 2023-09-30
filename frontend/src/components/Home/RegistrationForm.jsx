import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm({ eventId }) {
    const [formData, setFormData] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Make a POST request to your backend to handle registration data submission
        axios.post(`http://localhost:8000/api/register/${eventId}/`, formData)
            .then((response) => {
                setSuccessMessage('Registration successful');
            })
            .catch((error) => {
                setErrorMessage('Registration failed. Please try again.');
            });
    };

    // Render the registration form fields based on the event ID
    const renderRegistrationFields = () => {
        if (eventId === 1) {
            // Event 1 registration fields (department, roll no, email)
            return (
                <>
                    <input type="text" name="department" placeholder="Department" onChange={handleInputChange} required />
                    <input type="text" name="roll_no" placeholder="Roll No" onChange={handleInputChange} required />
                    <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
                </>
            );
        } else if (eventId === 2) {
            // Event 2 registration fields (roll no, phone number)
            return (
                <>
                    <input type="text" name="roll_no" placeholder="Roll No" onChange={handleInputChange} required />
                    <input type="tel" name="phone_number" placeholder="Phone Number" onChange={handleInputChange} required />
                </>
            );
        }
        // Add more event-specific registration fields as needed
        return null;
    };

    return (
        <div>
            <h3>Register Here</h3>
            <form onSubmit={handleSubmit}>
                {renderRegistrationFields()}
                <button type="submit">Register</button>
            </form>
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}

export default RegistrationForm;
