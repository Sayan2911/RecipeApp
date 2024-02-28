
import {ImSpoonKnife} from 'react-icons/im';

function Header() {
  return (
    <header className='header'   >
        <div className='layer'>
          
        <div className="container">
          <nav className='logo-wrapper'>
            <div className='logo'>
              <ImSpoonKnife className='brand' />
            </div>
          </nav>
          <div className='header-text' >
            <h1>Recipe App Reactjs</h1>
            <p>A recipe app build with ❤️ and react</p>
          </div>

        </div>
        </div>
      </header>
  )
}

export default Header