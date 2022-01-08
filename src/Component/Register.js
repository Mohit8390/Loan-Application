import { event } from 'jquery'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import CustomerService from '../Services/CustomerService'
import '../Assets/Login/css/main.css'
import '../Assets/Login/css/util.css'
import '../Assets/Login/js/main.js'
import '../Assets/Login/images/icons/favicon.ico'
import '../Assets/Login/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../Assets/Login/fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import '../Assets/Login/vendor/animate/animate.css'
import '../Assets/Login/vendor/css-hamburgers/hamburgers.min.css'
import '../Assets/Login/vendor/animsition/css/animsition.min.css'
import '../Assets/Login/vendor/select2/select2.min.css'
import '../Assets/Login/vendor/daterangepicker/daterangepicker.css'
import '../Assets/Login/vendor/bootstrap/css/bootstrap.min.css'
export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {            
                age: 0,
                email: "",
                firstName: '',
                gender: '',
                lastName: '',
                mobileNumber: '',
                password: '',
                ageError: '',
                emailError: "",
                firstNameError: '',
                genderError: '',
                lastNameError: '',
                mobileNumberError: '',
                passwordError: ''
        }
    }
    validate(){
              let ageError= '';
              let emailError= "";
              let firstNameError= '';
              let genderError='';
              let lastNameError= '';
              let mobileNumberError= '';
              let passwordError= '';
            if(this.state.firstName===""){
                firstNameError="Please Enter the First Name";
            }
            else if(this.state.firstName.length<3){
                firstNameError="First Name should be more than 3 characters";
            }
            if(this.state.lastName===""){
                lastNameError="Please Enter the Last Name";
            }
            else if(this.state.lastName.length<3){
                lastNameError="Last Name should be more than 3 characters";
            }
            if(!this.state.age){
                ageError="Please Enter Age"
            }
            else if(isNaN(this.state.age)){
                ageError="Enter Age in Digits"
            }
            if(!this.state.gender){
                genderError="Please Enter Gender"
            }
            if(this.state.email===""){
                emailError="please enter EmailId";
            }
            else if(!this.state.email.match( /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)){
                emailError="please enter valid EmailId";
            }
    
            if(this.state.password===""){
                passwordError="please set the password";
            }
            else if(this.state.password.length<6){
                passwordError="password should be more than 6 characters";
            }
            
            if(this.state.mobileNumber.value===""){
                mobileNumberError="please enter your mobile number";
            }
            else if(!this.state.mobileNumber.match(/^\d{10}$/)) {
                mobileNumberError="please enter valid mobile number"; 
        }
            if(firstNameError || lastNameError || ageError || genderError || emailError || passwordError || mobileNumberError){
                this.setState({
                    firstNameError,lastNameError,ageError,genderError,emailError,passwordError,mobileNumberError
                })
                return false;
            }
            return true;
    }
    changeEmailHandler=(event)=>{
        this.setState({email:event.target.value,emailError:''})        
    }

    changePasswordHandler=(event)=>{
        this.setState({password:event.target.value,passwordError:''})
    }

    fNameHandler=(event)=>{
        this.setState({firstName:event.target.value,firstNameError:''})
    }

    lNameHandler=(event)=>{
        this.setState({lastName:event.target.value,lastNameError:''})
    }
    ageHandler=(event)=>{
        this.setState({age:event.target.value,ageError:''})
    }

    genderHandler=(event)=>{
        this.setState({gender:event.target.value,genderError:''})
    }

    mobileHandler=(event)=>{
        this.setState({mobileNumber:event.target.value,mobileNumberError:''})
    }

    register=(e)=>{
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
        let customer={
            age: this.state.age,
                email: this.state.email,
                firstName: this.state.firstName,
                gender: this.state.gender,
                lastName: this.state.lastName,
                mobileNumber: this.state.mobileNumber,
                password: this.state.password
        }
        
        CustomerService.addCustomer(customer).then((response)=>{
             alert("customer Added Sucesfully")
             console.log(response.data)
             this.props.history.push('/')
         });}
         else{
             alert("Wrong Data")
         }
     }
    render() {   
        return (
                    <div className="limiter">
                        <div className="container-fluid-login100" style={{ backgroundImage: `url('/images/bg-01.jpg')`}} >
                        <div className="wrap-login100 p-t-30 p-b-50" style={{width:"50rem",marginLeft:"15.5rem"}}>
                            <h2 className="login100-form-title p-b-41" style={{color:"black"}}>
                                Register Customer Account
				            </h2>
                            <form className="login100-form validate-form p-b-33 p-t-5" >
                                <div className="row">
                                <div className="wrap-input100 col-sm-6 validate-input" data-validate="Enter username">
                                    <input className="input100" type="text" name="username" placeholder="Email-Id" onChange={this.changeEmailHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe818;"></span> 
                                    <div style={{fontSize:"2",color:"red",marginLeft:"5.5rem"}}>{this.state.emailError}</div>                                   
                                </div>

                                <div className="wrap-input100 col-sm-6 validate-input" data-validate="Enter password">
                                    <input className="input100" type="password" name="pass" placeholder="Password" onChange={this.changePasswordHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                    <div style={{fontSize:"2",color:"red",marginLeft:"5.5rem"}}>{this.state.passwordError}</div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="wrap-input100 col-sm-6 validate-input" data-validate="Enter First Name">
                                    <input className="input100" type="text" name="pass" placeholder="First Name" onChange={this.fNameHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                                    <div style={{fontSize:"2",color:"red",marginLeft:"5.5rem"}}>{this.state.firstNameError}</div>
                                </div>
                                <div className="wrap-input100 col-sm-6 validate-input" data-validate="Enter Last Name">
                                    <input className="input100" type="text" name="pass" placeholder="Last Name" onChange={this.lNameHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                                    <div style={{fontSize:"2",color:"red",marginLeft:"5.5rem"}}>{this.state.lastNameError}</div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="wrap-input100 col-sm-6 validate-input" data-validate="Age">
                                    <input className="input100" type="number" name="pass" placeholder="Age" onChange={this.ageHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe836;"></span>
                                    <div style={{fontSize:"2",color:"red",marginLeft:"5.5rem"}}>{this.state.ageError}</div>
                                </div>
                                <div className="wrap-input100 col-sm-6 validate-input" data-validate="Gender">
                                    <input className="input100" type="text" name="pass" placeholder="Gender" onChange={this.genderHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe82b;"></span>
                                    <div style={{fontSize:"2",color:"red",marginLeft:"5.5rem"}}>{this.state.genderError}</div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-sm-12 wrap-input100 validate-input" data-validate="Mobile Number" style={{width:"0.1rem"}}>
                                    <input className="input100" type="mobile" name="mobile" placeholder="Mobile Number" onChange={this.mobileHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe830;"></span>
                                    <div style={{fontSize:"2",color:"red",marginLeft:"5.5rem"}}>{this.state.mobileNumberError}</div>
                                </div>
                                </div>
                                <div className="container-login100-form-btn m-t-32">
                                    <button className="login100-form-btn" onClick={this.register}>
                                        Register
						</button>
                                </div>
                                <div style={{paddingTop:"1.3rem"}}>
                                    <center><NavLink to="/">Back to Login Page</NavLink></center>                                         
                                </div>
                            </form>
                            </div> 
                    </div>
                    </div>                      
        )
    }
}
