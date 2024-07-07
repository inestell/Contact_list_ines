import { createContext } from "react";
import { useState } from "react";

export const ContactsContext = createContext();

export const ContextWrapper = ({children}) => {
    const [list, setList] = useState([]);
    const [contact, setContact] = useState({name: "", phone: "", email: "", address: ""});
    
    const fetchData = async () => {
        const response = await fetch("https://playground.4geeks.com/contact/agendas/ines/contacts");
        const apiList = await response.json();
        setList(apiList.contacts);
    };
    
    const handleAddContact = async () => {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/ines/contacts', {
                                    method: 'POST', 
                                    headers: {"Content-type": "application/json"},
                                    body: JSON.stringify({"name": contact.name, 
                                                        "phone": contact.phone, 
                                                        "email": contact.email,
                                                        "address": contact.address})
                                    });
        await response.json();
        fetchData();

    };
    

    const handleEditContact = async (id) => {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/ines/contacts/${id}`, {
                                    method: 'PUT', 
                                    headers: {"Content-type": "application/json"},
                                    body: JSON.stringify({"name": contact.name, 
                                                        "phone": contact.phone, 
                                                        "email": contact.email,
                                                        "address": contact.address})
                                    });
        await response.json();
        fetchData();
        setContact({name: "", phone: "", email: "", address: ""});

    };

    const handleDeleteContact = async (index) => {
        await fetch(`https://playground.4geeks.com/contact/agendas/ines/contacts/${list[index].id}`, {
            method: "DELETE"
        });
        fetchData();
    };

    return (
        <ContactsContext.Provider value={{list, setList, contact, setContact, fetchData, handleAddContact, handleEditContact, handleDeleteContact }}>
            {children}
        </ContactsContext.Provider>
    )

}