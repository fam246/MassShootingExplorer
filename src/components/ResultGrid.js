import React from 'react';
import {SelectedFilters, ReactiveList} from '@appbaseio/reactivesearch';

const onResultStats = (results, time) => (
	<div className="flex justify-end">
		{results} results found in {time}ms
	</div>
);



const onData = (data) => (
    <div className="result-item" key={data.Date}>
      {data.Location}/{data.Title}
    </div>
  );
  const ResultGrid = () => (
    <div className="result-list">
      <SelectedFilters className="m1" />
      <ReactiveList
        componentId="resultgrid"
        dataField="Title"
        onData={onData}
        onResultStats={onResultStats}
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