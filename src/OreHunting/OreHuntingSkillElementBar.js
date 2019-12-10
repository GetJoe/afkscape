import React from 'react';

class OreHuntingSkillElementBar extends React.Component{
  render(){
    return(
      <button className="skillBarButton" onClick={()=>{this.props.parentCallback(0, 17.5)}}>Copper</button>
      <button className="skillBarButton" onClick={()=>{this.props.parentCallback(1, 35)}}>Copper</button>
      <button className="skillBarButton" onClick={()=>{this.props.parentCallback(2, 125)}}>Copper</button>
    );
  }
}

export default OreHuntingSkillElementBar;
