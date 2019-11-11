import React from 'react';



class SkillElementButton extends React.Component {
  render(){
    return(
      <button className="skillElementButton"
        onClick={()=>{this.props.parentCallback({this.props.skillIndex},{this.props.skillExpValue})}}
        disabled={{this.props.currentSkillExp} < {this.props.lvlReq}} > {this.props.skillElementName} </button>
    );
  }
}
export default SkillElementButton;
