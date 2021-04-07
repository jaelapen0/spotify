
import React, {useState} from "react";

const Home = props => {

   const [state, setState] = useState({})
   return(
      <div className="home-div">
         <div className="home-inner"> 
            <div>
               <h2>See what all the rave is about.</h2>

               <h4>Enjoy ad-free head-banging music, and much more. Cancel anytime.</h4>
            </div>

            <img src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200618210958-uk-rave-culture-2.jpg"></img>
         </div>
         <div className="home-inner">

         </div>
         <div className="home-inner">

         </div>
      </div>
   )
}

export default Home;