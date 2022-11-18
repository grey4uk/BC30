import { useGetContactsQuery } from 'redux/contacts/contacts-api';
import {
  // useGetImagesQuery,
  useLazyGetImagesQuery,
} from 'redux/images/images-api';

const HomePage = () => {
  // const [amount, setAmount] = useState(2);
  // const { data, isFetching } = useGetImagesQuery(amount);
  // console.log('useGetImagesQuery', data);

  const {
    data: contacts,
    isError,
    isFetching,
  } = useGetContactsQuery();
  console.log('contacts :>> ', contacts);

  const [fetchImages, images] = useLazyGetImagesQuery();
  console.log('useLazyGetImagesQuery :>> ', images.data);

  const loading = images.isFetching || isFetching;
  const error = images.isError || isError;
  return (
    <>
      <input
        placeholder='enter images amount to find'
        onChange={(e) => fetchImages(e.target.value)}
        // onChange={(e) => setAmount(e.target.value)}
      />
      {loading && <h2>Loading...</h2>}
      {error && <h2>Try again later...</h2>}
    </>
  );
};

export default HomePage;
