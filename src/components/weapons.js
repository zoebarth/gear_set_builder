import React, {Component} from 'react';
 
export class Weapons extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      weapons: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.setState({
          weapons: newProps.weapons
    });
  }

  handleChange(e){
    const weaponId = e.target.value;
    this.props.onChange(weaponId);
  }

  render()
  {
    return(
      <select onChange={this.handleChange}> 
        <option value="" disabled selected>Select your option</option>
        {this.state.weapons.map(weapon =>
          <option key={weapon.id} value={weapon.id}> {weapon.name} </option>)}
      </select>
    );
  }
}