import type { Recipe } from './types.ts';// Import Recipe type

const API_URL = 'http://localhost:3000/recipes'; // Base URL for the json-server API

// Fetch all recipes from the server (READ)
export async function getRecipes(): Promise<Recipe[]> {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error('Failed to fetch recipes');
  }
  return res.json(); // Return recipes as JSON
}

// Create a new recipe (CREATE)
export async function createRecipe(recipe: Omit<Recipe, 'id'>): Promise<Recipe> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipe),
  });

  if (!res.ok) {
    throw new Error('Failed to create recipe');
  }

  return res.json(); // Return newly created recipe
}

// Delete a recipe by ID (DELETE)
export async function deleteRecipe(id: number): Promise<void> {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Failed to delete recipe');
  }
}
