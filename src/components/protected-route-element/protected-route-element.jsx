import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRouteElement = ({ element }) => {
  const location = useLocation()
  const user = useSelector(state => state.user.user)

  return user ? element : <Navigate to='/login' state={{ from: location }}></Navigate>
}

ProtectedRouteElement.propTypes = {
  element: PropTypes.element.isRequired,
}

export default ProtectedRouteElement