
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'

const Login = () => {

   const [credentials,setCredentials] = useState({'email':'','password':''});
   
   const handleOnChange = (e) =>{
      let obj = {};
      obj[e.target.name] = e.target.value;
      setCredentials({...credentials,...obj});
   }

   const handleLogin = () => {
      if(! credentials.email){
         alert('email is mendatary')
         return;
      }
      if(! credentials.password){
         alert('password is mendatary')
         return;
      }
      let users =  localStorage.getItem('user');
      if(!users){
         alert('you are not signed up !!!')
         return;
      }
      users = JSON.parse(users)

      let matchedEmail = ''
      let matchedPassword = ''
      for(let user of users){
         if(user?.email == credentials.email){
            matchedEmail = credentials.email
         }
         if(user.password == credentials.password){
            matchedPassword = credentials.password
         }
         if(matchedEmail && matchedPassword)
            break;
      }

      if(! matchedEmail){
         alert('You are not registered with us !!!');
         return;
      }else if(! matchedPassword){
         alert('Wrong Password');
         return;
      }
      localStorage.setItem('currentUser',credentials.email)
      window.location.href = "/list"
   }

   useEffect(() => {
      localStorage.removeItem('currentUser')
   },[])

	return(
	 	 <div id="wrapper">
           <div className="page-wrapper auth_wrapper">
              <div className="content-area-wrapper">
                 <div className="content-wrapper">
                    <div className="container">
                       <div className="card products_blc">
                          <div className="card-body">
                             <div className="card_content_wrap text-center">
                                <div className="card_content_wrap text-center">
                                   <div className="logo_wrap">
                                      <img src="assets/images/thumbnails/Logo.svg" alt="logo" />
                                      <h6>Don’t have an account yet?<a className="signUpSpan" href="signup.html"><Link to="/signup">Signup</Link></a></h6>
                                   </div>
                                   <form>
                                      <div className="form_wrapper">
                                         <div className="mb-4">
                                             <label for="exampleFormControlInput1" className="form-label label_modify">
                                                <span className="mendatary">*</span> 
                                                   Email
                                             </label>
                                             <input type="email" className="form-control input_modify" id="exampleFormControlInput1" name="email" placeholder="demo@demo.com" value={credentials.email} onChange={handleOnChange}/>
                                          </div>
                                         <div className="mb-4">
                                             <label for="exampleFormControlInput2" className="form-label label_modify">
                                                <span className="mendatary">*</span>
                                                   Password
                                             </label>
                                             <input type="password" className="form-control input_modify" name="password" id="exampleFormControlInput1" placeholder="********" value={credentials.password} onChange={handleOnChange}/>
                                          </div>
                                         <div className="mb-0 auth_btn">
                                             <button type="button" className="theme-btn-primary theme-btn" onClick={handleLogin}>Sign In</button>
                                          </div>
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

export default Login