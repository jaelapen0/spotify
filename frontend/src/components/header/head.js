import React, { useState } from "react";

const Header = ({ session, processForm, errors}) => {
   const [state, setState] = useState({})


   // debugger;
   return (
      <div className="header"> 
         <div className="header-left">
            <h2>Spotify</h2>
         </div>

         <div className="header-right">
            <ul>
               {session.isAuthenticated ? 
                  [<li>Hi {session.user.username}</li>,
                  <li onClick={() => processForm(session.user)}>Logout</li>]
                  : 
                  [<li><a href="/#/signup">Sign up</a></li>, <li><a href="/#/login">Login</a></li>] 
               } 
               <li><a href="https://github.com/jaelapen0/spotify" target="_blank">Github</a></li>
               <li><a href="http://jae-song.com" target="_blank">Site</a></li>
            </ul>
         </div>
      </div>
   )

}

export default Header;