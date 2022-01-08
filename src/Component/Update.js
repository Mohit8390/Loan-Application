import { event } from 'jquery';
import React, { Component } from 'react'
import { hashHistory } from 'react-router';
import { browserHistory } from 'history'
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Profileimg from '../Assets/Login/images/man.jpg'
import CustomerService from '../Services/CustomerService'
export default class Update extends Component {
   constructor(props) {
       super(props)
       this.state = {
        customerId:localStorage.getItem("customerId"), 
        customer:{
            firstName:'',
            lastName:'',
            mobileNumber:'',
            email:'',
            gender:'',
            password:'',
            age:'',
            customerId:''
        } ,
        firstName:'',
        lastName:'',
        mobileNumber:'',
        email:'',
        gender:'',
        password:'',
        age:'',  
       }
   }
   componentDidMount(){
        CustomerService.viewCustomerProfile(this.state.customerId).then((response)=>{
            this.setState({customer:response.data})
            this.setState({firstName:this.state.customer.firstName})
            this.setState({lastName:this.state.customer.lastName})
            this.setState({mobileNumber:this.state.customer.mobileNumber})
            this.setState({email:this.state.customer.email})
            this.setState({ password:this.state.customer.password})
            this.setState({age:this.state.customer.age})
        })
   }
fHandler=(e)=>{
    this.setState({firstName:e.target.value})  
}
lHandler=(e)=>{
    this.setState({lastName:e.target.value})
}
emailHandler=(e)=>{
    this.setState({email:e.target.value})
}
passwordHandler=(e)=>{
    this.setState({password:e.target.value})
}
ageHandler=(e)=>{
    this.setState({age:e.target.value})
}
genderHandler=(e)=>{
    this.setState({gender:e.target.value})
}
mobNoHandler=(e)=>{
    this.setState({mobileNumber:e.target.value})
}
 update=(event)=>{
     
     event.preventDefault();
     let customer={
         customerId:this.state.customerId,
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        mobileNumber:this.state.mobileNumber,
        email:this.state.email,
        gender:this.state.gender,
        password:this.state.password,
        age:this.state.age,  
     }
     
    CustomerService.updateCustomer(customer).then((response)=>{
        alert('Profile Updated Sucessfully Click on Cancel Button')
    })    
   }
    render() {
        return (
            <div className="mt-2">
                <div className="text-center mb-3">
                <img src={Profileimg} style={{width:'7rem'}}>
                </img>
                </div>
                <form>
  <div class="row mt-4 mb-3">
    <div class="col">
      <input type="text" className="form-control" defaultValue={this.state.customer.firstName} placeholder="First name" onChange={this.fHandler} />
    </div>
    <div className="col">
      <input type="text" class="form-control" placeholder="Last name" defaultValue={this.state.customer.lastName} onChange={this.lHandler}/>
    </div>
  </div>
  <div class="row mt-4 mb-3">
    <div class="col">
      <input type="email" className="form-control" placeholder="Email Address" defaultValue={this.state.customer.email} onChange={this.emailHandler}/>
    </div>
    <div className="col">
      <input type="password" class="form-control" placeholder="Password" defaultValue={this.state.customer.password} onChange={this.passwordHandler}/>
    </div>
  </div>
  <div class="row mt-4 mb-3">
    <div class="col">
      <input type="number" className="form-control" placeholder="Age" onChange={this.ageHandler} defaultValue={this.state.customer.age}/>
    </div>
    <div className="col">
      <input type="mobile" class="form-control" placeholder="Mobile Number" onChange={this.mobNoHandler} defaultValue={this.state.customer.mobileNumber}/>
    </div>
  </div>
  <div class="row text-center mt-4 mb-3">
    <div class="col">
    <label class="mr-sm-2" for="inlineFormCustomSelect">Gender</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={this.genderHandler} defaultValue={this.state.customer.gender}>
        <option selected>Choose...</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>
  </div>
  <div className="row mt-4 mb-5" >
                        <div className="col-sm-6 text-center" >
                            <button className="btn btn-outline-primary"  onClick={this.update} to='/loanApplication'>UPDATE</button>
                        </div>
                        <div className="col-sm-6 text-center">
                        <NavLink to='/loanApplication' style={{color:'white'}}><button className="btn btn-outline-danger" onClick={this.logout}>Cancel</button></NavLink>
                        </div>
                </div>
</form>
            </div>
        )
    }
}
