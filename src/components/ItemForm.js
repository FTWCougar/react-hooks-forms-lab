import React from "react";

function ItemForm({onItemFormSubmit, form, onFormChange, onFormCategoryChange, formSelectedCategory}) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={form} onChange={onFormChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={formSelectedCategory} onChange={onFormCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
