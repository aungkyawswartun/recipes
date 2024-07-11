import React from 'react'

export default function RecipeCard({recipe}) {
  return (
    <div className="p-3 bg-white rounded-2xl space-y-3">
      <h3 className="text-xl font-bold text-orange-400">{recipe.title}</h3>
      <p>Description</p>
      <p>{recipe.description}</p>
      <div className="space-x-2">
        <span>Ingredients -</span>
        {!!recipe.ingredients.length &&
          recipe.ingredients.map((ingredient, i) => (
            <span
              className="bg-orange-400 text-white px-2 py-1 text-sm rounded-full"
              key={i}
            >
              {ingredient}
            </span>
          ))}
      </div>
      <div>
        <span className='text-xs text-gray-400'>Published at - {recipe.createdAt}</span>
      </div>
    </div>
  );
}
