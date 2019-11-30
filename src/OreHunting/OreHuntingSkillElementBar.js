import React from 'react';

class OreHuntingSkillElementBar extends React.Component{


  render(){
    console.log("current level:", this.props.oreHuntingLevel)
    return(
      <div className="SkillElementBarContainer">
        <button onClick={()=>{this.props.parentCallback(0, 17.5)}} className="skillElementBarButton">Copper</button>
        <button onClick={()=>{this.props.parentCallback(1, 35)}} className="skillElementBarButton" disabled={this.props.oreHuntingLevel < 15}>Iron</button>
        <button onClick={()=>{this.props.parentCallback(2, 125)}} className="skillElementBarButton" disabled={this.props.oreHuntingLevel < 40}>Runite</button>
      </div>
    );
  }
}
export default OreHuntingSkillElementBar;
