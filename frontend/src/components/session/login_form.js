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
      <div>
         <h3>Login</h3>
         <form onSubmit={e => props.processForm({email: state.email, password: state.password})}>
            <label> email:
               <input
                  type="text"
                  value={state.email}
                  onChange={e => setState(prev => ({ ...prev, email: e.target.value}))}d
               >
               </input>
            </label>

            <label> Password:
               <input
                  type="password"
                  value={state.password}
                  onChange={e => setState(prev => ({ ...prev, password: e.target.value }))}
               >
               </input>
            </label>

            <button onClick={e => props.processForm({ email: state.email, password: state.password })}></button>
         </form>
      </div>
   )
}

export default LoginForm;