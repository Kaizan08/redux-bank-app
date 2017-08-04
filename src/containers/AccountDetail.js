import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Transaction from './Transaction';

class AccountDetail extends Component {
    render() {
        if(!this.props.user) {
                return <div>Please select a user...</div>       
        } //get user id from params of URL
        
        return (
        <div className="col-md-6">
        <div className= "card">
          <div className= "card-block">
            <h4 className= "card-title">Account Information</h4>
            <h6 className= "card-subtitle mb-2 text-muted">{this.props.account.accountType} for {this.props.user.name}</h6>
            <div className= "card-text">
              ${this.props.account.balance}
            </div>
          </div>
          <Transaction/>
          <Link className="btn btn-primary" to="/users" >Back to List of Users</Link>
        </div> 
 

      </div>
        );
    }
}



function mapStateToProps(state) {
  return {
    user: state.selectedUser,
    account: state.selectedAccount
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail);
