import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import AppDrawer from "./components/appDrawer"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {
      setUsers(response.data)
    })
  }, [])

  return (
    <div className="App">
      {/* {users.map(user =>{
       return (
         <div>
        <h1 key={user.key}>
        {user.user_name}
        </h1>
        <img src={user.img} alt="sample pic"></img>
        </div>
       )
       
      })} */}
      <AppDrawer user={users} />
    </div>
  )
}
export default App
