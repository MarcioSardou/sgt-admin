import React from 'react'
import { EditButton, ShowButton, DeleteButton } from 'react-admin'

function properties(props) {
  const propTarget = props.proptarget
    ? props.record[props.proptarget]
    : props.record.name

  const postText = props.posttext ? props.posttext + ' ' : ''

  return {
    ...{ props },
    propTarget: propTarget,
    postText: postText,
  }
}

export const BtnEdit = props => {
  return (
    <EditButton
      {...props}
      label=""
      title={'Editar '}
    />
  )
}

export const BtnShow = props => {

  return (
    <ShowButton
      {...props}
      label=""
      title={'Ver '}
    />
  )
}

export const BtnDelete = props => {
  return (
    <DeleteButton
      {...props}
      label=""
      title={'Excluir '}
    />
  )
}