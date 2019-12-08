import React from 'react';


class SafeCrackingSkillBar extends React.Component{
  render(){
    return(
      <div className="SkillBarContainer">
        <button onClick={()=>{this.props.parentCallback(0, 17.5)}} className="skillBarButton">Bare Safe</button>
        <button onClick={()=>{this.props.parentCallback(1, 35)}} className="skillBarButton" disabled={this.props.oreHuntingLevel < 15}>Light Safe</button>
        <button onClick={()=>{this.props.parentCallback(2, 125)}} className="skillBarButton" disabled={this.props.oreHuntingLevel < 40}></button>
      </div>
    );
  }
}
export default SafeCrackingSkillBar;
}
