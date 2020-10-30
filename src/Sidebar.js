import React from 'react'
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
import { deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }));
function Sidebar() {
    const classes = useStyles();
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
                    <AddIcon className = "sidebar__addChannel"></AddIcon>
                </div>
                <div className = "sidebar__channelsList">
                    <SidebarChannel></SidebarChannel>
                    <SidebarChannel></SidebarChannel>
                    <SidebarChannel></SidebarChannel>
                    <SidebarChannel></SidebarChannel>
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
            <Avatar className = {classes.purple} ></Avatar>
            <div className="sidebar__profileInfo">
                <h3>@Neilketchum</h3>
                <p>#MyId</p>
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
