import Header from '../Common/Header';
import LeftSidebar from '../Common/LeftSidebar';
import AddProductForm from './components/AddProductForm';
import Footer from '../Common/Footer';

const AddProject = () => {
    return (  
            <div className="container-scroller">
                <Header/>
                <div className="container-fluid page-body-wrapper">
	              	<LeftSidebar/>
	              	<div className="main-panel">
			            <AddProductForm/>
			            <Footer/>
					</div> 
	            </div>                
            </div>  
        )
}
  
export default AddProject;