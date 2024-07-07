import { useEffect, useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { ContactsContext } from './Context';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function MyModal ({index}) {
    const [show, setShow] = useState(false);
    const {handleDeleteContact, fetchData} = useContext(ContactsContext);
    
    const handleClose = () => setShow(false);
    
    const confirmDelete = (index) => {
        handleDeleteContact(index);
        fetchData();
        setShow(false);
    }

    return (
        <>
            <Button style={{color: "black", backgroundColor: "white", border: "none"}} 
                    onClick={() => setShow(true)}>
                <i className="fa fa-trash m-3" 
                    style={{fontSize: "25px"}}></i>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure...</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete this contact?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={() => confirmDelete(index)}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

function Contacts() {
    
    const {list, fetchData } = useContext(ContactsContext);

    useEffect(() => {
        fetchData();
    }, []);



    return(
        <div className="container pb-5">
            <div className="d-flex justify-content-end">
                <button className="btn btn-success my-3 text-decoration-none">
                    <Link style={{color: "white", textDecoration: "none"}}
                            to="/newcontact">
                        <b>Add new contact</b>
                    </Link>
                </button>
            </div>
            { list.map((person, index) => (
            <div className="card d-flex flex-row p-3 border-1" key={person.id}>
                <div className="col-3 m-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-GyJTZ8RzjIXKgUx9dwuJY9rYidk7zeoQeQ&s" width="150px" height="150px" className="object-fit-cover rounded-circle"></img>
                </div>
                <div className="col-6">
                    <div className="card-body">
                        <h3 className="mb-3">{person.name}</h3>
                        <h5>
                            <span><i className="fa fa-location-arrow me-2"></i></span>
                            {person.address}
                        </h5>
                        <h6>
                            <span><i className="fa fa-phone me-2"></i></span>
                            {person.phone}
                        </h6>
                        <p>
                            <span><i className="fa fa-envelope me-2"></i></span>
                            {person.email}
                        </p>
                    </div>
                </div>
                <div className="col-3 text-center align-items-center">
                    
                    <Link className="text-decoration-none" to={`/update/${person.id}`}>
                        <i className="fa fa-pencil m-3" style={{fontSize: "25px", color: "black"}}></i>
                    </Link>
                    <MyModal index={index}/>
                </div>
            </div>
            )
            )}
        </div>
    )
}

export default Contacts;