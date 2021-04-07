import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, receiveErrors } from '../actions/session_actions';
;
const SignupForm = props => {
   const [state, setState] = useState({
      state: props,
      email: "", username: "", password: "", password2: ""
   })


   const handleSubmit = (data) => {

   }
   ;
   return (
      <div>
         <h3>Sign Up</h3>
         <form onSubmit={e => props.processForm({ email: state.email, password: state.password, username: state.username, password2: state.password2})}>
            <label> username:
               <input
                  type="text"
                  value={state.username}
                  onChange={e => setState(prev => ({ ...prev, username: e.target.value }))} d
               >
               </input>
            </label>
            <label> email:
               <input
                  type="text"
                  value={state.email}
                  onChange={e => setState(prev => ({ ...prev, email: e.target.value }))} d
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
            <label> Confirm Password:
               <input
                  type="password"
                  value={state.password2}
                  onChange={e => setState(prev => ({ ...prev, password2: e.target.value }))}
               >
               </input>
            </label>

            <button onClick={e => props.processForm({ email: state.email, password: state.password, username: state.username, password2: state.password2 })}></button>
         </form>
      </div>
   )
}

export default SignupForm;