
import Skeleton from 'react-loading-skeleton';

const ContactCardSkeleton = () => {
  return (
    <>
      {new Array(5).fill('').map((_: any, idx: number) => <div id="ContactCardSkeleton" className="contactCardSkeleton" key={idx}>
        <div className="contactAvaContainer">
          <Skeleton circle={true} height={50} width={50} />
        </div>
        <div className="contactInfoContainerSkeleton">
          <Skeleton />
          <Skeleton width={'50%'} />
        </div>
      </div>)}
    </>
  );
};

export default ContactCardSkeleton;
