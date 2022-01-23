

const Dashboard = () => {
  return (
    <>
    	<div className="container-scroller">
        {/* partial:partials/_navbar.html */}
        <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
            <div className="me-3">
              <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-bs-toggle="minimize">
                <span className="icon-menu" />
              </button>
            </div>
            <div>
              <a className="navbar-brand brand-logo" href="index.html">
                <img src="assets/images/logo.svg" alt="logo" />
              </a>
              <a className="navbar-brand brand-logo-mini" href="index.html">
                <img src="assets/images/logo-mini.svg" alt="logo" />
              </a>
            </div>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-top"> 
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown d-none d-lg-block user-dropdown">
                <a className="nav-link" id="UserDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className="img-xs rounded-circle" src="assets/images/faces/face8.jpg" alt="Profile image" /> </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                  <div className="dropdown-header text-center">
                    <img className="img-md rounded-circle" src="assets/images/faces/face8.jpg" alt="Profile image" />
                    <p className="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                    <p className="fw-light text-muted mb-0">allenmoreno@gmail.com</p>
                  </div>
                  <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2" /> My Profile <span className="badge badge-pill badge-danger">1</span></a>
                  <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-power text-primary me-2" />Sign Out</a>
                </div>
              </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-bs-toggle="offcanvas">
              <span className="mdi mdi-menu" />
            </button>
          </div>
        </nav>
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
          {/* partial:partials/_settings-panel.html */}
          <div className="theme-setting-wrapper">            
            <div id="theme-settings" className="settings-panel">
              <i className="settings-close ti-close" />
              <p className="settings-heading">SIDEBAR SKINS</p>
              <div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border me-3" />Light</div>
              <div className="sidebar-bg-options" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border me-3" />Dark</div>
              <p className="settings-heading mt-2">HEADER SKINS</p>
              <div className="color-tiles mx-0 px-4">
                <div className="tiles success" />
                <div className="tiles warning" />
                <div className="tiles danger" />
                <div className="tiles info" />
                <div className="tiles dark" />
                <div className="tiles default" />
              </div>
            </div>
          </div>
          <div id="right-sidebar" className="settings-panel">
            <i className="settings-close ti-close" />
            <ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="todo-tab" data-bs-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="chats-tab" data-bs-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
              </li>
            </ul>
            <div className="tab-content" id="setting-content">
              <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
                <div className="add-items d-flex px-3 mb-0">
                  <form className="form w-100">
                    <div className="form-group d-flex">
                      <input type="text" className="form-control todo-list-input" placeholder="Add To-do" />
                      <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
                    </div>
                  </form>
                </div>
                <div className="list-wrapper px-3">
                  <ul className="d-flex flex-column-reverse todo-list">
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Team review meeting at 3.00 PM
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Prepare for presentation
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Resolve all the low priority tickets due today
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li className="completed">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" defaultChecked />
                          Schedule meeting for next week
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li className="completed">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" defaultChecked />
                          Project review
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                  </ul>
                </div>
                <h4 className="px-3 text-muted mt-5 fw-light mb-0">Events</h4>
                <div className="events pt-4 px-3">
                  <div className="wrapper d-flex mb-2">
                    <i className="ti-control-record text-primary me-2" />
                    <span>Feb 11 2018</span>
                  </div>
                  <p className="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
                  <p className="text-gray mb-0">The total number of sessions</p>
                </div>
                <div className="events pt-4 px-3">
                  <div className="wrapper d-flex mb-2">
                    <i className="ti-control-record text-primary me-2" />
                    <span>Feb 7 2018</span>
                  </div>
                  <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
                  <p className="text-gray mb-0 ">Call Sarah Graves</p>
                </div>
              </div>
              {/* To do section tab ends */}
              <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
                <div className="d-flex align-items-center justify-content-between border-bottom">
                  <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                  <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 fw-normal">See All</small>
                </div>
                <ul className="chat-list">
                  <li className="list active">
                    <div className="profile"><img src="assets/images/faces/face1.jpg" alt="image" /><span className="online" /></div>
                    <div className="info">
                      <p>Thomas Douglas</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">19 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src="assets/images/faces/face2.jpg" alt="image" /><span className="offline" /></div>
                    <div className="info">
                      <div className="wrapper d-flex">
                        <p>Catherine</p>
                      </div>
                      <p>Away</p>
                    </div>
                    <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                    <small className="text-muted my-auto">23 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src="assets/images/faces/face3.jpg" alt="image" /><span className="online" /></div>
                    <div className="info">
                      <p>Daniel Russell</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">14 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src="assets/images/faces/face4.jpg" alt="image" /><span className="offline" /></div>
                    <div className="info">
                      <p>James Richardson</p>
                      <p>Away</p>
                    </div>
                    <small className="text-muted my-auto">2 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src="images/faces/face5.jpg" alt="image" /><span className="online" /></div>
                    <div className="info">
                      <p>Madeline Kennedy</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">5 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src="images/faces/face6.jpg" alt="image" /><span className="online" /></div>
                    <div className="info">
                      <p>Sarah Graves</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">47 min</small>
                  </li>
                </ul>
              </div>
              {/* chat tab ends */}
            </div>
          </div>
          {/* partial */}
          {/* partial:partials/_sidebar.html */}
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  <i className="mdi mdi-grid-large menu-icon" />
                  <span className="menu-title">Dashboard</span>
                </a>
              </li>
              <li className="nav-item nav-category">UI Elements</li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                  <i className="menu-icon mdi mdi-floor-plan" />
                  <span className="menu-title">UI Elements</span>
                  <i className="menu-arrow" /> 
                </a>
                <div className="collapse" id="ui-basic">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                    <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                    <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item nav-category">Forms and Datas</li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                  <i className="menu-icon mdi mdi-card-text-outline" />
                  <span className="menu-title">Form elements</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="form-elements">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                  <i className="menu-icon mdi mdi-chart-line" />
                  <span className="menu-title">Charts</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="charts">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                  <i className="menu-icon mdi mdi-table" />
                  <span className="menu-title">Tables</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="tables">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                  <i className="menu-icon mdi mdi-layers-outline" />
                  <span className="menu-title">Icons</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="icons">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item nav-category">pages</li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                  <i className="menu-icon mdi mdi-account-circle-outline" />
                  <span className="menu-title">User Pages</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="auth">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item nav-category">help</li>
              <li className="nav-item">
                <a className="nav-link" href="http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html">
                  <i className="menu-icon mdi mdi-file-document" />
                  <span className="menu-title">Documentation</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* partial */}
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-sm-12">
                  <div className="home-tab">
                    <div className="tab-content tab-content-basic">
                      <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview"> 
                        <div className="row">
                          <div className="col-lg-8 d-flex flex-column">
                            <div className="row flex-grow">
                              <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className="card-body">
                                    <div className="d-sm-flex justify-content-between align-items-start">
                                      <div>
                                        <h4 className="card-title card-title-dash">Performance Line Chart</h4>
                                        <h5 className="card-subtitle card-subtitle-dash">Lorem Ipsum is simply dummy text of the printing</h5>
                                      </div>
                                      <div id="performance-line-legend" />
                                    </div>
                                    <div className="chartjs-wrapper mt-5">
                                      <canvas id="performaneLine" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 d-flex flex-column">
                            <div className="row flex-grow">
                              <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                                <div className="card bg-primary card-rounded">
                                  <div className="card-body pb-0">
                                    <h4 className="card-title card-title-dash text-white mb-4">Status Summary</h4>
                                    <div className="row">
                                      <div className="col-sm-4">
                                        <p className="status-summary-ight-white mb-1">Closed Value</p>
                                        <h2 className="text-info">357</h2>
                                      </div>
                                      <div className="col-sm-8">
                                        <div className="status-summary-chart-wrapper pb-4">
                                          <canvas id="status-summary" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-sm-6">
                                        <div className="d-flex justify-content-between align-items-center mb-2 mb-sm-0">
                                          <div className="circle-progress-width">
                                            <div id="totalVisitors" className="progressbar-js-circle pr-2" />
                                          </div>
                                          <div>
                                            <p className="text-small mb-2">Total Visitors</p>
                                            <h4 className="mb-0 fw-bold">26.80%</h4>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <div className="d-flex justify-content-between align-items-center">
                                          <div className="circle-progress-width">
                                            <div id="visitperday" className="progressbar-js-circle pr-2" />
                                          </div>
                                          <div>
                                            <p className="text-small mb-2">Visits per day</p>
                                            <h4 className="mb-0 fw-bold">9065</h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* content-wrapper ends */}
            {/* partial:partials/_footer.html */}
            <footer className="footer">
              <div className="d-sm-flex justify-content-center">
                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Copyright © 2021. All rights reserved.</span>
              </div>
            </footer>
            {/* partial */}
          </div>
          {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>      
    </>
  );
}

export default Dashboard;
