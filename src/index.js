import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'universal-cookie';
import {Alert} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

import Game_Logo from "J:/afkscape/src/img/aslogo.png";

//imports for game components
import TreeChopping from 'J:/afkscape/src/TreeChopping.js';
import OreHunting from 'J:/afkscape/src/OreHunting/OreHunting.js';
import SafeCracking from 'J:/afkscape/src/SafeCracking/SafeCracking.js';
import Inventory from 'J:/afkscape/src/Inventory.js';

const cookies = new Cookies();

const buildNavigatorState = () => ({
  freshStart: true,

  //Render Flags for game navigation
  renderForest: false,
  renderMine: false,
  renderVault: false,

  treeChoppingExp: (localStorage.getItem('treeChoppingExp') == undefined) ? 0 : parseInt(localStorage.getItem('treeChoppingExp')),
  oreHuntingExp: (localStorage.getItem('oreHuntingExp') == undefined) ? 0 : parseInt(localStorage.getItem('oreHuntingExp')),
  safeCrackingExp: (localStorage.getItem('safeCrackingExp') == undefined) ? 0 : parseInt(localStorage.getItem('safeCrackingExp'))
});

const initializeInventoryEmpty = () => {
  localStorage.setItem('normalLogs', 0);
}



class Navigator extends React.Component {
  constructor(props){
    super(props);
    this.state = {...buildNavigatorState()}
  }

  render(){

    if(this.state.freshStart){
      initializeInventoryEmpty();
    }

    //Check State flags to determine which area to render
    if(this.state.renderForest){
      return(
      <TreeChopping treeChoppingExp={this.state.treeChoppingExp}  />
      );
    }
    else if(this.state.renderMine){
      return(
        <OreHunting oreHuntingExp={this.state.oreHuntingExp} />
      );
    }
    else if(this.state.renderVault){
      return(
        <SafeCracking safeCrackingExp={this.state.safeCrackingExp} />
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
          <button className="navigator_button" onClick={()=>{this.setState({renderVault: true})}}>Vault</button>
        </div>


      </div>

    );
  }
}

export default Navigator;


ReactDOM.render(<Navigator />, document.getElementById('root'));
