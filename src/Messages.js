import React from 'react'
import "./Message.css"
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }));
function Messages({timestamp,message,user}) {
    const classes = useStyles();
    return (
        <div className = "message">
            <Avatar src  = {user.photo}/>
            <div className  = "message__info">
                <h4>
                   Neilketchum       <span className="message__timestamp">
                   
                </span> 
                </h4>
                {message}
            </div>
        </div>
    )
}

export default Messages
