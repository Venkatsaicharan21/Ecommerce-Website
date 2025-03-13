import { useState, forwardRef } from "react"
import {
Button,TextField,Dialog,DialogActions,DialogContent,DialogTitle,Slide,} from "@mui/material"

const Transition = forwardRef(function Transition(props, ref){

return <Slide direction="up" ref={ref} {... props} />
})

export const RegisterDialog = ({ open, handleClose, handleSubmit })=>{

const [username,setUsername] = useState("") 
const [password, setPassword] = useState("")
const [name, setName] = useState("")

const onSubmit = (event)=> { 
    event.preventDefault()
    handleSubmit(username, password,name)
}

const handleEnterKeyDown = (event)=> { 
    if (event.key=== "Enter") {
         onSubmit(event)
    }
}

return  (
    <Dialog
    open = {open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    onKeyDown={handleEnterKeyDown}
>   
    <DialogTitle>Login</DialogTitle>
    <DialogContent>
             <TextField
                autoFocus
                margin="dense"
                id="Username"
                type="text"
                label="Email"
                fullWidth
                variant="standard"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
             <TextField
                autoFocus
                margin="dense"
                id="password"
                type="text"
                label="Password"
                fullWidth
                variant="standard"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
             <TextField
                autoFocus
                margin="dense"
                id="name"
                type="text"
                label="Name"
                fullWidth
                variant="standard"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
    </DialogContent>
    <DialogActions>
        <Button variant="text" onClick={handleClose}>
            Cancel
        </Button>
        <Button variant="contained" type="submit" onClick={onSubmit}> Submit </Button>
    </DialogActions>
    </Dialog>
)
}