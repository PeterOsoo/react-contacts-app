import "./App.css"
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"

const App = () => {
	return (
		<div className="App">
			<Header />
			<AddContact />
			<ContactList />
		</div>
	)
}

export default App
