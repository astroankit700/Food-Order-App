import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

// const names = [
//     {
//         name: "-My73Ym5V5krg371MaRV",
//     },
//     {
//         name: "-My76XB-oNe4BPKRY6Bl",
//     },
//     {
//         name: "-My76hakaSXkuneSIJzv",
//     },
//     {
//         name: "-My76pzAPGJ_iQHFjeTD",
//     },
// ];

// const DUMMY_MEALS = [
//     {
//         id: "m1",
//         name: "Gulab Jamun",
//         description: "Soft and sweet with delicate rose flavour",
//         price: 35.5,
//     },
//     {
//         id: "m2",
//         name: "Ghewar",
//         description: "A Rajasthani specialty!",
//         price: 40.0,
//     },
//     {
//         id: "m3",
//         name: "ShriKand",
//         description: "Chilled hung curd desert",
//         price: 51.0,
//     },
//     {
//         id: "m4",
//         name: "Payasam",
//         description: "Thick and creamy",
//         price: 60.0,
//     },
// ];

const AvailableMeals = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [mealsData, setMealsData] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true);
            setError(null);
            const response = await fetch(
                "https://food-order-app-83e93-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
            );

            if (!response.ok) throw new Error("Couldn't fetch meals...");

            const data = await response.json();

            let loadedMeals = [];
            for (const meal in data) {
                let currMeal = data[meal];
                currMeal.id = meal;

                loadedMeals.push(currMeal);
            }

            setMealsData(loadedMeals);
            setIsLoading(false);
            setError(null);
        };

        fetchMeals().catch((error) => {
            setIsLoading(false);
            setError(error.message);
        });
    }, []);

    const mealsList = mealsData.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={parseFloat(meal.price)}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                {error && (
                    <p className={classes.error}>
                        Couldn't connect to the server...
                    </p>
                )}
                {isLoading && (
                    <p className={classes.loading}>Loading meals...</p>
                )}
                {!isLoading && !error && <ul>{mealsList}</ul>}
            </Card>
        </section>
    );
};

export default AvailableMeals;
