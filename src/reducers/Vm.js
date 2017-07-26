import {
  FECTH_VM_SUCCESS,
  FECTH_VM_ERROR
} from '../actions/types';

const INITIAL = {
  loading : true,
  vms : [],
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case FECTH_VM_SUCCESS:
      return { ...INITIAL, loading: false, vms: action.vms };
    case FECTH_VM_ERROR:
      return { ...INITIAL, loading: false };
    default:
      return state
  }
}
