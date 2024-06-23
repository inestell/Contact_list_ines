import { Link } from 'react-router-dom';
import { ContactsContext } from './Context';
import { useContext } from 'react';

function NewContact() {
    const {handleAddContact, contact, setContact} = useContext(ContactsContext);


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