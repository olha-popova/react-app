import React from 'react';
import s from './DialogsList.module.scss';
import DialogItem from "./DialogItem/DialogItem";

const DialogsList = (props) => {

    var DialogsListElements =
        props.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} profilepic={dialog.profilepic}/> );

    return (
        <div className={s.dialogslist}>
            {DialogsListElements}
        </div>
    );
};

export default DialogsList;