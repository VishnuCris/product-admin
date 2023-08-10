
import { Link } from "react-router-dom";

const signup = () => {

	return(
		<div id="wrapper">
           <div class="page-wrapper auth_wrapper">
              <div class="content-area-wrapper">
                 <div class="content-wrapper">
                    <div class="container">
                       <div class="card products_blc">
                          <div class="card-body">
                             <div class="card_content_wrap text-center"></div>
                             <div class="card_content_wrap text-center">
                                <div class="logo_wrap">
                                   <img src="assets/images/thumbnails/Logo.svg" alt="logo" />
                                   <h6>Create an account</h6>
                                </div>
                                <form>
                                   <div class="form_wrapper">
                                      <div class="mb-4"><label for="exampleFormControlInput1" class="form-label label_modify"><span class="mendatary">*</span> Email</label><input type="email" name="email" placeholder="demo@gmail.com" class="form-control input_modify" id="exampleFormControlInput1" value="" /></div>
                                      <div class="mb-4"><label for="exampleFormControlInput1" class="form-label label_modify"> <span class="mendatary">*</span> Password</label><input type="password" placeholder="*****" name="password" class="form-control input_modify" id="exampleFormControlInput2" value="" /></div>
                                      <div class="mb-4"><label for="exampleFormControlInput1" class="form-label label_modify"> <span class="mendatary">*</span>Confirm Password</label><input type="password" name="confirmpassword" class="form-control input_modify" id="exampleFormControlInput3" placeholder="*****" value="" /></div>
                                      <div class="mb-0 auth_btn"><button type="button" class="theme-btn-primary theme-btn">Sign Up</button></div>
                                      <div class="already"> <a href="login.html"><Link to="/login">Already have account</Link></a></div>
                                   </div>
                                </form>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
	)
}

export default signup