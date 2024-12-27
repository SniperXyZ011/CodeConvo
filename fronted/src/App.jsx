import './App.css';
import 'remixicon/fonts/remixicon.css'
import AppRoutes from './routes/AppRoutes';
import {UserProvider} from './context/user.context.jsx'
function App() {

  return (
    <UserProvider>
      <AppRoutes/>
    </UserProvider>
  )
}

export default App
