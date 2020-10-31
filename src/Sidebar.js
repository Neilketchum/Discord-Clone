import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Avatar from '@material-ui/core/Avatar';
import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

import {useSelector} from 'react-redux'
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';



function Sidebar() {
    const user = useSelector(selectUser);
    const [channels,setChannels]  = useState([]);  
    useEffect(()=>{
        db.collection('channels').onSnapshot(snapshot=>(
            setChannels(
                snapshot.docs.map(doc=>(
                    {
                        id:doc.id,
                        channel:doc.data(),
                    }
                ))
            )
        ))
    
    },[]);
    const handleAddChannel = () => {
        const channelName = prompt("Enter channel name: ");
    
        if (channelName) {
          db.collection("channels").add({
            channelName: channelName,
          });
        }
      };
    
    return (
        <div className = "sidebar">
            <div className = "sidebar__top">
                <h3>Neilketchum</h3>
                 
                <ExpandMoreIcon></ExpandMoreIcon>
            </div>
            <div className = "sidebar__channels">
                <div className = "sidebar__channelsHeader">
                    <div className = "sidebar__header">
                        <ExpandMoreIcon></ExpandMoreIcon>
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className = "sidebar__addChannel" style={{cursor:"pointer"} } onClick = {handleAddChannel}></AddIcon>
                </div>
                <div className = "sidebar__channelsList">
                    {channels.map(({id,channel})=>(
                         <SidebarChannel key = {id} id = {id} channelName = {channel.channelName}></SidebarChannel>
                    ))}
                </div>
            </div>
            <div className = "sidebar__voice">
                <SignalCellularAltIcon className ="sidebar_voiceIcons" fontSize = "large"/>
                <div className = "sidebar_voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon/>
                    <CallIcon/>
                </div>
            </div>
            <div className="sidebar__profile">
            <Avatar src = {user.photo} ></Avatar>
            <div className="sidebar__profileInfo">
            <h3>{user.displayName}</h3>
            <p>#{user.uid.substring(0,7)}</p>
            <button onClick = {()=>auth.signOut()} className = "sidebar__signout" >Sign Out</button>
            
            </div>
            <div className="sidebar__profileIcons">
                <MicIcon/>
                <HeadsetIcon/>
                <SettingsIcon/>
            </div>
            </div>
            
        </div>

    )
}

export default Sidebar
