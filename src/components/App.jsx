import css from './app.module.css';
import Form from './form/form';
import Filter from './filter/filter';
import ContactList from './contactList/contactList';

export const App = () => {

  return ( 
    <div>
      <h1 className={css.title}> Phonebook </h1>
      <Form />
      <h2 className={css.title}> Contacts </h2>
      <Filter />
      <ContactList />
    </div>
  )
}





