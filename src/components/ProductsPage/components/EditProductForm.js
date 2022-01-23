import {useState,useEffect} from 'react';
import { useHistory,useParams } from "react-router-dom";
import validate from 'validate.js';
import axios from 'axios';
import Cookies from 'js-cookie';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./css/AddProjectForm.css";
import moment from 'moment';


const schema = {
  customername: {
    presence: { allowEmpty: false, message: 'is required' },
    exclusion: {
      within: ["0"],
      message: "is required"
    }
  },
  project_name: {
    presence: { allowEmpty: false, message: 'is required' }    
  },
  project_type: {
    presence: { allowEmpty: false, message: 'is required' },
    exclusion: {
      within: ["0"],
      message: "is required"
    }    
  },
  project_description: {
    presence: { allowEmpty: false, message: 'is required' }    
  }
};


const EditProductForm = () => {
		const history = useHistory();
  	    const [startDate, setStartDate] = useState('');
  	    const [endDate, setEndDate] = useState('');
 	    const { projectId } = useParams();
 	    const [formSubmitStatus, setFormSubmitStatus] = useState(false);
 	    

  	    const loadUser = async () => {
		    const response = await axios.get(`projects/detail/${projectId}`);
		    const responseData = response.data;
		    setFormState({...formState,values:responseData.data});
		    
		    if(responseData.data.start_date != null){
		    	setStartDate(moment(responseData.data.start_date).toDate());
		    }

		    if(responseData.data.end_date != null){
		    	setEndDate(moment(responseData.data.end_date).toDate());
		    }

		};


		
		const [notification,setNotification] = useState({
		   error:false,
		   message:"",
		});
		  
		const [formState,setFormState] = useState({
		   isValid:false,
		   values:{},
		   touched:{},
		   errors:{}
		});

		useEffect(() => {
    		
		    const errors = validate(formState.values, schema);

		    setFormState(formState => ({
		      ...formState,
		      isValid: errors ? false : true,
		      errors: errors || {}
		    }));    

		}, [formState.values]);

		useEffect(()=>{
			loadUser();
		},[])

		const handleChange = (event) => {

		    setFormState(formState =>({
		      ...formState,
		      values:{
		        ...formState.values,
		        [event.target.name]:
		        event.target.type === 'checkbox'
		            ? event.target.checked
		            : event.target.value
		      },
		      touched:{
		        ...formState.touched,
		        [event.target.name]: true
		      }
		    }));
		}

		const closeForm = (e) => {
			e.preventDefault();
			history.push('/projects');
		}


		const handleSubmit = (e) =>{
		    e.preventDefault();
		    setFormSubmitStatus(true);

		    const errors = validate(formState.values, schema);
		    const isValidateForm = errors ? false : true;

		    if(isValidateForm){
			    const {project_name,customername,project_status, project_type, street1, street2, city, state,zip, project_description, budget_amount} = formState.values;

			    axios.post(`projects/edit/${projectId}`, {
			      project_name,customername,project_status, project_type, street1, street2, city, state,zip, project_description, start_date:startDate, end_date:endDate, budget_amount
			    })
			    .then(function (response) {

			      if(response.data.status){
			          history.push('/projects');

			          return () =>{
			          	// Reset Form
				          setFormState(formState => ({
				            isValid: false,
				            values: {},
				            touched: {},
				            errors: {}
				          }));

				          setFormSubmitStatus(false);

				          //For me, clean the state in the unmount of the component helped.
				          setNotification({error:false,message:response.data.message});		
			          }
			          
			          
			      }else{
			        setNotification({error:true,message:response.data.message});
			      }
			    })
			    .catch(function (error) {
			      //console.log("Eroor",error);
			      setNotification({error:true,message:error.response.data.message});
			    });
			}
		}

		const hasError = field =>
    		(formState.touched[field] || formSubmitStatus) && formState.errors[field] ? true : false;    	


        return (  
        	<div className="content-wrapper">
			   <div className="row">
			      <div className="col-12 grid-margin">
			         <div className="card">
			            <div className="card-body">
			               <form className="form-sample" onSubmit={handleSubmit}>
			               {
				                (notification.message !== "") && <div className="alert alert-danger" role="alert">{notification.message}</div>
				            }
			                  <div className="row">
		                     	<div className="col-md-6">
			                        <div className="form-group row">
			                          <label className="col-sm-3 col-form-label">Customer*</label>
			                          <div className="col-sm-9">
			                              <select 
			                                name="customername"
			                              	className={hasError('customername') ? "form-control form-control-lg is-invalid" : "form-control form-control-lg"}
			                              	onChange={handleChange}
						                    onBlur={handleChange}
						                    value={formState.values.customername || ''}
			                              >
			                                 <option value="">Select Customer</option>
			                                 <option value="1">John Doe</option>
			                                 <option value="2">Mark Smith</option>
			                              </select>
			                          </div>
			                        </div>
			                    </div>
			                    <div className="col-md-6">
			                        <div className="form-group row">
			                          <label className="col-sm-3 col-form-label">Start Date</label>
			                          <div className="col-sm-9">
			                              <div className="form-group">
						                    <div className="input-group">
						                      <div className="input-group-prepend">
						                        <span className="input-group-text"><i className="fa fa-calendar"></i></span>
						                      </div>
						                      <DatePicker className="form-control"  
                                                         placeholderText="Start Date" showPopperArrow={false}
						                  				name="start_date"
						                  				onChange={date => setStartDate(date)}
						                  				selected={startDate}
                                                />
						                    </div>
						                  </div>
			                          </div>
			                        </div>
			                    </div>
			                  </div>
			                  <div className="row">
		                     	<div className="col-md-6">
			                        <div className="form-group row">
			                          <label className="col-sm-3 col-form-label">Project Status</label>
			                          <div className="col-sm-9">
			                              <select className="form-control" name="project_status"
			                                onChange={handleChange}
						                  	onBlur={handleChange}
						                  	value={formState.values.project_status || ''}
			                              >
			                              	 <option value="">Select Project Status</option>
			                                 <option value="1">Bidding</option>
			                                 <option value="2">Completed</option>
			                              </select>
			                          </div>
			                        </div>
			                    </div>
			                    <div className="col-md-6">
			                        <div className="form-group row">
			                          <label className="col-sm-3 col-form-label">End Date</label>
			                          <div className="col-sm-9">
			                              <div className="form-group">
						                    <div className="input-group">
						                      <div className="input-group-prepend">
						                        <span className="input-group-text"><i className="fa fa-calendar"></i></span>
						                      </div>
						                      <DatePicker className="form-control"  
                                                         placeholderText="End Date" showPopperArrow={false}                                                          
						                  				name="end_date"
						                  				selected={endDate}
						                  				onChange={date => setEndDate(date)} 
                                                />
						                    </div>
						                  </div>
			                          </div>
			                        </div>
			                    </div>
			                  </div>
			                  <div className="row">
		                     	<div className="col-md-6">
			                        <div className="form-group row">
			                          <label className="col-sm-3 col-form-label">Project Name*</label>
			                          <div className="col-sm-9">
			                              <input type="text" 
			                              name="project_name"
			                              className={hasError('project_name') ? "form-control form-control-lg is-invalid" : "form-control form-control-lg"}	
			                              value={formState.values.project_name || ''}
						                  onChange={handleChange}
						                  onBlur={handleChange}
			                              placeholder="Project Name" aria-label="Project Name"/>
			                              <div className="inline-errormsg">{hasError('project_name') ? formState.errors.project_name[0] : ""}</div>
			                          </div>
			                        </div>
			                    </div>
			                    <div className="col-md-6">
			                        <div className="form-group row">
			                          <label className="col-sm-3 col-form-label">Project Type*</label>
			                          <div className="col-sm-9">
			                              <select 
			                                 name="project_type"
			                              	 className={hasError('project_type') ? "form-control form-control-lg is-invalid" : "form-control form-control-lg"}
			                              	 onChange={handleChange}
						                     onBlur={handleChange}
						                     value={formState.values.project_type || ''}
			                                >
			                                 <option value="">Select Project Type</option>
			                                 <option value="1">Commercial</option>
			                                 <option value="2">Factory</option>
			                              </select>
			                              <div className="inline-errormsg">{hasError('project_type') ? formState.errors.project_type[0] : ""}</div>
			                          </div>
			                        </div>
			                    </div>
			                  </div>
			                  <div className="row">
		                     	<div className="col-md-6">
			                        <div className="form-group row">
			                          <label className="col-sm-3 col-form-label">Street</label>
			                          <div className="col-sm-9">
			                              <div className="form-group">
						                    <div className="input-group">
						                      <input type="text" className="form-control" placeholder="Street" 
												onChange={handleChange}
						                  		onBlur={handleChange}
						                  		name="street1"
						                  		value={formState.values.street1 || ''}
						                      aria-label="Street"/>						                      
						                      <div className="input-group-append">
						                        <span className="input-group-text"><i className="fa fa-map-marker"></i></span>
						                      </div>
						                    </div>
						                  </div>
			                          </div>
			                        </div>
			                    </div>
			                    <div className="col-md-6">
			                        <div className="form-group row">
			                          <label className="col-sm-3 col-form-label">Budget Amount</label>
			                          <div className="col-sm-9">
			                              <div className="form-group">
						                    <div className="input-group">
						                      <div className="input-group-prepend">
						                        <span className="input-group-text"><i className="fa fa-dollar"></i></span>
						                      </div>
						                      <input type="text" className="form-control" placeholder="Budget Amount" aria-label="Budget Amount"
						                      			onChange={handleChange}
						                  				onBlur={handleChange}
						                  				value={formState.values.budget_amount || ''}
						                  				name="budget_amount"
						                  				/>
						                    </div>
						                  </div>
			                          </div>
			                        </div>
			                    </div>		                    
			                  </div>
			                  <div className="row">
		                     	<div className="col-md-6">
			                        <div className="form-group row">
			                          <label className="col-sm-3 col-form-label">Street 2</label>
			                          <div className="col-sm-9">
			                              <input type="text" className="form-control" placeholder="Street 2" 
			                              onChange={handleChange}
						                  onBlur={handleChange}
						                  name="street2"
						                  value={formState.values.street2 || ''}
			                              aria-label="Street 2"/>
			                          </div>
			                        </div>
			                    </div>
			                    <div className="col-md-6">
			                        <div className="form-group row">
			                           <label className="col-sm-3 col-form-label">Description*</label>
			                           <div className="col-sm-9">
			                              <textarea
			                              name="project_description"
			                              className={hasError('project_description') ? "form-control form-control-lg is-invalid" : "form-control form-control-lg"}	
			                              value={formState.values.project_description || ''}
						                  onChange={handleChange}
						                  onBlur={handleChange}
			                               placeholder='Max 2000 Characters' rows="4"></textarea>
			                               <div className="inline-errormsg">{hasError('project_description') ? formState.errors.project_description[0] : ""}</div>
			                           </div>
			                        </div>
			                     </div>				                    
			                  </div>
			                  <div className="row">
		                     	<div className="col-md-6">
			                        <div className="form-group row">
			                          <label className="col-sm-3 col-form-label">City/State/Zip</label>
			                          <div className="col-sm-3 pr-0">
			                              <input type="text" className="form-control" placeholder="City" 
										  onChange={handleChange}
						                  onBlur={handleChange}
						                  name="city"
						                  value={formState.values.city || ''}
			                              aria-label="City"/>
			                          </div>
			                          <div className="col-sm-3">
			                              <input type="text" className="form-control" placeholder="State" 
										  onChange={handleChange}
						                  onBlur={handleChange}
						                  name="state"
						                  value={formState.values.state || ''}
			                              aria-label="State"/>
			                          </div>
			                          <div className="col-sm-3 pl-0">
			                              <input type="text" className="form-control" placeholder="Zip" 
										  onChange={handleChange}
						                  onBlur={handleChange}
						                  name="zip"
						                  value={formState.values.zip || ''}
			                              aria-label="Zip"/>
			                          </div>
			                        </div>
			                    </div>			                    
			                  </div>
			                  <div className="row">
		                     	<div className="col-md-6">
			                        <div className="form-group row">
			                           <label className="col-sm-3 col-form-label">Upload</label>
			                           <div className="col-sm-9">
			                              <input className="form-control file-upload-input" type='file'/>
			                           </div>
			                        </div>
			                     </div>
			                  </div>        
			                  <button type="submit" 
			                  className="btn btn-primary mr-2">Submit</button>
                    		  <button className="btn btn-light" onClick={closeForm}>Cancel</button>
			               </form>
			            </div>
			         </div>
			      </div>
			   </div>
			</div>
        )  
    
}
  
export default EditProductForm;