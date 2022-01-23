import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';
//import { projectActions } from '../../../actions';

import "./css/AddProductForm.css";


const AddProductForm = () => {
		const history = useHistory();
		const dispatch = useDispatch();
		const [submitted, setSubmitted] = useState(false);
  	      
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

		const closeForm = (e) => {
			e.preventDefault();			
			history.push('/products');
		}


		const handleSubmit = (e) =>{
			e.preventDefault();
			setSubmitted(true);
			const {product_name,product_description, product_price, product_discount} = formState.values;

			if(product_name && product_price){
				
				axios.post('products', {
			              product_name,
			              product_description,
			              price: product_price,
			              discount: product_discount,
			              user_id: 1
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
			              history.push('/products');
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

		
        return (  
        	<div className="content-wrapper">
		        <div className="row">          
		          <div className="col-12 grid-margin">
		            <div className="card">
		              <div className="card-body">
		                <h4 className="card-title">Product Information</h4>
		                <form className="form-sample" onSubmit={handleSubmit} autoComplete="off">
		                  <div className="row">
		                    <div className="col-md-6">
		                      <div className="form-group row">
		                        <label className="col-sm-3 col-form-label">Product Name</label>
		                        <div className="col-sm-9">
		                          <input type="text" 
									onChange={handleChange}
									name="product_name"
                          			value={formState.values.product_name || ''}
		                          	className={'form-control form-control-lg' + (submitted && !formState.values.product_name ? ' is-invalid' : '')} 
		                          	/>
		                          	{ submitted && !formState.values.product_name &&
			                          <div className="inline-errormsg">Product name is required</div>
			                        }
		                        </div>
		                      </div>
		                    </div>
		                  </div>                  
		                  <div className="row">
		                    <div className="col-md-6">
		                      <div className="form-group row">
		                        <label className="col-sm-3 col-form-label">Description</label>
		                        <div className="col-sm-9">
		                          <textarea type="text" 
		                          value={formState.values.product_description || ''}
		                          	className="form-control"
		                           name="product_description" onChange={handleChange}/>
		                        </div>
		                      </div>
		                    </div>                    
		                  </div>
		                  <div className="row">
		                    <div className="col-md-6">
		                      <div className="form-group row">
		                        <label className="col-sm-3 col-form-label">Price</label>
		                        <div className="col-sm-9">
		                          <input type="text" 
		                            onChange={handleChange}
                          			value={formState.values.product_price || ''}
		                          	className={'form-control form-control-lg' + (submitted && !formState.values.product_price ? ' is-invalid' : '')} 
		                          	name="product_price"
		                          />
		                          { submitted && !formState.values.product_price &&
			                          <div className="inline-errormsg">Product price is required</div>
			                        }
		                        </div>
		                      </div>
		                    </div>                    
		                  </div>
		                  <div className="row">
		                    <div className="col-md-6">
		                      <div className="form-group row">
		                        <label className="col-sm-3 col-form-label">Discount</label>
		                        <div className="col-sm-9">
		                          <input type="text" 
		                          	className="form-control"
		                          	value={formState.values.product_discount || ''}
		                          	name="product_discount"
		                          	onChange={handleChange} />
		                        </div>
		                      </div>
		                    </div>                    
		                  </div>
		                  <div className="row text-center">
		                  	<div className="col-md-6">
		                  		<button type="submit" class="btn btn-primary mr-2">Submit</button>
                      	  		<button class="btn btn-light" onClick={closeForm}>Cancel</button>
                      	  	</div>
                      	  </div>
		                </form>
		              </div>
		            </div>
		          </div>          
		        </div>
		      </div>
        )  
    
}
  
export default AddProductForm;