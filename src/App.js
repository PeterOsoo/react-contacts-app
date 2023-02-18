import "./App.css"
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"

const App = () => {
	const contacts = [
		{
			id: 1,
			name: "Jaka",
			email: "Jaka@email.com",
		},
		{
			id: 2,
			name: "Blak",
			email: "Blak@email.com",
		},
	]
	return (
		<div className="ui container">
			<Header />
			<AddContact />
			<ContactList contacts={contacts} />
		</div>
	)
}

export default App
