import Contacts from "./components/Contacts";
import NewContact from "./components/NewContact";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContext from "./components/Context";



function App() {
  //const [contact, setContact] = useState({name: "", email: "", phone: "", address: "", url: ""});

  return (
    <>
      <BrowserRouter>
        <Routes>
          <MyContext.Provider>
            <Route path="/" element={<Contacts />}></Route>
            <Route path="/newcontact" element={<NewContact />}></Route>
          </MyContext.Provider>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
