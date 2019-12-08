import React from 'react';


//component imports
import Navigator from 'J:/afkscape/src/index.js';
import SkillElement from 'J:/afkscape/src/SkillElement.js';


//image imports
import Safe_One from 'J:/afkscape/src/img/safe_one.png';

var skill_element_img = [Safe_One]

class SafeCracking extends React.Component{
  constructor(props){
    super(props);
    this.state={
      renderNavigator: false,
      skillIndex: 0,
      skillExpValue: 18.5,
    }
  }

  handleSkillElementSelect = (skillIndex, xpValue) => {
    this.setState({skillIndex: skillIndex, skillExpValue: xpValue});
  }


  render(){
    if(this.state.renderNavigator){
      return(
        <Navigator />
      );
    }
    return(
      <div className="safeCrackingContainer">
        <div className="skillElement">
          <SkillElement skillIndex={this.state.skillIndex} skill_element_img={skill_element_img} />
        </div>



        <div className="homeButtonContainer">
            <button className="home_button" onClick={()=>{this.setState({renderNavigator: true})}}>Home</button>
        </div>
      </div>
    );
  }
}
export default SafeCracking;
