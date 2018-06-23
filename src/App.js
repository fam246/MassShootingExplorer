import React, { Component } from 'react';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';
import ResultGrid from './components/ResultGrid';
import ToggleButton from './components/ToggleButton';
import colorFont from './colorFont';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTitles: [],
    };
  }

  setTitles = (currentTitles) => {
    this.setState({
      currentTitles: currentTitles || [],

    });
  }

  toggleTitles = (title) => {
    const { currentTitles } = this.state;
    const nextState = currentTitles.includes(title)
      ? currentTitles.filter(item => item !== title)
      : currentTitles.concat(title);
    this.setState({
      currentTitles: nextState,
    })

  }

  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="react-mass"
          credentials="7UUE2p20u:65f01519-daf3-4736-90cc-2a9322c630fc"
          theme={colorFont}
        >

          <div className="flex row-reverse app-container">
            <ToggleButton currentTitles={this.state.currentTitles} setTitles={this.setTitles} />
            <div className="results-container">
              <DataSearch
                componentId="shooting"
                filterLabel="Search"
                dataField={['Title', 'Summary', 'Title.raw', 'Race', 'Date']}
                placeholder="Search Reports"
                autosuggest={false}
                iconPosition="left"
                URLParams
                className="data-search-container results-container"
                innerClass={{
                  input: 'search-input',
                }}
              />
              <ResultGrid currentTitles={this.state.currentTitles} toggleTitles={this.toggleTitles} />
            </div>
          </div>

        </ReactiveBase>
      </section>
    );
  }
}

export default App;