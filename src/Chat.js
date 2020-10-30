import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ChatHeader from './ChatHeader'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import Messages from './Messages';
const useStyles = makeStyles((theme) => ({
    chat: {
        display: "flex",
        flexDirection: "column",
        flex: "0.75",
        width: "100%",
        backgroundColor: "#3c3a3f",
    },

    chat__messages: {
        flex:'1'
    },
    chat__input: {
        color:"lightgray",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"15px",
        borderRadius:"15px",
        margin:"20px",
        borderTop:"1px solid gray",
        backgroundColor:"#474b53",
        "& form":{
            flex:1,
            "& input":{
                padding:"15px",
                background:"transparent",
                border:"none",
                outlineWidth:0,
                color:"white",
                fontSize:"large",
                width:"100%"
            }
        }

    },
    chat__inputIcons:{
        ".MuiSvgIcon-root":{
            padding:"5px"
        }

    },
}));
export default function Chat() {
    const classes = useStyles();
    return (
        <div className={classes.chat}>

            <ChatHeader />



            <div className={classes.chat__messages}>
                <Messages/>
            </div>
            <div className= {classes.chat__input}>
                <AddCircleOutlineIcon fontSize="large" />
                <form>
                    
                    <input type="text" placeholder="Message " name="" id="" />
                   
                </form>
                <div className={classes.chat__inputIcons}>
                    <EmojiEmotionsIcon/>
                    <GifIcon/>
                    <CardGiftcardIcon/>
                </div>
            </div>
        </div>
    )
}
