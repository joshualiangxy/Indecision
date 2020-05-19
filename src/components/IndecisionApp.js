import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    subtitle: "Let's help you decide!",
    options: [],
    selectedOption: undefined,
  };

  okay = () => {
    this.setState(() => ({ selectedOption: undefined }));
    console.log(this.state.selectedOption);
  };

  remove = option => {
    this.setState(prev => ({
      options: prev.options.filter(x => option !== x),
    }));
  };

  decide = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    this.setState(prev => ({ selectedOption: prev.options[randomNum] }));
  };

  removeAll = () => {
    this.setState(() => ({ options: [] }));
  };

  addOption = option => {
    if (!option) return 'Enter valid value to add item';
    if (this.state.options.indexOf(option) > -1)
      return 'This item already exists.';

    this.setState(prev => ({ options: prev.options.concat([option]) }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) this.setState(() => ({ options }));
    } catch (exception) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('unmounted');
  }

  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <div className="container">
          <Action
            decide={this.decide}
            noOptions={this.state.options.length == 0}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              removeAll={this.removeAll}
              remove={this.remove}
            />
            <AddOption addOption={this.addOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          okay={this.okay}
        />
      </div>
    );
  }
}
