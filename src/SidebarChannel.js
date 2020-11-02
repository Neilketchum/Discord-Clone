import React from 'react'
import './SidebarChannel.css'
import { useDispatch } from "react-redux"
import {setChannelInfo} from "./features/appSlice"
function SidebarChannel({id,channelName}) {
    const dispatch = useDispatch()
    // console.log(channelName)
    return (
        <div className = "SidebarChannel" onClick = {()=>{
            dispatch(setChannelInfo({
                channelId:id,
                channelName:channelName
            }))
        }}>
            <h4 className = "sidebarChannel_channelName">
               {channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
