import React, { Component } from 'react';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';
import colorFont from './colorFont';
import './App.css';
class App extends Component {
  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="shooting-explorer"
          credentials="E3Ken1gm5:d3f38d9a-02cd-4cda-b0e6-4d66a3473103"
          type="react-mass"
          colorFont={colorFont}
        >
          <nav className="navbar">
            <div className="title">Mass Shooting Search</div>
          </nav>
    <div className="flex row-reverse app-container">
        <div className="results-container">
            <DataSearch
                componentId=""
                filterLabel="Search"
                dataField={[]}
                placeholder="Search Reports"
                autosuggest={false}
                iconPosition="left"
                URLParams
                className="data-search-container results-container"
                innerClass={{
                    input: '',
                }}
            />
        </div>
    </div>

        </ReactiveBase>
      </section>
    );
  }
}

export default App;