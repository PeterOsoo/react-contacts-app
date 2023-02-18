import React from "react"
import user from "../images/user.webp"

export default function ContactCard(props) {
	const { name, email } = props.contact

	return (
		<div className="item" style={{ fontSize: "130%" }}>
			<img src={user} alt="Avatar" className="ui avatar image" />

			<div className="content">
				<div className="header"> {name} </div>
				<div> {email} </div>
			</div>
			<i
				className="trash alternate icon outline"
				style={{ color: "red", marginTop: "7px", float: "right" }}
			></i>
		</div>
	)
}
