import React from 'react'
import {useSpring,animated} from 'react-spring'

function NumberSpring({n}) {
    const {number}=useSpring({
        from:{number:0},
        number:n,       
        delay:1000,
        config:{mass:3, tension:20, friction:10}

    });
      return  <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>;
  
}

export default NumberSpring;