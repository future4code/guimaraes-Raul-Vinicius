import React from "react"
import { ListItem, ListItemText, IconButton } from "@mui/material"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const CandidateItem = () => {
    return (
        <ListItem>
            <ListItemText primary="Candidato 1" />
                <IconButton>
                   <ThumbUpIcon />
                </IconButton>
                <IconButton>
                    <ThumbDownIcon />
                </IconButton>            
        </ListItem>
    )
}

export default CandidateItem;