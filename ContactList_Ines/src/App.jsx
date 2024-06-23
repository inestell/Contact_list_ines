import Contacts from "./components/Contacts";
import NewContact from "./components/NewContact";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContextWrapper } from "./components/Context";



function App() {
  
  return (
    <>
      <ContextWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Contacts />}></Route>
            <Route path="/newcontact" element={<NewContact />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextWrapper>
    </>
  )
}

export default App
