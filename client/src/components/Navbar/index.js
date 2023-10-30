import { Link } from 'react-router-dom';
import '.index.css'

const NavBar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/camp/new'>Make a new camp</Link>
    </div>
  )
}

export default NavBar;