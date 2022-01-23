import Header from '../../common/components/Header';
import LeftSidebar from '../../common/components/LeftSidebar';
import EditProjectForm from './components/EditProjectForm';
import Footer from '../../common/components/Footer';

const AddProject = () => {
    return (  
            <div className="container-scroller">
                <Header/>
                <div className="container-fluid page-body-wrapper">
	              	<LeftSidebar/>
	              	<div className="main-panel">
			            <EditProjectForm/>
			            <Footer/>
					</div> 
	            </div>                
            </div>  
        )
}
  
export default AddProject;