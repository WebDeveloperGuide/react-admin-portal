import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { useDispatch,connect } from 'react-redux';
//import { projectActions } from '../../../actions';



const ProductsContent = (props) => {
	    const history = useHistory();
	    const [products, setProducts] = useState([]);
	    const dispatch = useDispatch();

		useEffect(() => {
		    
	        return () => {
		      setProducts([]); // This worked for me
		    };

		}, []);

		const handleEdit = (projectId) => {
			history.push(`/products/edit/${projectId}`)
		}

		const handleRemoveProject = (projectId) => {			
					
		}

		const RemoveProject = async (projectId) => {
			const response = await axios.get(`products/delete/${projectId}`);
			//allProjects();
		}

		const productsList = products.map((product)=>{
		  return <tr key={product.id}>
                  <td>{product.product_name}</td>
                  <td>{product.customername}</td>
                  <td>{product.budget_amount}</td>
                  <td>{product.start_date}</td>
                  <td>{product.end_date}</td>
                  <td className='project-actions'>
                  	<i className="fa fa-edit" title="Edit" onClick={(projectid)=>handleEdit(product.id)}></i>
                  	<i className="fa fa-trash" title="Delete" onClick={(projectid)=>handleRemoveProject(product.id)} ></i>
                  </td>
                </tr> 
		});

		const addProduct = () => {
			history.push('/products/add')
		}


        return (  
        	<div className="content-wrapper">
	          <div className="row">
	            <div className="col-lg-12 grid-margin stretch-card">
	              <div className="card">
	                <div className="card-body">
	                	<button type="button" className="btn btn-outline-primary btn-fw float-right" onClick={addProduct}>Add Product</button>
	                  <div className="table-responsive">
	                    <table className="table table-hover">
	                      <thead>
	                        <tr>
	                          <th>Product Name</th>
	                          <th>Price</th>
	                          <th>Discount</th>
	                          <th>Action</th>
	                        </tr>
	                      </thead>
	                      <tbody>
	                        { products && productsList}	                        
	                      </tbody>
	                    </table>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
        </div>
        )  
    
}
  
export default ProductsContent;