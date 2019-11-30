import React from 'react';


const buildInventoryState = () => ({
  normalLogs: (localStorage.getItem('normalLogs') == undefined) ? 0 : parseInt(localStorage.getItem('normalLogs')),
  oakLogs: (localStorage.getItem('oakLogs') == undefined) ? 0 : parseInt(localStorage.getItem('oakLogs'))
});


class Inventory extends React.Component {
  constructor(props){
    super(props);

    this.state={...buildInventoryState()}
  }


  render(){
    return(
      <div className="inventory_display">
        <div className="inventory_item">
          Normal Logs x {this.props.normalLogs}
          Oak Logs x {this.props.oakLogs}
        </div>
      </div>

    );
  }
}
export default Inventory;
