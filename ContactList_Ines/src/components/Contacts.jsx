import { useState, useEffect, useContext} from 'react'
import { Link } from "react-router-dom"


function Contacts(){
    const [list, setList] = useState([])
    
    const fetchData = async () => {
        const response = await fetch("https://playground.4geeks.com/contact/agendas/ines");
        const apiList = await response.json();
        console.log(apiList.contacts);
        setList(apiList.contacts);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleEditContact = async (index) => {
        const editContact = await fetch(`https://playground.4geeks.com/contact/agendas/ines/contacts/${contact[index].id}`, {
                                    method: 'PUT', 
                                    headers: {"Content-type": "application/json"},
                                    body: JSON.stringify({"name": contact.name, 
                                                        "phone": contact.phone, 
                                                        "email": contact.email,
                                                        "address": contact.address})
                                    });
        fetchData();

    };

    
    return(
        <div className="container">
            <div className="d-flex justify-content-end">
                <button className="btn btn-success my-3 text-decoration-none">
                    <Link style={{color: "white", textDecoration: "none"}}
                            to="/newcontact">
                        <b>Add new contact</b>
                    </Link>
                </button>
            </div>
            {list.map( (person, index) => {
            <div className="card d-flex flex-row p-3">
                <div className="col-3 m-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-GyJTZ8RzjIXKgUx9dwuJY9rYidk7zeoQeQ&s" width="150px" height="150px" className="object-fit-cover rounded-circle"></img>
                </div>
                <div className="col-6">
                    <div className="card-body">
                        <h3>{person.name}</h3>
                        <p>{person.address}</p>
                        <p>{person.phone}</p>
                        <p>{person.email}</p>
                    </div>
                </div>
                <div className="col-3 text-center align-items-center">
                    <span onClick={handleEditContact}><i className="fa fa-pencil m-3" style={{fontSize: "25px"}}></i></span>
                    <span><i className="fa fa-trash m-3" style={{fontSize: "25px"}}></i></span>
                </div>
            </div>
            }
            )}
        </div>
    )
}

export default Contacts;