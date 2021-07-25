import View from './view';
import { loginAuth } from '../../store/actions/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export const mapStateToProps = (state) => {
  return {
    ...state.login,
  };
};

export const mapDispatchToProps = (dispatch) => ({
  authLogin: bindActionCreators(loginAuth, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);

