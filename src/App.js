import { useState } from "react"

import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"

const App = () => {
	const [contacts, setContacts] = useState([])
	return (
		<div className="ui container">
			<Header />
			<AddContact />
			<ContactList contacts={contacts} />
		</div>
	)
}

export default App
