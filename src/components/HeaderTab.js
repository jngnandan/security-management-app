

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
      <div key={tab.tabId} className={``} aria-labelledby="dropdownMenuButton">
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
    <div className='' >
    <button 
        key={tabId}
        className={`rounded-none text-gray-700 w-20 hover:bg-green-300 rounded-full p-4 h-20 flex flex-col justify-center items-center ${tabState === tabId ? 'bg-green-300' : 'bg-green-400'}`}
           >
      {icon}
      <p className='text-sm pt-1'>{displayText}</p>
    </button>
    </div>
    </Link>
  )
}
}

export default HeaderTab
