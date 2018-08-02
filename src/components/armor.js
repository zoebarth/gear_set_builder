import React, {Component} from 'react';

export class Armor extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      armors: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps)
  {
    this.setState({armors: newProps.armors})
  }

  handleChange(e)
  {
    const armorId = e.target.value;
    this.props.onChange(armorId);
  }

  render()
  {
    console.log(this.state.armors);
    return (
      <select onChange = {this.handleChange}>
        <option value="" disabled selected>Select your option</option>
        {this.state.armors.map(armor =>
        <option key={armor.id} value={armor.id}> {armor.name} </option>)}
      </select>

    );
    
  }
}