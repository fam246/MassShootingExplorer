import React from 'react';
import {MultiDropdownList, SingleDropdownRage, RangeSlider,} from '@appbaseio/reactivesearch';

 const SearchFilter = ({currentTitles,setTitles,visible}) =>(

    
        <div className={`flex column filters-container ${!visible ? 'hidden' : ''}`}>
            <div className="child m10">
                <MultiDropdownList
                    componentId="Location"
                    dataField="Location.raw"
                    placeholder="Select Location"
                    title="Location"
                    filterLabel="Location"
                />
            </div>


            <div className="child m10">
			<MultiDropdownList
				componentId="Title"
				dataField="Title.raw"
				placeholder="Select Title"
				title="Title"
				filterLabel="Title"
				size={1000}
				queryFormat="and"
				defaultSelected={currentTitles}
				onValueChange={setTitles}
			/>
		</div>

         <div className="child m10">
			<RangeSlider
				componentId="Fatalities"
				title="Fatalities"
				dataField="Fatalities"
				range={{ start: 0, end: 80 }}
				showHistogram={false}
				rangeLabels={{
					start: '0',
					end: '80',
				}}
				innerClass={{
					label: 'range-label',
				}}
			/>
		</div>










            </div>
        
 );

 export default SearchFilter;