import { useDispatch, useSelector } from 'react-redux';
import { setStep } from 'redux/toolkit/slices/counterSlice';
// import { actions } from 'redux/toolkit/actions';
const StepSelector = () => {
  const step = useSelector((state) => state.step);
  const dispatch = useDispatch();
  return (
    <select
      onChange={(e) =>
        dispatch(setStep(Number(e.target.value)))
      }
      defaultValue={step}>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='5'>5</option>
    </select>
  );
};

export default StepSelector;
