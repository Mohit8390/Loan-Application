import React, { Component } from 'react'
import { hashHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import Profileimg from '../Assets/Login/images/man.jpg'
import CustomerService from '../Services/CustomerService'
export default class Profile extends Component {
   constructor(props) {
       super(props)
       this.state = {
        customerId:localStorage.getItem("customerId"), 
        customer:{}    
       }
   }
   componentDidMount(){
        CustomerService.viewCustomerProfile(this.state.customerId).then((response)=>{
            this.setState({customer:response.data})
        })
   }
   logout=()=>{
    //    this.props.router.push("/");
    // this.hashHistory.push('/');
   }
    render() {
        return (
            <div className="mt-2">
                <div className="text-center">
                <img src={Profileimg} style={{width:'7rem'}}>
                </img>
                </div>
                <div className="row mt-2 text-center">
                    <h3 className="fw-bold">{this.state.customer.firstName} {this.state.customer.lastName}</h3>
                </div>
                <div className="row text-center" style={{paddingTop:"-0.4rem"}}>
                    <h5 className="fw-normal">{this.state.customer.email}</h5>
                </div>
                <div className="row text-center" style={{paddingTop:"-0.4rem"}}>
                    <h6 className="fw-normal">+91{this.state.customer.mobileNumber}</h6>
                </div>
                <div className="row text-center" style={{paddingTop:"-0.4rem"}}>
                    <h6 className="fw-normal">Gender : {this.state.customer.gender}</h6>
                </div>
                <div className="row text-center" style={{paddingTop:"-0.4rem"}}>
                    <h6 className="fw-normal">Age : {this.state.customer.age}</h6>
                </div>
                <div className="row mt-4 mb-5" >
                        <div className="col-sm-6 text-center" >
                            <NavLink to="/updateCustomer"><button className="btn btn-outline-primary">UPDATE</button></NavLink>
                        </div>
                        <div className="col-sm-6 text-center">
                        <NavLink to='/' style={{color:'white'}}><button className="btn btn-outline-danger" onClick={this.logout}>Logout</button></NavLink>
                        </div>
                </div>
            </div>
        )
    }
}
