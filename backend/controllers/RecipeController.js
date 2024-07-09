const { default: mongoose } = require("mongoose");
const Recipe = require("../models/Recipe");

const RecipeController = {
  index: async (req, res) => {
    let recipes = await Recipe.find().sort({ createdAt: -1 });
    return res.json(recipes);
  },
  store: async (req, res) => {
    const { title, description, ingredients } = req.body;

    const recipe = await Recipe.create({
      title,
      description,
      ingredients,
    });
    return res.json(recipe);
  },
  show: async(req, res) => {
    try {
      let id = req.params.id;
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ msg : 'not a valid id'})
      }
      let recipe = await Recipe.findById(id);
      if(!recipe){
        return res.status(404).json({ msg : 'recipe not found'})
      }
      return res.json(recipe);
    } catch (e) {
      return res.status(500).json({ msg: "internal server error" });
    }
  },
  destroy: async (req, res) => {
    try {
      let id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: "not a valid id" });
      }
      let recipe = await Recipe.findByIdAndDelete(id);
      if (!recipe) {
        return res.status(404).json({ msg: "recipe not found" });
      }
      return res.json({msg : 'recipe is deleted'});
    } catch (e) {
      return res.status(500).json({ msg: "internal server error" });
    }
  },
  update: async(req, res) => {
try {
      let id = req.params.id;
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ msg : 'not a valid id'})
      }
      let recipe = await Recipe.findByIdAndUpdate(id, {...req.body}, {new : true, runValidators : true});
      if(!recipe){
        return res.status(404).json({ msg : 'recipe not found'})
      }
      return res.json(recipe);
    } catch (e) {
      return res.status(500).json({ msg: "internal server error" });
    }  },
};

module.exports = RecipeController;
