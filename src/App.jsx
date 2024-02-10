import { Outlet, useNavigation } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import NavBar from './components/NavBar'
// import Footer from './components/Footer'

function App() {

  const navigation = useNavigation()
  return (
    <>
      <NavBar />
      <main>
        {navigation.state === 'idle' ?
          <Outlet />
          :
          <div className="centred">
            <Spinner animation='border' />
          </div>
        }
      </main>
    </>
  )
}

export default App
