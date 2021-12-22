import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', age: '', email: '' });
  const [search, setSearch] = useState('');

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(formData.name);
  };

  return (
    <form>
      <input
        type='text'
        name='name'
        value={formData.name}
        placeholder='Enter your name'
        onChange={changeHandler}
      />
      <input
        type='text'
        name='age'
        value={formData.age}
        placeholder='Enter your age'
        onChange={changeHandler}
      />
      <input
        type='text'
        name='email'
        value={formData.email}
        placeholder='Enter your email'
        onChange={changeHandler}
      />

      <button onClick={submitHandler}>Search</button>
      <p>{search}</p>
    </form>
  );
};

export default Form;
