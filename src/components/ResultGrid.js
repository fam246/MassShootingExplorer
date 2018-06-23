import React from 'react';
import {SelectedFilters, ReactiveList} from '@appbaseio/reactivesearch';

const resultTime = (results, time) => (
	<div className="flex justify-end">
		{results} results found in {time}ms
	</div>
);



const responseData = (data) => (
    <div className="result-item" key={data.Date}>
      {data.Date}/{data.Location}

<div className="flex justify-center align-center result-card-header">

<a className="link" href="" target="_blank" rel="noopener noreferrer">
  <div className="flex wrap">
    
  <div>{data.Title}</div>
  
    
  </div>
</a>
</div>
<div className="m10-0">{data.Summary}</div>
    </div>
  );
  const ResultGrid = () => (
    <div className="result-list">
      <SelectedFilters className="m1" />
      <ReactiveList
        componentId="resultgrid"
        dataField="Title"
        onData={responseData}
        onResultStats={resultTime}
        react={{
          and: ['Location','Title','shooting'],
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