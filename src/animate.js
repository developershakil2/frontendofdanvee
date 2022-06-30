import React, {useState, useEffect} from 'react'


import { useTransition, animated } from 'react-spring';


function TransitionArray() {
  const [items, setItems] = useState()

  const transitions = useTransition(items, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    onRest: () => setItems([]),
  })

  useEffect(() => {
    if (items.length === 0) {
      setTimeout(() => {
        setItems()
      }, 2000)
    }
  }, [items])

  return (
    <div style={{ display: 'flex' }}>
      {transitions(({ opacity }, item) => (
        <animated.div
          style={{
            opacity: opacity.to(item.op),
            transform: opacity
              .to(item.trans)
              .to(y => `translate3d(0,${y}px,0)`),
          }}>
          {item.fig}
        </animated.div>
      ))}
    </div>
  )
}

export default TransitionArray;


// You can live edit this code below the import statements
import React from 'react';
import Reveal from 'react-reveal/Reveal';

class RevealExample extends React.Component {
  render() {
    return (
      <div>
        <Reveal effect="fadeInUp">
          <h1>React Reveal</h1>
        </Reveal>
      </div>
    );
  }
}

export default RevealExample;
 