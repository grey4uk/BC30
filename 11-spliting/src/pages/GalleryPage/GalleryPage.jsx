import Gallery from 'components/Gallery/Gallery';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
  return (
    <>
      <h1>GalleryPage</h1>
      <Link to='/home' replace>
        Home
      </Link>
      <Gallery />
    </>
  );
};

export default GalleryPage;
