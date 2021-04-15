import Skeleton from 'react-loading-skeleton';

const placeHolder: string = 'https://energies2050.org/wp-content/uploads/2017/01/beweship-contact-placeholder.jpg';

const ContactDetailContainerSkeleton = () => {
  return (
    <div className="contactDetailContainer">
      <div className="contactDetailAvaContainer">
        <img src={placeHolder} alt="" className="contactDetailAva" />
      </div>
      <div className="contactDetailNameContainerSkeleton">
        <Skeleton height={38} style={{ marginBottom: 4 }} />
        <Skeleton height={19} />
      </div>
      <div style={{ width: '212px', display: 'flex', justifyContent: 'space-evenly', alignSelf: 'center' }}>
        <button className="btnOutWhite" style={{ alignSelf: 'center', marginBottom: 48, paddingLeft: 14, borderRadius: '1.6rem', fontWeight: 600, letterSpacing: 3 }} disabled={true} onClick={() => { }}>LOADING</button>
      </div>
    </div>
  );
};

export default ContactDetailContainerSkeleton;
