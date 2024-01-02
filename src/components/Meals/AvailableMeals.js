import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Baby Back Ribs",
    description: "Full rack of fall of the bone ribs",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Pulled Pork Sandwich",
    description: "Tender pulled pork on a bun",
    price: 12.5,
  },
  {
    id: "m3",
    name: "Sloppy Steaks",
    description: "Steak with water poured over it",
    price: 15.99,
  },
  {
    id: "m4",
    name: "Sausage",
    description: "Foot long sausage on a bun",
    price: 10.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
