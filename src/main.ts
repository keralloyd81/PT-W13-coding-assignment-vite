import './style.css';
import { renderRecipes } from './dom';
import { handleFormSubmit } from './formHandler';

// DOMContentLoaded ensures the DOM is fully loaded before we access elements
document.addEventListener('DOMContentLoaded', () => {
  const recipeForm = document.getElementById('recipeForm') as HTMLFormElement;

  // Attach form submission handling
  handleFormSubmit(recipeForm);

  // Initial fetch and display of recipes
  renderRecipes();
});
