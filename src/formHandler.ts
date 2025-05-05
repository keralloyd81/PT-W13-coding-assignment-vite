import { Recipe } from './types';
import { createRecipe } from './api';
import { renderRecipes } from './dom';

export function handleFormSubmit(form: HTMLFormElement) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('recipeName') as HTMLInputElement;
    const ingredientsInput = document.getElementById('recipeIngredients') as HTMLTextAreaElement;
    const instructionsInput = document.getElementById('recipeInstructions') as HTMLTextAreaElement;

    const name = nameInput.value.trim();
    const ingredients = ingredientsInput.value.trim();
    const instructions = instructionsInput.value.trim();

    if (!name || !ingredients) {
      alert('Please provide both name and ingredients.');
      return;
    }

    const newRecipe: Omit<Recipe, 'id'> = {
      name,
      ingredients,
      instructions,
    };

    await createRecipe(newRecipe);

    nameInput.value = '';
    ingredientsInput.value = '';
    instructionsInput.value = '';

    await renderRecipes();
  });
}
