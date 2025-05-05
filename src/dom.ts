import 'bootstrap/dist/css/bootstrap.min.css';

import { getRecipes, deleteRecipe } from './api';

const recipeList = document.getElementById('recipeList') as HTMLUListElement;

export async function renderRecipes() {
  const recipes = await getRecipes();
  recipeList.innerHTML = '';

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

    li.querySelector('button')?.addEventListener('click', async () => {
      await deleteRecipe(recipe.id);
      await renderRecipes();
    });

    recipeList.appendChild(li);
  });
}
