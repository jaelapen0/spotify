import { connect } from 'react-redux';
import { signup, receiveErrors } from '../actions/session_actions'

import SignupForm from './signup_form';

const mapStateToProps = (state) => {
   
   return {
      errors: state.errors.session,
      formType: 'Log in'
   };
};

const mapDispatchToProps = (dispatch) => {
   
   return {
      processForm: user => dispatch(signup(user)),
      errors: () => dispatch(receiveErrors())
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SignupForm);