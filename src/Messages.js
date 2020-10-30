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
function Messages() {
    const classes = useStyles();
    return (
        <div className = "message">
            <Avatar className = {classes.purple}/>
            <div className  = "message__info">
                <h4>
                   Neilketchum       <span className="message__timestamp">
                    TimeStamp
                </span> 
                </h4>
          
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, fuga.</p>
            </div>
        </div>
    )
}

export default Messages
