import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'redux/actions/actions';
const StepSelector = () => {
  const step = useSelector((state) => state.counter.step);
  const dispatch = useDispatch();
  return (
    <select
      onChange={(e) =>
        dispatch(actions.setStep(Number(e.target.value)))
      }
      defaultValue={step}>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='5'>5</option>
    </select>
  );
};

export default StepSelector;
