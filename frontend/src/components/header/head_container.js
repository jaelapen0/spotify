import { connect } from 'react-redux';
import { logout, receiveErrors } from '../actions/session_actions'
import Header from "./head"

const mapStateToProps = ({session, processForm, errors }) => {
   debugger
   return {
      session, processForm, errors
   };
};

const mapDispatchToProps = (dispatch) => {
   
   return {
      processForm: user => dispatch(logout(user)),
      errors: () => dispatch(receiveErrors())
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Header);