

import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

function HeaderTab(props) {
  const { tabId, displayText, path, icon } = props.tab

  const [tabState, setTabState] = useState('dashboard')

  const [open, setOpen] = useState(false)

  if(props.tab.subMenu){
    return (
      <div className={open ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="dropdownMenuButton">
        <button onClick={() => setOpen(!open)}>
          {props.tab.subMenu.map((eachItem) => (
            <Link to={eachItem.path} className="dropdown-item" key={eachItem.eachItemId}>
              {eachItem.icon}
              {eachItem.displayText}
            </Link>
          ))}
        </button>
      </div>
    )
  }

  else{

  return (
    <Link to={path} className="header-tab">
    <button 
        key={tabId}
    // onClick={() => setTabState(tabId)}
            className={`rounded-none text-gray-700 w-24 h-24 flex flex-col justify-center items-center ${tabState === tabId ? 'bg-green-300' : 'bg-green-400'}`}
           >
      {icon}
      <p>{displayText}</p>
    </button>
    </Link>
  )
}
}

export default HeaderTab
