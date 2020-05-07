import React, { Component } from "react";
import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import localStorage from "../LocalStorage/LocalStorage";
import styles from './App.css';



class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  deleteContactbyId = (id) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: [...updatedContacts],
    });
  };

  addContact = (newContact) => {
    const { name } = newContact;
    const newName = this.state.contacts.some(
      (contact) => contact.name === name
    );
    if (!newName) {
      this.setState((prevstate) => ({
        contacts: [...prevstate.contacts, newContact],
      }));
    } else alert("We already have this contact!");
  };

  filterContactsByName = () => {
    const { contacts, filter } = this.state;
    if (contacts.length) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  componentDidMount() {
    if (localStorage.get("contacts")) {
      this.setState({
        contacts: [...localStorage.get("contacts")],
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.save("contacts", this.state.contacts);
    }
  }

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Section clasName={styles.title}
        title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 1 && <Filter onChange={this.changeHandler}
           />}
          <ContactList
            contacts={this.filterContactsByName()}
            onDelete={this.deleteContactbyId}
          />
        </Section>
      </>
    );
  }
}

export default App;