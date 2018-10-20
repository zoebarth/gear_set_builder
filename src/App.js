import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Weapons} from './components/weapons';
import {Armor} from './components/armor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      armors: [],
      weapons: [],
      weapon: null,
      helm: null,
      chest: null,
      armsPiece: null,
      legsPiece: null
    }
    this.changeWeapon = this.changeWeapon.bind(this);
    this.changeHelm = this.changeHelm.bind(this);
    this.changeChest = this.changeChest.bind(this);
    this.changeArms = this.changeArms.bind(this);
    this.changeLegs = this.changeLegs.bind(this);
  }

  componentDidMount()
  {
    axios.get("http://localhost:4000/armors.json")
    .then(res => {
      const armors = res.data;
      this.setState({armors});
    });

    axios.get("http://localhost:4000/weapons.json")
    .then(res => {
      const weapons = res.data;
      this.setState({weapons});
    });

  }

  changeWeapon(newWeapon) {
    const weapon = this.state.weapons.find(weapon => weapon.id == newWeapon)
    this.setState({
      weapon: weapon
    });
  }

  changeHelm(newArmor){
    const armor = this.state.armors.find(armor => armor.id == newArmor)
    this.setState({
      helm: armor
    });
  }

  changeChest(newArmor){
    const armor = this.state.armors.find(armor => armor.id == newArmor)
    this.setState({
      chest: armor
    });
  }

  changeArms(newArmor){
    const armor = this.state.armors.find(armor => armor.id == newArmor)
    this.setState({
      armsPiece: armor
    });
  }

  changeLegs(newArmor){
    const armor = this.state.armors.find(armor => armor.id == newArmor)
    this.setState({
      legsPiece: armor
    });
  }

  get weapon()
  {
    if (this.state.weapon)
    {
      return this.state.weapon.name;
    }
  }

  get helm()
  {
    if(this.state.helm)
    {
      return this.state.helm.name;
    }
  }

  get helms()
  {
    return this.state.armors.filter(armor => armor.type == 'head');
  }

  get chest()
  {
    if(this.state.chest)
    {
      return this.state.chest.name
    }
  }

  get chests()
  {
    return this.state.armors.filter(armor => armor.type == 'torso');
  }

  get armsPiece()
  {
    if(this.state.armsPiece)
    {
      return this.state.armsPiece.name
    }
  }

  get arms()
  {
    return this.state.armors.filter(armor => armor.type == 'arms');
  }

  get legsPiece()
  {
    if(this.state.legsPiece)
    {
      return this.state.legsPiece.name
    }
  }

  get legs()
  {
    return this.state.armors.filter(armor => armor.type == 'legs');
  }

  get baseArmor()
  {
    var b = 0;
    if(this.state.armsPiece)
    {
      b+= this.state.armsPiece.base_armor;
    }
    if(this.state.legsPiece)
    {
      b+= this.state.legsPiece.base_armor;
    }
    if(this.state.chest)
    {
      b+= this.state.chest.base_armor;
    }
    if(this.state.helm)
    {
      b += this.state.helm.base_armor;
    }

    return b;

  }
  get basePower()
  {
    if (this.state.weapon)
    {
      return this.state.weapon.base_power;
    }
    else
    {
      return 0;
    }
  }

  get maxPower()
  {
    if (this.state.weapon)
    {
      return this.state.weapon.max_power;
    }
    else
    {
      return 0;
    }
  }

  get perks()
  {
    var s = "";
    if(this.state.weapon)
    {
      s+= this.state.weapon.perk.name + ", " ;
    }
    if(this.state.helm)
    {
      s += this.state.helm.perk.name + ", ";
    }
    if(this.state.chest)
    {
      s+= this.state.chest.perk.name + ", ";
    }
    if(this.state.armsPiece)
    {
      s+= this.state.armsPiece.perk.name + ", ";
    }
    if(this.state.legsPiece)
    {
      s+= this.state.legsPiece.perk.name + ", ";
    }
    return s;
  }

  render() {

    console.log(this.state.weapon);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gear Set Builder</h1>
        </header>

        <div className ="row">
          <div className = "App-columnL">
            <h1 className="App-h1"> SELECT YOUR GEAR: </h1>
          </div>
          <div className = "App-columnR">
            <h1 className="App-h1"> YOUR SELECTIONS:</h1>
          </div>
        </div>
        <div className="row">
          <div className = "App-columnL">
            <label className="App-label"> Weapon:</label>
            <br/>
            <Weapons weapons={this.state.weapons} onChange={this.changeWeapon}/>
          </div>
          <div className = "App-columnR">
            <label className="App-label"> Weapon Name: {this.weapon} </label>
          </div>
        </div>
        <div className="row">
          <div className = "App-columnL">
            <label className="App-label"> Helmet:</label>
            <br/>
            <Armor armors={this.helms} onChange={this.changeHelm}/>
          </div>
          <div className = "App-columnR">
            <label className="App-label"> Helmet Name: {this.helm} </label>
          </div>
        </div>
        <div className="row">
          <div className = "App-columnL">
            <label className="App-label"> Torso:</label>
            <br/>
            <Armor armors={this.chests} onChange={this.changeChest}/>
          </div>
          <div className = "App-columnR">
            <label className="App-label"> Torso Name: {this.chest} </label>
          </div>
        </div>
        <div className="row">
          <div className = "App-columnL">
            <label className="App-label"> Arms:</label>
            <br/>
            <Armor armors={this.arms} onChange={this.changeArms}/>
          </div>
          <div className = "App-columnR">
            <label className="App-label"> Arms Name: {this.armsPiece} </label>
          </div>
        </div>
        <div className="row">
          <div className = "App-columnL">
            <label className="App-label"> Legs:</label>
            <br/>
            <Armor armors={this.legs} onChange={this.changeLegs}/>
          </div>
          <div className = "App-columnR">
            <label className="App-label"> Legs Name: {this.legsPiece} </label>
          </div>
        </div>
        <br/>
        <br/>
        <div className="row">
          <div className = "App-columnL">
            <h1 className="App-h1">YOUR STATS:</h1>
            <label className="App-label"> Total Base Armor: {this.baseArmor} </label>
            <br/>
            <label className="App-label"> Total Base Power: {this.basePower} </label>
            <br/>
            <label className="App-label"> Total Max Power: {this.maxPower} </label>
            <br/>
            <label className="App-label"> Perks: {this.perks} </label>
          </div>
        </div>



      </div>
    );
  }
}

export default App;
