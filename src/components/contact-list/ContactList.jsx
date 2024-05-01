import css from "./ContactList.module.css";

import Contact from "../contact/Contact";
import { useSelector } from "react-redux";
import { getContacts, getFilterName } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterName = useSelector(getFilterName);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </ul>
  );
};

export default ContactList;
