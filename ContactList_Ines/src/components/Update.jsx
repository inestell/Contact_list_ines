import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContactsContext } from './Context';
import { Link } from 'react-router-dom';

function Update() {
    const {handleEditContact, contact, setContact } = useContext(ContactsContext);
    const {id} = useParams();
    
    const navigate = useNavigate();

    const fetchContact = async () => {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/ines/contacts');
        const allContacts = await response.json();
        const thisContact = allContacts.contacts.filter(contact => {
            return contact.id == id});
        setContact({...contact,
                    name: thisContact[0].name,
                    email: thisContact[0].email,
                    phone: thisContact[0].phone,
                    address: thisContact[0].address
        })
    };
    
    
    
    useEffect(() => {
        fetchContact();
    }, []);


    const onUpdate = () => {
        handleEditContact(id);
        navigate('/');
    };

    return (
        <div className="p-4">
            <h2 className="text-center m-4">Add a new contact</h2>
            <div className="col-6 p-3 m-auto">
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
                    <button className="btn btn-primary row mb-1" 
                            onClick={(e) => onUpdate(id)}
                            type="button">Update</button>
                    <Link to="/">or get back to contacts</Link>
                </div>
            </div>

        </div>
    )
};

export default Update;