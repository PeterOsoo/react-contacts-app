import React, { Component } from "react"

export class AddContact extends Component {
	state = {
		name: "",
		email: "",
	}

	AddContact = e => {
		e.preventDefault()

		if (this.state.name == "" && this.state.email == "") {
			alert("Mandatory fields")
			return
		}
		console.log(this.state)
	}

	render() {
		return (
			<div>
				<div className="ui main">
					<h2>Add Contact</h2>
					<form action="" className="ui form" onSubmit={this.AddContact}>
						<div className="field">
							<label htmlFor="">Name</label>
							<input
								type="text"
								name="name"
								id=""
								value={this.state.name}
								onChange={e => this.setState({ name: e.target.value })}
								placeholder="Name"
							/>
						</div>

						<div className="field">
							<label htmlFor="">Email</label>
							<input
								type="text"
								name="email"
								id=""
								placeholder="Email"
								value={this.state.email}
								onChange={e => this.setState({ email: e.target.value })}
							/>
						</div>

						<button className="ui button blue">Add</button>
					</form>
				</div>
			</div>
		)
	}
}

export default AddContact
