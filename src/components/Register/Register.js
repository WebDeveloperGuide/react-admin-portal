import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import {logIn} from  '../../redux/actions';
import { toast } from 'react-toastify';
import axios from 'axios';
import "./Register.css";

const RegisterPage = () => {

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
        const { username, password , email} = formState.values;
        if (username && password && email) {
            
            axios.post('register', {
              username,
              email,
              password
            }).then((res) => {
              
              toast.success(res.data.title, {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
              history.push('/');
            }).catch((err) => {
              toast.error(err.response.data.errorMessage, {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
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
                      <h4>New here?</h4>
                      <h6 className="fw-light">Signing up is easy. It only takes a few steps</h6>
                      <form className="pt-3" name="register_form" onSubmit={handleSubmit} autoComplete="off">
                        <div className="form-group">
                          <input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.username ? ' is-invalid' : '')} 
                                name="username" 
                                placeholder="Name"
                                onChange={handleChange}
                                value={formState.values.username || ''}
                                />
                                {submitted && !formState.values.username &&
                                    <div className="inline-errormsg">Username is required</div>
                                }
                        </div>
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
                          <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN UP</button>
                        </div>                        
                        <div className="text-center mt-4 fw-light">
                          Already have an account? <Link to="/login" className="text-primary">Login</Link>
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

export default RegisterPage;