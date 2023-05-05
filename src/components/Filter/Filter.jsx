import {nanoid} from 'nanoid';

const inputSearchId = nanoid();

const Filter = ({text, value, onChange }) => {
  return (
    <>
    <label htmlFor={inputSearchId}>{text}</label>
    <input type='text' value={value} onChange={onChange} id={inputSearchId}/>
    </>
  )
}

export default Filter;