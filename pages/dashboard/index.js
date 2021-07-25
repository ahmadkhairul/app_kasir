import View from './view';
import { getEmployee } from '../../store/actions/employee';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export const mapStateToProps = (state) => {
  return {
    ...state.employee,
  };
};

export const mapDispatchToProps = (dispatch) => ({
  loadData: bindActionCreators(getEmployee, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);

