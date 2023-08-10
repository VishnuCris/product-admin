
import { Link } from "react-router-dom";

const logim = () => {

	return(
	 	 <div id="wrapper">
           <div class="page-wrapper auth_wrapper">
              <div class="content-area-wrapper">
                 <div class="content-wrapper">
                    <div class="container">
                       <div class="card products_blc">
                          <div class="card-body">
                             <div class="card_content_wrap text-center">
                                <div class="card_content_wrap text-center">
                                   <div class="logo_wrap">
                                      <img src="assets/images/thumbnails/Logo.svg" alt="logo" />
                                      <h6>Don’t have an account yet?<a class="signUpSpan" href="signup.html"><Link to="/signup">Signup</Link></a></h6>
                                   </div>
                                   <form>
                                      <div class="form_wrapper">
                                         <div class="mb-4"><label for="exampleFormControlInput1" class="form-label label_modify"><span class="mendatary">*</span> Email</label><input type="email" class="form-control input_modify" id="exampleFormControlInput1" name="email" placeholder="demo@demo.com" value="" /></div>
                                         <div class="mb-4"><label for="exampleFormControlInput2" class="form-label label_modify"> <span class="mendatary">*</span> Password</label><input type="password" class="form-control input_modify" name="password" id="exampleFormControlInput1" placeholder="********" value="" /></div>
                                         <div class="mb-0 auth_btn"><button type="button" class="theme-btn-primary theme-btn">Sign In</button></div>
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
        </div>
	)
}

export default logim