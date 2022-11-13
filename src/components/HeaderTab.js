

import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

function HeaderTab(props) {
  const {tab} = props
  const { tabId, displayText, path, icon } = props.tab

  const [tabState, setTabState] = useState('dashboard')

  const [subMenu, setSubMenu] = useState(false)



  if(props.tab.subMenu > 0){
    return (
      <div key={tab.tabId} className={`rounded-none text-gray-700 w-24 h-24`} aria-labelledby="dropdownMenuButton">
          {props.tab.subMenu.map((eachItem) => (
            <button onClick={() => setSubMenu(!subMenu)} className="dropdown-item" key={eachItem.eachItemId}>
              {eachItem.icon}
              {eachItem.displayText}
            </button>
          ))}
          <div>
            
          </div>
      </div>
    )
  }

  else{

  return (
    <Link key={tab.tabId} to={path} className="header-tab">
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
