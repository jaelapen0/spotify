import React, { useState, useEffect } from "react";
import {getAWSFile} from "../util/aws_util"
import ReactAudioPlayer from 'react-audio-player';


const Playlist = props => {



   const [state, setState] = useState({props})
   // debugger;


   useEffect(() => {
      getAWSFile().then(file => {
         debugger;
         setState(prev => ({ ...prev, file: file }))
         debugger;
      })
   }, [])

   // playAudio = () => {
   //    new Audio(state.file).play();
   // }

   debugger
   return(
      <div>
         {props.songs.map(song => {
            debugger
            return (
               <h3>{song.title}</h3>
               
            )
         })}

         {state.file ? 
         
            <ReactAudioPlayer
               // src={state.file.data}
               src="https://jaejaespotify.s3.amazonaws.com/nasislike.mp3"
               autoPlay
               controls
            />
            // <div>
            //    <button onClick={new Audio(state.file).play()}>PLAY AUDIO</button>
            // </div>
         
         : ""}
      </div>
   )
}

export default Playlist;