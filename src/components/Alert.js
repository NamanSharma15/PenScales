import React,{useContext,useRef} from 'react'

const Alert = (props) => {
  return (props.alert &&
    <div className='md:mt-9 mt-4 fixed w-full'>
        <div className={`bg-${props.alert.color}-100 border border-${props.alert.color}-400 text-${props.alert.color}-700 px-4 py-3 rounded relative`} role="alert">
        <strong className="font-bold">{props.alert.title}</strong>
        <span className="block sm:inline">{props.alert.statement}</span>
      </div>
    </div>
  )
}

export default Alert