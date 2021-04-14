import MetaDecorator from '../../utils/helmet/MetaDecorator';
import ContactCard from './components/ContactCard';

import './styles/contact.css';

const Contact = () => {
  return (
    <div id="Contact">
      <MetaDecorator title="Contact | Simple Contact" desc="Homepage of Simple Contact web app." />

      <ContactCard />
    </div>
  );
};

export default Contact;
