import { FiPhone } from 'react-icons/fi';

const ContactPhoneNumber = () => {
  return (
    <div id="ContactPhoneNumber" style={{ padding: '24px 0', overflow: 'auto' }}>
      <div style={{ display: 'flex', padding: '24px 36px', alignItems: 'center' }}>
        <div style={{ flex: 1, borderRight: 'thin solid black' }}>
          <FiPhone size={24} />
        </div>
        <div style={{ flex: 5, marginLeft: 24 }}>
          <p style={{ margin: 0, fontSize: '1.4rem' }}>0821-xxxx-xxxx</p>
        </div>
      </div>
      <div style={{ display: 'flex', height: 'auto', padding: '24px 36px', alignItems: 'center' }}>
        <div style={{ flex: 1, borderRight: 'thin solid black' }}>
          <FiPhone size={24} />
        </div>
        <div style={{ flex: 5, marginLeft: 24 }}>
          <p style={{ margin: 0, fontSize: '1.4rem' }}>0821-xxxx-xxxx</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPhoneNumber;