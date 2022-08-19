import React from 'react';

const App = () => {
  return (
    <div className='body mt-5'>
      <div className='row'>
          <div className="col-lg-12">
          <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Personal Detail 
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div className="row personal">
                      <div className="col-4">
                        <div>
                          <label htmlFor="fname">First Name</label>
                          <input type="text" name='fname' id='fname' placeholder='Enter student first name'/>
                        </div>
                      </div>
                      <div className="col-4">
                        <div>
                          <label htmlFor="mname">Middle Name</label>
                          <input type="text" name='mname' id='mname' placeholder='Enter student middle name'/>
                        </div>
                      </div>
                      <div className="col-4">
                        <div>
                          <label htmlFor="lname">Last Name</label>
                          <input type="text" name='lname' id='lname' placeholder='Enter student last name'/>
                        </div>
                      </div>
                      <div className="col-4">
                        <div>
                          <label htmlFor="email">Email</label>
                          <input type="text" name='email' id='email' placeholder='Enter student email'/>
                        </div>
                      </div>
                      <div className="col-4">
                        <div>
                          <label htmlFor="contact">Contact No.</label>
                          <input type="text" name='contact' id='contact' placeholder='Enter student contact'/>
                        </div>
                      </div>
                      <div className="col-4">
                        <div>
                          <label htmlFor="telephone">Telephone No.</label>
                          <input type="text" name='telephone' id='telephone' placeholder='Enter telephome'/>
                        </div>
                      </div>
                      <div className="col-4">
                        <div>
                          <label htmlFor="gender">Gender</label>
                          <input type="radio" name='gender' id='gender' className='gender' value='male' /><span className='me-5'>Male</span> 
                          <input type="radio" name='gender' className='gender' value='female' /><span>Female</span> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Family Detail
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <h1 className='text-start fs-3'>Father's Details</h1>
                    <div className="row personal">
                      <div className="col-4">
                        <div>
                          <label htmlFor="f_fname">First Name</label>
                          <input type="text" name='f_fname' id='f_fname' placeholder='Enter student first name'/>
                        </div>
                      </div>
                      <div className="col-4">
                        <div>
                          <label htmlFor="f_mname">Middle Name</label>
                          <input type="text" name='f_mname' id='f_mname' placeholder='Enter student middle name'/>
                        </div>
                      </div>
                      <div className="col-4">
                        <div>
                          <label htmlFor="f_lname">Last Name</label>
                          <input type="text" name='f_lname' id='f_lname' placeholder='Enter student last name'/>
                        </div>
                      </div>
                    </div>
                    <h1 className='text-start fs-3'>Mother's Details</h1>
                    <div className="row personal">
                      <div className="col-4">
                        <div>
                          <label htmlFor="m_fname">First Name</label>
                          <input type="text" name='m_fname' id='m_fname' placeholder='Enter student first name'/>
                        </div>
                      </div>
                      <div className="col-4">
                        <div>
                          <label htmlFor="m_mname">Middle Name</label>
                          <input type="text" name='m_mname' id='m_mname' placeholder='Enter student middle name'/>
                        </div>
                      </div>
                      <div className="col-4">
                        <div>
                          <label htmlFor="m_lname">Last Name</label>
                          <input type="text" name='m_lname' id='m_lname' placeholder='Enter student last name'/>
                        </div>
                      </div>
                    </div>
                    <h1 className='text-start fs-3'>Grand Father Details</h1>
                    <div className="row personal">
                      <div className="col-4">
                        <div>
                          <label htmlFor="gf_fname">First Name</label>
                          <input type="text" name='gf_fname' id='gf_fname' placeholder='Enter student first name'/>
                        </div>
                      </div>
                      <div className="col-4">
                        <div>
                          <label htmlFor="gf_mname">Middle Name</label>
                          <input type="text" name='gf_mname' id='gf_mname' placeholder='Enter student middle name'/>
                        </div>
                      </div>
                      <div className="col-4">
                        <div>
                          <label htmlFor="gf_lname">Last Name</label>
                          <input type="text" name='gf_lname' id='gf_lname' placeholder='Enter student last name'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Educational Background
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App;