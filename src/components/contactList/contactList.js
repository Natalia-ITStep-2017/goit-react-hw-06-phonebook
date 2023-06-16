import ContactItem from './contactItem'
import css from './contact.module.css';
import { getContacts, getFilter } from "../../redux/selectors";
import { useSelector } from "react-redux";
// , 

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const { filter } = useSelector(getFilter);

  const filterContacts = () => contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      {filterContacts() && filterContacts().length !== 0 ?
        (
          <ul className={css.contact__list}>
            {filterContacts().map((contact) => {
              return (<ContactItem
                key={contact.id}
                item={contact} />)
            })}
          </ul>)
        : (
          <p className={css.message}>No contacts</p>
        )
      }
    </>)
}

export default ContactList 