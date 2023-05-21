import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { FetchUsers } from '../redux/user/userCreator'


const UserDisplay = ({userData, fetchUsers}) => {
  useEffect(() => {
      fetchUsers();
  },[])
  console.log(userData)
  return (
  
  
    userData.loading ? (<h2>Loading...</h2>): userData.error ? (<h2>{userData.error}</h2> ) : (
      <div>
        <h2>userList</h2>
        <div>
          {userData && userData.map((user) => <p>{user.name}</p>)}
        </div>
      </div>
    )
  )
}

const mapStateToProps = (state) => {
  return {
    userData:state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(FetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDisplay)