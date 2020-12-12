import './App.css'
import Header from './Header'
import MainContainer from './MainContainer'
import Sidebar from './SideBar'

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__page'>
        <Sidebar />
        <MainContainer />
      </div>
    </div>
  )
}

export default App
