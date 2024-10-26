import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

function Contact({ id, name, number}) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  }; 




  return (
    <li className={css.listitem}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button
        className={css.delBtn}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
