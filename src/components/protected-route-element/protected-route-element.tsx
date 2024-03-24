import { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector'

interface IProtectedRouteElement {
  element: React.ReactElement,
  anonymous?: boolean,
}

const ProtectedRouteElement: FC<IProtectedRouteElement> = ({ element, anonymous = false }) => {
  const isLoggedIn = useAppSelector(store => store.user.isLoggedIn)

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