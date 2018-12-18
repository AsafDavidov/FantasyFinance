import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { fetchUser } from '../store/actions/user'
import { Loader } from 'semantic-ui-react'

const withAuth = /*FUNCTION*/ (WrappedComponent) => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchUser()

    }

    render() {
      if (localStorage.getItem('jwt') && this.props.loggedIn) {
        return <WrappedComponent />
      } else if (localStorage.getItem('jwt') && (!this.props.loggedIn)) {
        return <Loader active inline="centered" />
      } else {
        return <Redirect to="/login" />
      }
    }
  }

  const mapStateToProps =  (state) => {
    return {
      loggedIn: state.user.loggedIn,
    }
  }

  const mapDispatchToProps = /*FUNCTION*/ (dispatch) => {
    return {
      fetchUser: () => dispatch(fetchUser()),
    }
  }
  return connect(mapStateToProps, { fetchUser })(AuthorizedComponent)
}

export default withAuth
