import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Home from './components/Home'

const ProtectedRoute = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return <Route exact path="/" component={Home} />
}

export default ProtectedRoute
