import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard';

export default function Home() {
  let [recipes, setRecipes] = useState([]);
  useEffect(() =>{
    let fetchRecipe = async () => {
      let response = await fetch("http://localhost:8000/api/recipes");
      let data = await response.json();
      setRecipes(data);
    }
    fetchRecipe();
  },[])

  return (
    <div className="p-5 bg-[#f1f1f1] h-screen space-y-3">
      {recipes.length &&
        recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe._id}/>
        ))}
    </div>
  );
}
