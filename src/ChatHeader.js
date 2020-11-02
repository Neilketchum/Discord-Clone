import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpIcon from '@material-ui/icons/Help';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
const useStyles = makeStyles((theme) => ({
   ChatHeader:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        color:"gray",
        padding:"10px",
        width:"100%"
   },
   ChatHeader__right:{
       display:"flex",
       alignItems:"center",
       flex:"0.5",
       justifyContent:"space-between",
       "& .MuiSvgIcon-root":{
           padding:"5px",
           cursor:"pointer",
           fontSize:"1.7rem"
       },
       "& .MuiSvgIcon-root :hover":{
        color:"white"
        },


   },
   ChatHeader__left:{
        "& h3":{
            display:"flex",
            alignItems:"center",
            // color:"white"
        }
   },
   ChatHeader__hash:{
        color:"gray",
        fontSize:"30px",
        padding:"10px"
   },
   ChatHeader__search:{
        display:"flex",
        alignItems:"center",
        color:"gray",
        backgroundColor:"#2f3135",
        borderRadius:"3px",
        padding:"3px",
        "& input":{
            outlineWidth:"0",
            background:"transparent",
            color:"white",
            border:"none"
        }
   }

  }));
export default function ChatHeader({channelName} ) {
    const classes = useStyles();
    return (
        <div className = {classes.ChatHeader}>
            <div className = {classes.ChatHeader__left}>
                <h3>
                    <span className = {classes.ChatHeader__hash}>
                        #
                    </span>
                    {channelName} 
                </h3>
            </div>
            <div className = {classes.ChatHeader__right}>
                <NotificationsIcon/>
                <LocationOnIcon/>
                <PeopleIcon/>
                <div className = {classes.ChatHeader__search}>
                    <input placeholder = "Search "></input>
                    <SearchRoundedIcon/>
                </div>
                <SendRoundedIcon/>
                <HelpIcon/>
            </div>
        </div>
    )
}
