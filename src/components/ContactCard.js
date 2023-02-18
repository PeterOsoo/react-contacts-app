import React from "react"

export default function ContactCard(props) {
	const { id, name, email } = props.contact

	return (
		<div>
			<div className="item">
				<div className="content">
					<div className="header"> {name} </div>
					<div> {email} </div>
				</div>

				<i className="trash alternate icon outline"></i>
			</div>
		</div>
	)
}
