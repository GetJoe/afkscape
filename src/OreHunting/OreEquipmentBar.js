import React from 'react';

class OreEquipmentBar extends React.Component {
  render(){
    return(
      <div>
        <button className="equipmentBarButton" onClick={()=>{this.props.parentCallback(0)}}>Bronze Pickaxe</button>
        <button className="equipmentBarButton" onClick={()=>{this.props.parentCallback(1)}}>Mithril Pickaxe</button>
        <button className="equipmentBarButton" onClick={()=>{this.props.parentCallback(2)}}>Runite Pickaxe</button>
        <button className="equipmentBarButton" onClick={()=>{this.props.parentCallback(3)}}>Dragon Pickaxe</button>
      </div>
    );
  }
}

export default OreEquipmentBar;
