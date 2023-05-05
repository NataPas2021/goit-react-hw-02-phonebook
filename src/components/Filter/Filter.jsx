import {nanoid} from 'nanoid';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const inputSearchId = nanoid();

const Filter = ({text, value, onChange }) => {
  return (
    <div>
      <label htmlFor={inputSearchId} className={css.label}>{text}</label>
      <input type='text' value={value} onChange={onChange} id={inputSearchId}/>
    </div>
  )
}

export default Filter;

Filter.propTypes = {
  test: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}