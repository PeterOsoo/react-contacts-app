import React from 'react'

export default function AddContact() {
  const onSubmit = (e) => {
    e.preventDefault()
    console.log("Button clicked ");
  }

  return (
    <div> 
        <h2>Add Contact</h2>
        <form action="" method="">
          <label htmlFor=""> Name</label>
          <input type="text" />
          <br /> <br />
          <label htmlFor=""> Number</label>
          <input type="text" />
          <br /> <br />
          <button type="submit" onClick={ () => onSubmit()}>Submit</button>
        </form>
    </div>
  )
}
