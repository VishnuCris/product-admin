
import { Link } from "react-router-dom";
import { useState } from 'react'

const Signup = () => {

   const [credentials,setCredentials] = useState({'email':'','password':'','confirmpassword':''});
   
   const handleOnChange = (e) =>{
      let obj = {};
      obj[e.target.name] = e.target.value;
      setCredentials({...credentials,...obj});
   }

   const handleSignup = () => {
      console.log(credentials)
      if(! credentials.email){
         alert('email is mendatary')
         return;
      }
      if(! credentials.password){
         alert('password is mendatary')
         return;
      }
      if(credentials.password != credentials.confirmpassword){
         alert("Re-type password doesn't matched")
         return;
      }

      if(!localStorage.getItem('user')){
         localStorage.setItem('user',JSON.stringify([{'email':credentials.email,'password':credentials.password}]));
      }else{
         let existingUsers = localStorage.getItem('user')
         if(existingUsers){
            existingUsers = JSON.parse(existingUsers)
            let matchedEmail = ''
            for(let existingUser of existingUsers){
               if(existingUser?.email == credentials.email){
                  matchedEmail = credentials.email
                  break;
               }
            }

            if(matchedEmail){
               alert('You are already registered with us !!!');
               return;
            }
            existingUsers.push({'email':credentials.email,'password':credentials.password})
            localStorage.removeItem('user')
            localStorage.setItem('user',JSON.stringify(existingUsers))
         }
      }
      localStorage.setItem('currentUser',credentials.email)
      
      window.location.href = 'list'
   }

	return(
		<div id="wrapper">
           <div className="page-wrapper auth_wrapper">
              <div className="content-area-wrapper">
                 <div className="content-wrapper">
                    <div className="container">
                       <div className="card products_blc">
                          <div className="card-body">
                             <div className="card_content_wrap text-center"></div>
                             <div className="card_content_wrap text-center">
                                <div className="logo_wrap">
                                   <img src="assets/images/thumbnails/Logo.svg" alt="logo" />
                                   <h6>Create an account</h6>
                                </div>
                                <form>
                                   <div className="form_wrapper">
                                      <div className="mb-4"><label for="exampleFormControlInput1" className="form-label label_modify"><span className="mendatary">*</span> Email</label><input type="email" name="email" placeholder="demo@gmail.com" className="form-control input_modify" id="exampleFormControlInput1" value={credentials.email} onChange={handleOnChange}/></div>
                                      <div className="mb-4"><label for="exampleFormControlInput1" className="form-label label_modify"> <span className="mendatary">*</span> Password</label><input type="password" placeholder="*****" name="password" className="form-control input_modify" id="exampleFormControlInput2" value={credentials.password} onChange={handleOnChange}/></div>
                                      <div className="mb-4"><label for="exampleFormControlInput1" className="form-label label_modify"> <span className="mendatary">*</span>Confirm Password</label><input type="password" name="confirmpassword" className="form-control input_modify" id="exampleFormControlInput3" placeholder="*****" value={credentials.confirmpassword} onChange={handleOnChange}/></div>
                                      <div className="mb-0 auth_btn"><button type="button" className="theme-btn-primary theme-btn" onClick={handleSignup}>Sign Up</button></div>
                                      <div className="already"> <a href="login.html"><Link to="/login">Already have account</Link></a></div>
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

export default Signup