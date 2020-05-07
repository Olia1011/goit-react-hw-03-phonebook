import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.length ? (
        contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        ))
      ) : (
        <p>no contact with such name in your phone </p>
      )}
    </ul>
  );
};

export default ContactList;