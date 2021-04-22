import { connect } from 'react-redux';
import { login, receiveErrors } from '../actions/session_actions'
import {getPlaylists} from "../util/playlist_util"
import Playlists from "./playlists"

const mapStateToProps = (state) => {

   return {
      errors: state.errors.session,
      formType: 'Log in'
   };
};

const mapDispatchToProps = (dispatch) => {

   return {
      processForm: user => dispatch(login(user)),
      errors: () => dispatch(receiveErrors())
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Playlists);