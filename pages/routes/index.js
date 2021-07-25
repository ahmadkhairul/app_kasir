import View from './view';
import { getAuth } from '../../store/actions/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export const mapStateToProps = (state) => {
  return {
    ...state.auth,
  };
};

export const mapDispatchToProps = (dispatch) => ({
  authUser: bindActionCreators(getAuth, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);

