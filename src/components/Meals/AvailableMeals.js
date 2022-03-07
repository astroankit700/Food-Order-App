import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Gulab Jamun",
        description: "Soft and sweet with delicate rose flavour",
        price: 35.5,
    },
    {
        id: "m2",
        name: "Ghewar",
        description: "A Rajasthani specialty!",
        price: 40.0,
    },
    {
        id: "m3",
        name: "ShriKand",
        description: "Chilled hung curd desert",
        price: 51.0,
    },
    {
        id: "m4",
        name: "Payasam",
        description: "Thick and creamy",
        price: 60.0,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
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
