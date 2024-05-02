import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectError,
  selectLoading,
} from "../../redux/selectors";

import Contact from "../contact/Contact";
import Loader from "../loader/Loader";
import Error from "../error/Error";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

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
