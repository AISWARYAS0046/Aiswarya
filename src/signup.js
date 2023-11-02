import React from 'react'
import './signup.css';
import v1  from './images/v1.mkv'
export const Signup = () => {
  return (
    <div class="v13_2"><div class="v13_5"></div>
    <video autoPlay loop muted>
        <source class= "vide" src={v1} type="video/mp4" >
    </source>
      </video>
      
    <span class="v16_15">“Food is symbolic of love
 when words are      inadequate.”</span>
 
 <div class="v19_23">LOGIN</div><div class="v19_24">HOME</div><div class="v19_25">ABOUT US</div><div class="v19_26">HELP</div><div class="v19_27">ADDRESS</div>
 <div class="v16_2"></div><div class="v16_3"></div><span class="v16_4">Sign up</span><div><input class="v16_5" type="text"></input></div><div><input class="v16_6" type="text"></input></div><div><input class="v16_7" type="text"></input></div><div><input class="v16_8" type="text"></input></div><span class="v16_11">EMAIL</span><span class="v16_12">PHONE NUMBER</span><span class="v16_13">LAST NAME</span><span class="v16_14">FIRST NAME</span><span class="v16_16">CONTINUE</span></div>
  )
}
export default Signup;