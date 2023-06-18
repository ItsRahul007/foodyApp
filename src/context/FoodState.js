import React, {useState} from 'react';
import FoodData from './FoodData';
import {useNavigate} from "react-router-dom";
import {sampleFevorite, sampleFoodData} from "./sampleData";

function FoodState(props) {
    const navigate = useNavigate();
    const [foodData, setFoodData] = useState(sampleFoodData);
    const [fevoriteItem, setFevoriteItem] = useState(sampleFevorite);

    // For fetching clicked or selected food
    async function clickedFood(query, cuisine){
        try {
            const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&query=${query}&number=15${cuisine && `&cuisine=${cuisine}`}`;
            const responce = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const parsedData = await responce.json();
            setFoodData(parsedData.results);
            
        } catch (error) {
            console.log("Network did not responding...");
        };
    };

    // Setting the recipe datas to inside local storage
    async function foodinfo(data){
        // Clearing the keys for updating them with new values
        localStorage.removeItem("recipeInfo");
        localStorage.removeItem("moreRecipeInfo");
        localStorage.setItem("recipeInfo", JSON.stringify(data));

        try {
            const url = `https://api.spoonacular.com/recipes/${data.id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_KEY}`;

            const responce = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            }
        });
            const parsedData = await responce.json();
            // Storing the needed values inside local storage with "moreRecipeInfo" key
            let moreData = {
                vegetarian: parsedData.vegetarian,
                vegan: parsedData.vegan,
                glutenFree: parsedData.glutenFree,
                dairyFree: parsedData.dairyFree,
                veryHealthy: parsedData.veryHealthy,
                cheap: parsedData.cheap,
                veryPopular: parsedData.veryPopular,
                sustainable: parsedData.sustainable,
                lowFodmap: parsedData.lowFodmap,
                aggregateLikes: parsedData.aggregateLikes,
                healthScore: parsedData.healthScore
              };
              localStorage.setItem("moreRecipeInfo", JSON.stringify(moreData));
            navigate("/foodinfo");
        } catch (error) {
            console.log("Network did not responding...");
        };
    };

    // For adding a new fevorite item
    function addFevoriteItem(item){
        setFevoriteItem(fevoriteItem.concat(item));
    };
    
    return (
        <FoodData.Provider value={{foodData, clickedFood, foodinfo, fevoriteItem, addFevoriteItem}}>
            {props.children}
        </FoodData.Provider>
    );
};

export default FoodState;