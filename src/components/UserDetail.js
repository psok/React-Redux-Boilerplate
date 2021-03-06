import React from 'react'
import {
  Provider,
  Measure,
  Lead,
  Image
} from 'rebass'

/*
 * We need 'if' (!this.props.user)" if we set state to null by default
 * */

const UserDetail = (props) => {
  // if (!props.user) {
  //   return (<div>Select a user...</div>)
  // }
  return (
    <Provider>
      <Lead>
        {props.user.id} : {props.user.first} {props.user.last}
      </Lead>
      <Measure py={2}>
        Description: {props.user.description}
      </Measure>
      <Image src={props.user.thumbnail} />
    </Provider>
  )
}

export default UserDetail
