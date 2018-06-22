import React, { Component } from 'react';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';
import ResultGrid from './components/ResultGrid';
import ToggleButton from './components/ToggleButton';
import colorFont from './colorFont';
import './App.css';
class App extends Component {
  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="react-mass"
          credentials="7UUE2p20u:65f01519-daf3-4736-90cc-2a9322c630fc"
          theme={colorFont}
        >
         
    <div className="flex row-reverse app-container">
    <ToggleButton/>
        <div className="results-container">
            <DataSearch
                componentId="shooting"
                filterLabel="Search"
                dataField={['Title', 'Date', 'Title.raw','Fatalities','Race','Summary']}
                placeholder="Search Reports"
                autosuggest={false}
                iconPosition="left"
                URLParams
                className="data-search-container results-container"
                innerClass={{
                    input: 'search-input',
                }}
            />
            <ResultGrid />
        </div>
    </div>

        </ReactiveBase>
      </section>
    );
  }
}

export default App;