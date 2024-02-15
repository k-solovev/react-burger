import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

interface IProtectedRouteElement {
  element: React.ReactElement,
  anonymous?: boolean,
}

const ProtectedRouteElement: FC<IProtectedRouteElement> = ({ element, anonymous = false }) => {
  const isLoggedIn = useSelector((store: any) => store.user.isLoggedIn)

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

export default ProtectedRouteElement