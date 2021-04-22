
import React, { useState, useEffect } from "react";
import {getPlaylists} from "../util/playlist_util"
import Playlist from "./playlist"
const Playlists = (props) => {
   debugger
   const [state, setState] = useState({props})
   useEffect(()=> {
      getPlaylists().then(playlists=> {
         debugger;
         setState(prev => ({ ...prev, playlists: playlists.data  }))
      })
   }, [])
   return (
      <div>

         Playlist

         
         {state.playlists ? (state.playlists.map(playlist =>{
            
            return(
               
             [ <h2> {playlist.title}</h2>,
              <h3>{playlist.creator} </h3>,
              <Playlist songs={playlist.songs}/>]
               // {play}
            )
         }))
         
         : ""}
         
      </div>
   )
}

export default Playlists;