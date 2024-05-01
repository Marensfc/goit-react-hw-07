import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactListItem}>
      <div className={css.contactInfo}>
        <div className={css.contactNameWrap}>
          <FaUser />
          <p>{name}</p>
        </div>

        <div className={css.contactTelWrap}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>

      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
