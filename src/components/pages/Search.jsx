import React, { use, useState } from 'react'
import './Search.css'
import Select from 'react-select'

const options = [
  { value: 'Arizona State University', label: 'Arizona State University' },
  { value: 'Northern Arizona University', label: 'Northern Arizona University' },
  { value: 'University of Arizona', label: 'University of Arizona' },
  { value: 'South Mountain Community College', label: 'South Mountain Community College' },
]
 /*sorts the options by comparing strings and putting them in alphabetical order
 */
const sortedOptions = options.sort((a,b) => a.label.localeCompare(b.label));

/*stying for the search bar, using the provided format with add-ons and improvements
*/
const searchStyle = {
  control: (provided) =>({
    ...provided,
  borderRadius: "8px",
  boxShadow:"none",
  textAlign:"center",
  }),
  option: (provided,state) => ({...provided, color: "black",backroundColor:state.isSelected? "lightgrey" : "white"
  })
};

 export function Search () {
  const[optionPicked, setOptionPicked]= useState("");
  return (
    <div className='Search'>
      <h1>Search for Your School</h1>
      <Select 
        options={sortedOptions}
        styles={searchStyle}
        onChange={(option) => setOptionPicked(option)}
      />
    </div>
  );
}

