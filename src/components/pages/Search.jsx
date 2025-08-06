import React, { use, useState } from 'react'
import './Search.css'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'

/*options for users to select their school from the dropdown menu. May incoporate in another file or see if there is an easier way to 
put the schools in the drop down menu. This should also send data to the user's profile.
*/
const options = [
  { value: 'Arizona State University', label: 'Arizona State University' },
  { value: 'Northern Arizona University', label: 'Northern Arizona University' },
  { value: 'University of Arizona', label: 'University of Arizona' },
  { value: 'South Mountain Community College', label: 'South Mountain Community College' },
  { value:'Glendale Community College (AZ)', label:'Glendale Community College (AZ)'},
  { value:'Mesa Community College', label:'Mesa Community College'},
  { value:'Paradise Valley Community College', label:'Paradise Valley Community College'},
  { value:'Chandler-Gilbert Community College', label:'Chandler-Gilbert Community College'},
  { value:'Scottsdale Community College', label:'Scottsdale Community College'},
  { value:'Estrella Community College', label:'Estrella Community College'},
  { value:'Phoenix Community College', label:'Phoenix Community College'},
  { value:'Gateway Community College', label:'Gateway Community College'},

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

/* Search function that implements style changes and the way the dropdown menu is displayed.
*/
 export function Search () {
  const[optionPicked, setOptionPicked]= useState(null);

  const navigate =useNavigate();

  const handleButtonClick = () => {
    navigate('/Home');
  }

  return (
    <div className='searchContainer'>
      <div className='searchText'>Search for Your School</div>
      <div className='searchUnderline'></div>
      <Select 
        options={sortedOptions}
        styles={searchStyle}
        isSearchable={true}
        placeholder= 'Select a School..'
        onChange={(option) => setOptionPicked(option)}
      />

      {optionPicked && (
        <button className="schoolSearchButton" onClick={handleButtonClick}>
          Next
        </button>
      )}

    </div>
  );
}
