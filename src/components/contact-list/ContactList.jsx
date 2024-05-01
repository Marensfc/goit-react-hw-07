import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import {
  selectContacts,
  selectFilterName,
  selectError,
  selectLoading,
} from "../../redux/selectors";

import Contact from "../contact/Contact";
import Loader from "../loader/Loader";
import Error from "../error/Error";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectFilterName);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <>
      {loading && <Loader />}
      {error && <Error errorMessage={error} />}
      <ul className={css.contactList}>
        {filteredContacts.map(contact => {
          return <Contact contact={contact} key={contact.id} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
