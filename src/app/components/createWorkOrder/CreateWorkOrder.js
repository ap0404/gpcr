import React, { Component } from 'react';
import PaginationTable from './PaginationTable/PaginationTable';
import './CreateWorkOrder.css';
import CreateWorkOrderHeader from "../header/Header";
import WorkOrderForm from "./WorkOrderForm/WorkOrderForm";

class CreateWorkOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
          items:[]
         };
    this.getFormItems = this.getFormItems.bind(this);
    this.editSubmittedData = this.editSubmittedData.bind(this);
  }

getFormItems (items) {
   this.setState({
        items : items
    });
}
  editSubmittedData(submittedData) {
    this.setState({
        items : submittedData
    });
  }

  render() {
    const headerTitle = 'PCR Aliquot Services-Create Work Order';
    return (
      <div>
        <CreateWorkOrderHeader headerTitle={headerTitle}/>

        <div className="container">
          <WorkOrderForm  items={this.state.items}  getFormItems={this.getFormItems}/>
        </div>

        <div className="container">
          <PaginationTable submittedData={this.state.items} editSubmittedData={this.editSubmittedData}/>
        </div>

      </div>
    );
  }
}


export default CreateWorkOrder;