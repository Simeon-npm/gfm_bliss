import React from 'react'

const dropdownState = () => {
    const [state, setState] = React.useState(false)

    const toggleState = () =>{
        setState(prev=>!prev)
    }
    
    
  return {state, toggleState}
}

export default dropdownState