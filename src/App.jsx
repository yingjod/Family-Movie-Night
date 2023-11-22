import { Outlet, useNavigation } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
// import Nav from './components/Nav'
// import Footer from './components/Footer'

function App() {

  const navigation = useNavigation()
  return (
    <>
      {/* <Nav /> */}
      <main>
        {navigation.state === 'idle' ?
          <Outlet />
          :
          <div className="centred">
            <Spinner animation='border' />
          </div>
        }
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default App
