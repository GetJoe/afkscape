import React from 'react';
import Cookies from 'universal-cookie';


//component imports
import Navigator from 'J:/afkscape/src/index.js';
import SkillElement from 'J:/afkscape/src/SkillElement.js';
import OreEquipmentBar from 'J:/afkscape/src/OreHunting/OreEquipmentBar.js';
import LevelTracker from 'J:/afkscape/src/LevelTracker.js';
import OreHuntingSkillElementBar from 'J:/afkscape/src/OreHunting/OreHuntingSkillElementBar.js';

//image imports
import Unmined_Copper from 'J:/afkscape/src/img/unmined_cu.png'
import Unmined_Iron from 'J:/afkscape/src/img/unmined_fe.png'
import Unmined_Runeite from 'J:/afkscape/src/img/unmined_runeite.png'

const cookies = new Cookies();
var skill_element_img = [Unmined_Copper, Unmined_Iron, Unmined_Runeite]

class OreHunting extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      renderNavigator: false,
      skillIndex: 0,
      skillExpValue: 17.5,


      oreHuntingExp: this.props.oreHuntingExp,
      oreHuntingLevel: 1,
      equipmentValue: 0
    }
  }

  handleSkillElementSelect = (skillIndex, xpValue) => {
    this.setState({skillIndex: skillIndex, skillExpValue: xpValue});
  }

  handleEquipmentSelect = (equipmentSelected) => {
    this.setState({equipmentValue: equipmentSelected})
  }

  handleLevelTracker = (level) => {
    this.setState({oreHuntingLevel: level})
  }

  xpIncrease = xpval => {
    this.setState({oreHuntingExp: this.state.oreHuntingExp + xpval})
  }

  render(){

    if(this.state.renderNavigator){
      //cookies.set('oreHuntingExp', this.state.oreHuntingExp, {path: '/'});
      localStorage.setItem('oreHuntingExp', this.state.oreHuntingExp);
      return(
        <Navigator />
      );
    }

    return(
      <div className="oreHuntingContainer">

        <div className="skillElement" onClick={() => {this.xpIncrease(this.state.skillExpValue * (this.state.equipmentValue + 1))}}>
          <SkillElement skillIndex={this.state.skillIndex} skill_element_img={skill_element_img} />
        </div>

      <OreHuntingSkillElementBar parentCallback={this.handleSkillElementSelect} oreHuntingLevel={this.state.oreHuntingLevel} />

      <OreEquipmentBar parentCallback={this.handleEquipmentSelect} />

      <LevelTracker skillName={'OreHunting'} currentLevel={this.state.oreHuntingLevel} currentExp={this.state.oreHuntingExp} parentCallback={this.handleLevelTracker} />



      <div className="homeButtonContainer">
          <button className="home_button" onClick={()=>{this.setState({renderNavigator: true})}}>Home</button>
      </div>

      </div>
    );
  }
}
export default OreHunting;
