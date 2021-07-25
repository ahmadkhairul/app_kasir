import View from './view';
import { connect } from 'react-redux';

export const mapStateToProps = (state) => {
  return {
    ...state.auth,
  };
};

export default connect(mapStateToProps)(View);

