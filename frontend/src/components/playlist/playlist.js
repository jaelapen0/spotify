import React, { useState, useEffect } from "react";


const Playlist = props => {

   // const [state, useState] = useState({props})
   // debugger;
   return(
      <div>
         {props.songs.map(song => {
            debugger
            return (
               <h3>{song.title}</h3>
               
            )
         })}
      </div>
   )
}

export default Playlist;