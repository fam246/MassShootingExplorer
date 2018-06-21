import React from 'react';
import {SelectedFilters, ReactiveList} from '@appbaseio/reactivesearch';

const onResultTime = (results, time) => (
	<div className="flex justify-end">
		{results} results found in {time}ms
	</div>
);



const resultData = (data) => (
    <div className="result-item" key={data.Title}>
      {data.Date}/{data.Location}
    </div>
  );
  const ResultGrid = () => (
    <div className="result-list">
      <SelectedFilters className="m1" />
      <ReactiveList
        componentId="ResultGrid"
        dataField="Title"
        onData={resultData}
        onResultStats={onResultTime}
        react={{
          and: ['shooting'],
        }}
        pagination
        innerClass={{
          list: 'result-list-container',
          pagination: 'result-list-pagination',
          resultsInfo: 'result-list-info',
          poweredBy: 'powered-by',
        }}
        size={6}
      />
    </div>
  );
  export default ResultGrid;