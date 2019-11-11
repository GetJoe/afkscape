import React from 'react';

class SkillElement extends React.Component {
  constructor(props){
    super(props);
    console.log(this.skill_element_img);
    console.log(this.props.skillIndex);
  }
  render(){
    return(
      <div>
        <img src={this.props.skill_element_img[this.props.skillIndex]} alt="" />
      </div>
    );
  }
}

export default SkillElement;
