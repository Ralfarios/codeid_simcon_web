import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactCard from './components/ContactCard';
import ContactCardSkeleton from './components/ContactCardSkeleton';
import ContactAction from '../../utils/store/actions/contactAction';
import MetaDecorator from '../../utils/helmet/MetaDecorator';

import './styles/contact.css';

const Contact = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading } = useSelector((state: any) => state.contact);

  useEffect(() => {
    dispatch(ContactAction.getContact());
  }, [dispatch])

  return (
    <div id="Contact">
      <MetaDecorator title="Contact | Simple Contact" desc="Homepage of Simple Contact web app." />

      {isLoading ? <ContactCardSkeleton /> : contacts?.map((e: any) => <ContactCard key={e.id} id={e.id} age={e.age} firstName={e.firstName} lastName={e.lastName} photo={e.photo} />)}
    </div>
  );
};

export default Contact;
