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
  const thisProps = properties(props)
  return (
    <EditButton
      {...props}
      label=""
      title={'Editar ' + thisProps.postText + thisProps.propTarget}
    />
  )
}

export const BtnShow = props => {
  const thisProps = properties(props)

  return (
    <ShowButton
      {...props}
      label=""
      title={'Ver ' + thisProps.postText + thisProps.propTarget}
    />
  )
}

export const BtnDelete = props => {
  const thisProps = properties(props)
  return (
    <DeleteButton
      {...props}
      label=""
      title={'Excluir ' + thisProps.postText + thisProps.propTarget}
    />
  )
}