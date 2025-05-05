// This defines the structure of a recipe object
export type Recipe = {
  id: number;              // Unique ID assigned by the API
  name: string;            // Name of the recipe
  ingredients: string;     // Ingredients list
  instructions: string;   // Optional instructions
};
