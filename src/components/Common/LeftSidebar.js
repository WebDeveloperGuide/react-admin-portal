import {Link} from 'react-router-dom';

const LeftSidebar = () => {
        return (  
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
		        <ul className="nav">
		          <li className="nav-item">
		            <Link className="nav-link" to="/">
		              <i className="icon-grid menu-icon"></i>
		              <span className="menu-title">Dashboard</span>
		            </Link>
		          </li>
		          <li className="nav-item">
		            <Link className="nav-link" to="/products">
		              <i className="icon-box menu-icon"></i>
		              <span className="menu-title">Products</span>
		            </Link>
		          </li>
		        </ul>
		      </nav>  
        )  
    
}  
  
export default LeftSidebar;