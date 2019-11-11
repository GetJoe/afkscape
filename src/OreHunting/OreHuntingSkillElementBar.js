import React from 'react';

class OreHuntingSkillElementBar extends React.Component{
  render(){
    return(
      <div className="SkillElementBarContainer">
        <button onClick={()=>{this.props.parentCallback(0, 17.5)}} className="skillElementBarButton">Copper</button>
        <button onClick={()=>{this.props.parentCallback(1, 35)}} className="skillElementBarButton">Iron</button>
        <button onClick={()=>{this.props.parentCallback(2, 125)}} className="skillElementBarButton">Runite</button>
      </div>
    );
  }
}
export default OreHuntingSkillElementBar;
