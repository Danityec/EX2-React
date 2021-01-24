import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function Row(props){

    function edit(){
        props.onUpdate(props.index)

    }

    function deleteRow(){
        props.onDelete(props.id)
    }

    return (
        <div className="row">
            {props.children}
            <div className="icons">
                <EditIcon className="EditIcon" fontSize="small" aria-label="edit" onClick={edit} variant="round" style={{ padding: "1px"}} > 
                </EditIcon>
                <DeleteIcon className="DeleteIcon" fontSize="small" aria-label="delete" onClick={deleteRow} variant="round" style={{ padding: "1px"}}> 
                </DeleteIcon>      
            </div>
        </div>
        )
    
}
