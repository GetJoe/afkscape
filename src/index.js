import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'universal-cookie';
import {Alert} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

import Game_Logo from "J:/afkscape/src/img/aslogo.png";

//imports for game components
import TreeChopping from 'J:/afkscape/src/tree_chopping.js'
import OreHunting from 'J:/afkscape/src/OreHunting/OreHunting.js'

const cookies = new Cookies();

const buildNavigatorState = () => ({
  renderForest: false,
  renderMine: false,

  treeChoppingExp: (cookies.get('treeChoppingExp') == undefined) ? 0 : parseInt(cookies.get('treeChoppingExp')),
  oreHuntingExp: (cookies.get('oreHuntingExp') == undefined) ? 0 : parseInt(cookies.get('oreHuntingExp'))
});



class Navigator extends React.Component {
  constructor(props){
    super(props);
    this.state = {...buildNavigatorState()}
  }

  render(){

    if(this.state.renderForest){
      return(
      <TreeChopping treeChoppingExp={this.state.treeChoppingExp}  />
      );
    }

    if(this.state.renderMine){
      return(
        <OreHunting />
      );
    }

    return(

      <div className="navigator_container" id="navigator_container">

        <div className="title_container">
          <img className="title" src={Game_Logo} alt="" />
        </div>

        <div className="navigator_button_container">
          <button className="navigator_button" onClick={()=>{this.setState({renderForest: true})}}>Forest</button>
          <button className="navigator_button" onClick={()=>{this.setState({renderMine: true})}}>Mines</button>
        </div>

      </div>

    );
  }
}

export default Navigator;


ReactDOM.render(<Navigator />, document.getElementById('root'));
