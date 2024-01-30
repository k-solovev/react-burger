import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRouteElement = ({ element, anonymous = false }) => {
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn)

  const location = useLocation()
  const from = location.state?.from || '/'

  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />
  }

  if (!anonymous && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return element
}

ProtectedRouteElement.propTypes = {
  element: PropTypes.element.isRequired,
}

export default ProtectedRouteElement