import React, {useState} from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, receiveErrors } from '../actions/session_actions';
;
const LoginForm = props => {
   const [state, setState] = useState({state: props,
                                       email: "", password: "" })
   

   const handleSubmit = (data) => {
  
   }
   ;
   return (
      <div className="login-div">
         <h3>Login</h3>
         <form onSubmit={e => props.processForm({email: state.email, password: state.password})}>
            <label className="login-email"> Email or username:</label>
            <br/>
               <input className="login-input"
                  type="text"
                  value={state.email}
                  autoFocus
                  onChange={e => setState(prev => ({ ...prev, email: e.target.value}))}d
               >
               </input>
            
            <br/>
            <label className="login-pass"> Password:</label>
            <br />
            <input className="login-input"
                  type="password"
                  value={state.password}
                  onChange={e => setState(prev => ({ ...prev, password: e.target.value }))}
               >
               </input>
            
            <br/>
            <button className="login-button" onClick={e => props.processForm({ email: state.email, password: state.password })}>LOG IN</button>
         </form>
      </div>
   )
}

export default LoginForm;