import React from 'react';
import {connect} from 'react-redux'

const EditForm = ({league,userId}) => {
  return (
    <div>
      edit your stuff
    </div>
  )
};
function mapStateToProps(state) {
  return {
    userId: state.user.userId,
  }
}
export default connect(mapStateToProps)(EditForm)
