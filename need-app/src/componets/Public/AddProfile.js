// import React, { Component,useState, Fragment } from 'react'
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import axios from "axios";
// import {Redirect,Link} from 'react-router-dom'
// // import HomeNav from './HomeNav'
// // import logo from '../assets/logo.png'
// class AddProfile extends Component {
//   constructor(props) {
//     super(props);

//     this.state={
//         id: "",
//         name: "",
//         dob: "",
//         address: "",
//         phone: "",
//         email: "",
//       isAuth: false,
//     };
//     this.onChange = this.onChange.bind(this);
//   }
//   onChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//  }
//  onSubmit = async (e) => {
//   e.preventDefault();

//   const register={
//         name: this.state.name,
//         address: this.state.address,
//         phone: this.state.phone,
//         dob: this.state.dob,
//         email: this.state.email,
        
//   };
//   const body = JSON.stringify(register);
//   const token = sessionStorage.getItem("token");
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   }
//   console.log(token);
//   try {
//     const res = await axios.post(
//                                  `http://localhost:5000/api/v1/suppliers`,
//                                   body,
//                                   config
//                                  );
//    sessionStorage.setItem("isAuth", true);
//    this.setState({
//                   isAuth: true,
//                 });
// }catch (error) {
//                 alert("Sorry Something Wrong!!");
//                }
//  }
//   render() {
//     return (
//       <Fragment>
//       { this.state.isAuth ?
//        ( <Redirect isAuth={this.state.isAuth} to="/ngo/Home" />
//        ):
//        (
//         <div className="container ">
//         <div className="container mt-5  ">
//           <div className=" mt-5 pt-5">
//             {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
//             <div className="jumbotron" id="login-second">
//               <div className="">
//                 <div className="wrapper wrapper--w900">
//                   <div className="card cardH card-6 bg-dark">
//                     <div className="card-heading">
//                       <h2 className="title text-primary m-3"> NGO Profile</h2>
//                     </div>
//                     <div className="card-body  text-dark">
//                       <form
//                         className="form-horizontal"
//                         onSubmit={this.onSubmitDeatils}
//                       >
//                         {/* <fieldset> */}
//                         <div className="form-group">
//                           <label
//                             className="control-label"
//                             htmlFor="Date Of Birth"
//                           >
//                             <h5>Name</h5>
//                           </label>
//                           <div className="">
//                             <div className="input-group">
//                               <div className="input-group-addon">
//                                 <i className="fa fa-user fa-2x p-1"></i>
//                               </div>
//                               <input
//                                 id="Name"
//                                 name="name"
//                                 type="text"
//                                 placeholder=""
//                                 className="form-control input-md"
//                                 value={this.state.name}
//                                 onChange={this.onChange}
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         <div className="form-group">
//                           <label
//                             className="control-label"
//                             htmlFor="Date Of Birth"
//                           >
//                             <h5>Date Of Birth</h5>
//                           </label>
//                           <div className="">
//                             <div className="input-group">
//                               <div className="input-group-addon">
//                                 <i className="fa fa-birthday-cake fa-2x p-1"></i>
//                               </div>
//                               <input
//                                 id="Date Of Birth"
//                                 name="dob"
//                                 type="date"
//                                 placeholder=""
//                                 value={this.state.dob}
//                                 onChange={this.onChange}
//                                 className="form-control input-md"
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         <div className=" form-group">
//                           <label
//                             className="control-label col-xs-12"
//                             htmlFor="Permanent Address"
//                           >
//                             <h5>Permanent Address</h5>
//                           </label>

//                           <div className="row mt-2">
//                             <div className="col-md-12  col-xs-12">
//                               <input
//                                 id="Permanent Address"
//                                 name="address"
//                                 type="text"
//                                 placeholder=""
//                                 value={this.state.address}
//                                 onChange={this.onChange}
//                                 className="form-control input-md "
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         <div className="form-group">
//                           <label
//                             className=" control-label"
//                             htmlFor="Phone number "
//                           >
//                             <h5>Contact Detail</h5>{" "}
//                           </label>
//                           <div className="">
//                             <div className="input-group m-1 mb-3">
//                               <div className="input-group-addon">
//                                 <i className="fa fa-phone fa-2x p-1"></i>
//                               </div>
//                               <input
//                                 id="Phone number "
//                                 name="phone"
//                                 type="text"
//                                 placeholder=""
//                                 value={this.state.phone}
//                                 onChange={this.onChange}
//                                 className="form-control input-md"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div className="form-group">
//                           <div className="">
//                             <div className="input-group">
//                               <div className="input-group-addon">
//                                 <i className="fa fa-envelope-o fa-2x p-1"></i>
//                               </div>
//                               <input
//                                 id="Email Address"
//                                 name="email"
//                                 type="text"
//                                 placeholder=""
//                                 value={this.state.email}
//                                 onChange={this.onChange}
//                                 className="form-control input-md"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div className="form-group">
//                           <div className="">
//                             <div className="input-group">
//                               <div className="input-group-addon">
//                                 Photo Upload :
//                               </div>
//                               <input
//                                 name="file"
//                                 type="file"
//                                 placeholder=""
//                                 id="file"
//                                 onChange={this.onChangeHandler}
//                                 className="form-control-file input-md"
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         {/* <div className="form-group row justify-content-center"> */}
//                         {/* <div className="col-md-6 "> */}
//                         {/* <a className="btn btn-success" type="submit">
//                 <span className="glyphicon glyphicon-thumbs-up"></span>{" "}
//                 Submit
//               </a> */}
//                         <div className="form-group">
//                           <button
//                             type="submit"
//                             value="Submit"
//                             name="submit"
//                             className="btn btn-dark float-right mb-1"
//                             // style={{
//                             //   backgroundColor: social,
//                             // }}
//                           >
//                             Submit
//                           </button>
//                         </div>
//                         {/* </div> */}
//                         {/* </div> */}
//                         {/* </fieldset> */}
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       )};
//       </Fragment>
//     )
//   }

// }
// export default AddProfile
import React, { Component,useState, Fragment } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import axios from "axios";
import {Redirect,Link} from 'react-router-dom'
// import HomeNav from './HomeNav'
// import logo from '../assets/logo.png'
class AddProfile extends Component {
  constructor(props) {
    super(props);

    this.state={
      name:"",
      phone:"",
      email:"",
      dob:"",
      address:"",
      isAuth: false,
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
 }
 onSubmit = async (e) => {
  e.preventDefault();

  const register={
    name:this.state.name,
    phone:this.state.phone,
    email:this.state.email,
    dob:this.state.dob,
    address:this.state.address
  };
  const body = JSON.stringify(register);
  const token = sessionStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }
  console.log(token);
  try {
    const res = await axios.post(
                                 `http://localhost:5000/api/v1/public`,
                                  body,
                                  config
                                 );
   sessionStorage.setItem("isAuth", true);
   this.setState({
                  isAuth: true,
                });
}catch (error) {
                alert("Sorry Something Wrong!!");
               }
 }
  render() {
    return (
      <Fragment>
      { this.state.isAuth ?
       ( <Redirect isAuth={this.state.isAuth} to="/ngo/Home" />
       ):
       (
      <div>
                    
        <form method="post" onSubmit={this.onSubmit}>
          <div className="container itmtop">
          <div class="page-wrapper p-t-50 p-b-50">
              <div class="wrapper wrapper--w900 ">
                <div class="card cardH card-6 ">
			<div className="mx-auto"> 
              {/* <img src={logo} style={{width:'180px'}}></img> <hr/> */}
              <div class="card-heading m-4">
                    <h2 class="title text-dark">Add Profile</h2>
                  </div>
               
                  <div class="card-body">
                  <div class="form-row frow">
                  <div class="name">name</div>
                 <div class="value">
                <input 
                type="text" 
                class="input--style-6"
                name="name"
                value={this.state.name}
                onChange={this.onChange} 
                required/>
                </div>
                </div>

                    

                   
                
                
                <div class="form-row frow">
                  <div class="name">phone:</div>
                 <div class="value">
                  <input 
                  type="text" 
                  className="input--style-6" 
                  placeholder="contact number"
                  name="phone" 
                  value={this.state.phone}
                  onChange={this.onChange} 
                  required/>
                  </div>
                  </div>
                
                
                  <div class="form-row frow">
                  <div class="name">email:</div>
                 <div class="value">
                  <input 
                  type="text" 
                  className="input--style-6" 
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange} 
                  required/>
                  </div>
                  </div>
                  <div className="">
                            <div className="input-group">
                              <div className="input-group-addon">
                               <i className="fa fa-birthday-cake fa-2x p-1"></i>
                              </div>
                             <input
                                id="Date Of Birth"
                                name="dob"
                                type="date"
                                placeholder=""
                                value={this.state.dob}
                                onChange={this.onChange}
                                className="form-control input-md"
                              />
                            </div>
                          </div></div>

                  
                  <div class="form-row frow">
                  <div class="name">address:</div>
                 <div class="value">                         
               <textarea 
               placeholder="Address"
               className="input--style-6"
               name="address" 
               value={this.state.address}
               onChange={this.onChange}>
               </textarea>
               </div>
                </div>


                <div class="card-footer row">
                 <input type="submit" className="btn btn-blue  col-md-3" value="Register" name="submit"></input>
                  <input type="reset" className="btn btn-dark col-md-3 ml-5" value="Reset"></input>
                </div>
                {/* <p className="mx-auto"> Already have an account?<Link to="/login"> Sign In</Link></p> */}
					  </div>
                      </div>
          </div>
          </div>
          </div>
          
          
        </form>
      </div>
      )};
      </Fragment>
    )
  }

}
export default AddProfile
