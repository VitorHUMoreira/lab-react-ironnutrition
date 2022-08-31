import { Divider, Input } from 'antd';
import { useState, useRef } from 'react';

function AddFoodForm({ foods, setFoods }) {
  const nameRef = useRef();

  const [form, setForm] = useState({
    name: '',
    calories: '',
    image: '',
    servings: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let updatedFoods = [...foods, form];

    setFoods(updatedFoods);

    setForm({
      name: '',
      calories: '',
      image: '',
      servings: '',
    });

    nameRef.current.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        name="name"
        ref={nameRef}
        value={form.name}
        type="text"
        onChange={handleChange}
        required
      />

      <label>Image</label>
      <Input
        name="image"
        value={form.image}
        type="text"
        onChange={handleChange}
      />

      <label>Calories</label>
      <Input
        name="calories"
        value={form.calories}
        type="text"
        onChange={handleChange}
        required
      />

      <label>Servings</label>
      <Input
        name="servings"
        value={form.servings}
        type="text"
        onChange={handleChange}
        required
      />
      <div className="center">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default AddFoodForm;
