import React from 'react'

export default function AddContact() {
  const onSubmit = (e) => {
    e.preventDefault()
    console.log("Button clicked ");
  }

  return (
    <div> 
        <div className="ui main">
          <h2>Add Contact</h2>
          <form action="" className="ui form">
            <div className="field">
              <label htmlFor="">Name</label>
              <input type="text" name="name" id="" placeholder='Name' />
            </div>
          </form>
        </div>
    </div>
  )
}
