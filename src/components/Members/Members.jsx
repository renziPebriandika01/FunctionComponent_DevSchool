import React from 'react'
import Member from './member'


const members = (props) => (
    props.members.map((member) => (
        <Member 
          member={member}
          editButtonClick={(member) => props.editButtonClick(member)}
          deleteButtonClick={(id) => props.deleteButtonClick(id)}
        />
    ))
)

export default members