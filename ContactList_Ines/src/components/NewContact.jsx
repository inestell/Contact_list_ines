import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

function NewContact() {
    const [contact, setContact] = useState({});

    const handleAddContact = async () => {
        const addToAPI = await fetch('https://playground.4geeks.com/contact/agendas/ines/contacts', {
                                    method: 'POST', 
                                    headers: {"Content-type": "application/json"},
                                    body: JSON.stringify({"name": contact.name, 
                                                        "phone": contact.phone, 
                                                        "email": contact.email,
                                                        "address": contact.address})
                                    });
        fetchData();

    };


    return (
        <div className="p-4">
            <h2 className="text-center m-4">Add a new contact</h2>
            <form className="col-6 p-3 m-auto">
                <div>
                    <label className="form-label">Full Name</label>
                    <input type="text" 
                            className="form-control mb-4" 
                            placeholder="Full Name"
                            value={contact.name}
                            onChange={(e) => setContact({
                                ...contact,
                                name: e.target.value})}>

                    </input>
                    <label className="form-label">Email</label>
                    <input type="email" 
                            className="form-control mb-4" 
                            placeholder="Enter email"
                            value={contact.email}
                            onChange={(e) => setContact({
                                ...contact,
                                email: e.target.value})}>   
                    </input>
                    <label className="form-label">Phone</label>
                    <input type="text" 
                            className="form-control mb-4" 
                            placeholder="Enter phone"
                            value={contact.phone}
                            onChange={(e) => setContact({
                                ...contact,
                                phone: e.target.value})}>
                    </input>
                    <label className="form-label">Address</label>
                    <input type="text" 
                            className="form-control mb-4" 
                            placeholder="Enter address"
                            value={contact.address}
                            onChange={(e) => setContact({
                                ...contact,
                                address: e.target.value})}>
                    </input>
                </div>
                <div className="row">
                    <button className="btn btn-primary row mb-1" onClick={handleAddContact}>Save</button>
                    <Link to="/">or get back to contacts</Link>
                </div>
            </form>

        </div>
    )
}

export default NewContact;