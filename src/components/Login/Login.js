import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import {logIn} from  '../../redux/actions';
import bcrypt from 'bcryptjs';
import { toast } from 'react-toastify';
import axios from 'axios';
import "./Login.css";

var salt = bcrypt.genSaltSync(10);

const Login = () => {

    const history = useHistory();

    const [formState,setFormState] = useState({
        values:{}       
    });

    const handleChange = (event) => {
        setFormState(formState =>({
          ...formState,
          values:{
            ...formState.values,
            [event.target.name]:
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value
          }
          
        }));
      }

    const [submitted, setSubmitted] = useState(false);    
    const dispatch = useDispatch();
    const location = useLocation();


    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); 
        const { email, password } = formState.values;
        if (email && password) {
             
             const pwd = bcrypt.hashSync(password, salt);

              axios.post('login', {
                email,
                password: pwd,
              }).then((res) => {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user_id', res.data.id);
                history.push('/dashboard');
                dispatch(logIn());           
              }).catch((err) => {
                if (err.response && err.response.data && err.response.data.errorMessage) {
                  toast.error(err.response.data.errorMessage, {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                }
              });
            
        }
    }

	return(
		<>
		 <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
              <div className="content-wrapper d-flex align-items-center auth px-0">
                <div className="row w-100 mx-0">
                  <div className="col-lg-4 mx-auto">
                    <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                      <h4>Hello! let's get started</h4>
                      <h6 className="fw-light">Sign in to continue.</h6>
                      <form className="pt-3" name="login_form" onSubmit={handleSubmit} autoComplete="off">
                        <div className="form-group">
                          <input type="email" className={'form-control form-control-lg' + (submitted && !formState.values.email ? ' is-invalid' : '')} 
                                name="email" 
                                placeholder="Email"
                                onChange={handleChange}
                                value={formState.values.email || ''}
                                />
                                {submitted && !formState.values.email &&
                                    <div className="inline-errormsg">Email is required</div>
                                }
                        </div>
                        <div className="form-group">
                          <input type="password" className={'form-control form-control-lg' + (submitted && !formState.values.password ? ' is-invalid' : '')} 
                                name="password" 
                                placeholder="Password"
                                onChange={handleChange}
                                value={formState.values.password || ''}
                                />
                                {submitted && !formState.values.password &&
                                    <div className="inline-errormsg">Password is required</div>
                                }
                        </div>
                        <div className="mt-3">
                          <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN IN</button>
                        </div>                        
                        <div className="text-center mt-4 fw-light">
                          Don't have an account? <Link to="/register" className="text-primary">Create</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* content-wrapper ends */}
            </div>
            {/* page-body-wrapper ends */}
          </div>
		</>
		)
}

export default Login;