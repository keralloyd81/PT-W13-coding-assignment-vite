import 'bootstrap/dist/css/bootstrap.min.css'; //Import Bootstrap styles

import { getRecipes, deleteRecipe } from './api'; //Import API functions

const recipeList = document.getElementById('recipeList') as HTMLUListElement; //Get list container

/**
 * Renders all recipes to the DOM by fetching them from the API.
 */
export async function renderRecipes() {
  const recipes = await getRecipes();
  recipeList.innerHTML = ''; //Clear any previous content

  //Loop through each recipe and create
  recipes.forEach((recipe) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-start flex-column align-items-start';

    li.innerHTML = `
      <div>
        <h5>${recipe.name}</h5>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      </div>
      <button class="btn btn-danger mt-2 align-self-end">Delete</button>
    `;
    //Delete functionality
    li.querySelector('button')?.addEventListener('click', async () => {
      await deleteRecipe(recipe.id);
      await renderRecipes();
    });

    recipeList.appendChild(li);
  });
}
