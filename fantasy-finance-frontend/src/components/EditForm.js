import React from 'react';
import {connect} from 'react-redux'

const EditForm = (props) => {
  return (
    <div>
      edit your stuff
    </div>
  )
};
// function mapStateToProps({user}) {
//   return {
//     userId: user.userId,
//   }
// }
export default connect(null)(EditForm)
