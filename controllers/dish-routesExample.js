// This file is a Controller. 

// It routes commands to the Model and View parts.

const router = require('express').Router();

// We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const dishes = [
  {
    id: 1,
    dish_name: 'French Bread with Brie Cheese',
    description: 'French baguette with warm brie',
    has_nuts: false,
  },
  {
    id: 2,
    dish_name: 'Cheese Plate with Spanish Chorizo',
    description:
      'Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo',
    has_nuts: true,
  },
  {
    id: 3,
    dish_name: 'Fish Tacos',
    description:
      'Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion',
    has_nuts: false,
  },
  {
    id: 4,
    dish_name: 'Tropical Fruit Salad',
    description: 'Guava, papaya, pineapple, mango, and star fruit',
    has_nuts: false,
  },
  {
    id: 5,
    dish_name: 'Pork Gyoza',
    description:
      'Homemade japanese dumplings stuffed with a pork and green onion filling, served with peanut dipping sauce',
    has_nuts: true,
  },
  {
    id: 6,
    dish_name: 'Yebeg Tibs with Injera Bread',
    description:
      'Marinated lamb dish with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere',
    has_nuts: false,
  },
  {
    id: 7,
    dish_name: 'Cape Malay Curry',
    description: 'Chicken and vegitable curry dish with basmati rice',
    has_nuts: false,
  },
];

// GET route for getting all of the dishes that are on the menu
router.get('/', async (req, res) => {
  // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
  // We find all dishes in the db and set the data equal to dishData
  const dishData = await Dish.findAll().catch((err) => { 
    res.json(err);
  });
  // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
  const dishes = dishData.map((dish) => dish.get({ plain: true }));
  // We render the template, 'all', passing in dishes, a new array of serialized objects.
  res.render('all', { dishes });
});

// Get a dish
router.get('/dish/:num', async (req, res) => {
  // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
  // Now, we have access to a dish description in the 'dish' template.
  // *For the second argument of handlebars it is expecting an object and that data is available inside of the handlebars template (dish.handlebars) via its keyname {{dish_name}} and {{description}}
  // return res.render('dish', dishes[req.params.num - 1]);
  try {
    // Search the database for a dish with an id that matches params
    const dishData = await Dish.findByPk(req.params.id);
    console.log(dishData)
    // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
    const dish = dishData.get({ plain: true });
    // Then, the 'dish' template is rendered and dish is passed into the template.
    res.render('dish', dish);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
