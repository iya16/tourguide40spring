import React, { useState } from 'react';
import './book.css';

const Booking = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        bookingType: '',
        numberOfGuests: '',
        arrivalDateTime: '',
        departureDate: '',
        specialRequests: '',
    });
    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
    };
  return (
        <div className="cont">
            <h1>Tuor Booking</h1>
            <p>Experience something new every moment</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={e => handleInputChange('firstName', e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={e => handleInputChange('lastName', e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail*</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={e => handleInputChange('email', e.target.value)}
                        placeholder="ex: myname@example.com"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="roomType">Booking Type</label>
                    <select
                        id="BookigType"
                        name="BookingType"
                        value={formData.roomType}
                        onChange={e => handleInputChange('roomType', e.target.value)}
                    >
                        <option value="">Please Select</option>
                        <option value="Hotels">Hotels</option>
                        <option value="Places">Places</option>
                        <option value="Loges">Loges</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="numberOfGuests">Number of Guests</label>
                    <input
                        type="number"
                        id="numberOfGuests"
                        name="numberOfGuests"
                        value={formData.numberOfGuests}
                        onChange={e => handleInputChange('numberOfGuests', e.target.value)}
                        placeholder="e.g., 23"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="arrivalDateTime">Arrival Date & Time</label>
                    <input
                        type="datetime-local"
                        id="arrivalDateTime"
                        name="arrivalDateTime"
                        value={formData.arrivalDateTime}
                        onChange={e => handleInputChange('arrivalDateTime', e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="departureDate">Departure Date</label>
                    <input
                        type="date"
                        id="departureDate"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={e => handleInputChange('departureDate', e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="specialRequests">Special Requests</label>
                    <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={e => handleInputChange('specialRequests', e.target.value)}
                    />
                </div>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
};

export default Booking;