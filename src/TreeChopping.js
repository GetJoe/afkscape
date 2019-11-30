import React from 'react';
import Cookies from 'universal-cookie';

//component imports
import Navigator from 'J:/afkscape/src/index.js';
import SkillElement from 'J:/afkscape/src/SkillElement.js';
import LevelTracker from 'J:/afkscape/src/LevelTracker.js';
import Inventory from 'J:/afkscape/src/Inventory.js';

//image imports
import Regular_Tree_Art from "J:/afkscape/src/img/Regular_Tree.png";
import Oak_Tree_Art from "J:/afkscape/src/img/Oak_Tree.png";
import Willow_Tree_Art from "J:/afkscape/src/img/Willow_Tree.png";

const cookies = new Cookies();
var skill_element_img = [Regular_Tree_Art, Oak_Tree_Art, Willow_Tree_Art]
const regularTreeName = 'Regular Trees';

//renders the sidebar with buttons based on total exp
class SkillElementBar extends React.Component {
  render(){
    return(
      <div className ="SideBar">
        <button className="side_button" onClick={() => {this.props.ParentCallBack(0, 25)}}>Regular Tree</button>
        <button className="side_button" onClick={() => {this.props.ParentCallBack(1, 37.5)}} disabled={this.props.treeChoppingExp < 2411}>Oak Tree</button>
        <button className="side_button" onClick={() => {this.props.ParentCallBack(2, 67.5)}} disabled={this.props.treeChoppingExp < 13363}>Willow Tree</button>
      </div>
    );
  }
}

//render the available equipment
class EquipmentBar extends React.Component{
  render(){
    return(
      <div className = "EquipmentBar">
        <button className="equipment_button" onClick={() => {this.props.ParentCallBack(0)}}>Bronze Axe</button>
        <button className="equipment_button" onClick={() => {this.props.ParentCallBack(1)}}>Mithril Axe</button>
        <button className="equipment_button" onClick={() => {this.props.ParentCallBack(2)}}>Rune Axe</button>
        <button className="equipment_button" onClick={() => {this.props.ParentCallBack(3)}}>Dragon Axe</button>
      </div>
    );
  }
}

//Parent component for the tree chopping activity
class TreeChopping extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      treeChoppingExp: this.props.treeChoppingExp,
      treeChoppingLevel: 1,
      //Tree 0 = Regular, 1 = Oak, 2 = Willow, . . .
      current_tree_number: 0,
      current_tree_xp: 25,
      //Axe Type 0 = Bronze, .... modifies exp gained per click
      current_axe_number: 0,

      //state to determine when to return to navigator
      renderNavigator: false

    }
  }

  //COMPONENT FUNCTIONS START
  handleSkillElementClick = (xpValue, logType) => {
    this.setState({treeChoppingExp: this.state.treeChoppingExp + xpValue});
    localStorage.setItem('normalLogs', parseInt(localStorage.getItem('normalLogs')) + 1);
  }

  handleTreeMenuCallback = (treevalue, xpvalue) => {
    console.log(localStorage.getItem('normalLogs') == undefined);
    this.setState({current_tree_number: treevalue, current_tree_xp: xpvalue})
  }

  handleEquipMenuCallBack = (equipValue) => {
    this.setState({current_axe_number: equipValue})
  }

  handleLevelTracker = (level) => {
    this.setState({treeChoppingLevel: level})
  }
  //COMPONENT FUNCTIONS END


  render(){

    if(this.state.renderNavigator){
      localStorage.setItem('treeChoppingExp', this.state.treeChoppingExp);
      return(
        <Navigator />
      );
    }

    return(
      <div className="tree_chopping_container" id="tree_chopping_container">

        <div className="skillElement" onClick={() => {this.handleSkillElementClick(this.state.current_tree_xp * (this.state.current_axe_number + 1))}}>
          <SkillElement skillIndex={this.state.current_tree_number} skill_element_img={skill_element_img} />
        </div>

        <SkillElementBar ParentCallBack={this.handleTreeMenuCallback} treeChoppingExp={this.state.treeChoppingExp} />

        <EquipmentBar ParentCallBack={this.handleEquipMenuCallBack} />

        <LevelTracker skillName={"TreeChopping"} currentLevel={this.state.treeChoppingLevel} currentExp={this.state.treeChoppingExp} parentCallback={this.handleLevelTracker} />

        <Inventory normalLogs={parseInt(localStorage.getItem('normalLogs'))} />

        <div className="home_button_container">
          <button className="home_button" onClick={()=>{this.setState({renderNavigator: true})}}>Home</button>
        </div>

      </div>
    );
  }
}
export default TreeChopping;
