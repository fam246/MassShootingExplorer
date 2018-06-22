import React, { Component } from 'react';
import SearchFilter from './SearchFilter';

 class ToggleButton extends Component {
   constructor(props){
       super(props);
       this.state = {
           visible: false,
       }
   }


   showButton = () => {
     const visible = !this.state.visible;
       this.setState({
         visible,
       });
     
   }
   




  render() {
    return (
      <nav className={`navbar ${this.state.visible ? 'active' : ''}`}>
      <div className="title">Mass Shooting Search</div>
      <div className="btn toggle-btn" onClick={this.showButton}>Show Filter</div>
      <SearchFilter {...this.props} visible={this.state.visible} />
    </nav>
    )
  }
}


export default ToggleButton;
