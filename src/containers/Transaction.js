import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withdrawFunds }  from '../actions/index';

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  clickAction = (val) => {
    this.toggle();
    this.props.withdrawFunds(val);
    return;
  }
  

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Withdraw Funds</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Withdraw Funds</ModalHeader>
          <ModalBody>
           Please select how much you want to withdraw from your {this.props.account.accountType} account. Your current balance is {this.props.account.balance}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{this.clickAction(5)}}>$5</Button>{' '}
            <Button color="success" onClick={()=>{this.clickAction(10)}}>$10</Button>{' '}
            <Button color="info" onClick={()=>{this.clickAction(20)}}>$20</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
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
        withdrawFunds: withdrawFunds
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
