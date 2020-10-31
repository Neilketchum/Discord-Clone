import React from 'react'
import './SidebarChannel.css'
function SidebarChannel({id,channelName}) {
    console.log(channelName)
    return (
        <div className = "SidebarChannel">
            <h4 className = "sidebarChannel_channelName">
               {channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
