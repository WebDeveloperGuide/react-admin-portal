import React from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import {connect} from 'react-redux';
import { logOut } from '../../redux/actions';


const Header = (props) => {
		const history = useHistory();
		const handleLogout = (e) => {
			e.preventDefault();
			props.logout();
			history.push('/login');
		}

        return (  
              <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
			      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
			        <Link className="navbar-brand brand-logo mr-5" to="/"><img src="/assets/images/logo.svg" className="mr-2" alt="logo"/></Link>
			        <Link className="navbar-brand brand-logo-mini" to="/"><img src="/assets/images/logo-mini.svg" alt="logo"/></Link>
			      </div>
			      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
			        <ul className="navbar-nav navbar-nav-right">
			          <li className="nav-item nav-profile dropdown">
			            <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown" id="profileDropdown">
			              <i className="fa fa-user-circle-o" style={{fontSize:"25px"}} alt="Profile"></i>
			            </a>
			            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
			              <Link className="dropdown-item" to="/logout" onClick={handleLogout}>
			                <i className="ti-power-off text-primary"></i>
			                Logout
			              </Link>
			            </div>
			          </li>			          
			        </ul>
			        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
			          <span className="icon-menu"></span>
			        </button>
			      </div>
			    </nav>
        )  
    
}  
  
const mapDispatchToProps = dispatch =>{
  return{
    logout: () => dispatch(logOut())
  }
}
  
export default connect(null,mapDispatchToProps)(Header);