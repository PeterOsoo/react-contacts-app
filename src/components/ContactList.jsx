import React from 'react'
import ContactCard from './ContactCard'

export default function ContactList (props) {
  console.log(props)

  const DisplayContacts = props.contacts.map(contact => {
    return (
      
      <ContactCard contact={contact} />
    )
  })
  return (
    <div className='ui celled list'> {
      DisplayContacts
    }
    </div>
  )
}
