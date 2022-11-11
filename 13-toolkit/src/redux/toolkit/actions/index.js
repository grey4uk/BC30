import { plusAction, minusAction } from './counter-actions';
import { stepAction } from './step-actions';

export const actions = {
  plus: plusAction,
  minus: minusAction,
  setStep: stepAction,
};
