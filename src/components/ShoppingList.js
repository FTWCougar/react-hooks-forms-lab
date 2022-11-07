import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  let i = items.length

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [formSelectedCategory, setFormSelectedCategory] = useState("Produce");

  const [search, setSearch] = useState("")

  const [form, setForm] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });


  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

    const searchResults = itemsToDisplay.filter(item => {
      if(search !== ""){
        return item.name.toLowerCase().includes(search.toLowerCase())
      }
      return item;
    })

    const onItemFormSubmit = (e) => {
      i++
      e.preventDefault();
      const itemObj ={
        id: i,
        name: form,
        category: formSelectedCategory
      }
      const newItems = [...items, itemObj]
      setItems(newItems)
      setForm("")
      setFormSelectedCategory("Produce")
    }

    const handleFormChange = (e) => {
      setForm(()=> e.target.value);
    }

    const handleFormCategoryChange = (e) => {
      setFormSelectedCategory(e.target.value)
    }


  return (
    <div className="ShoppingList">
      <ItemForm 
      onItemFormSubmit = {onItemFormSubmit} 
      form = {form} 
      onFormChange = {handleFormChange} 
      onFormCategoryChange = {handleFormCategoryChange} 
      formSelectedCategory = {formSelectedCategory}
      />

      <Filter 
      onCategoryChange={handleCategoryChange} 
      onSearchChange={handleSearchChange} search={search}
      />

      <ul className="Items">
        {searchResults.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
