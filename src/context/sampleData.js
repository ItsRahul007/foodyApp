
const sampleFoodData = [
    {
        "id": 715424,
        "title": "The Best Chili",
        "image": "https://spoonacular.com/recipeImages/715424-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 646512,
        "title": "Salmon Caesar Salad",
        "image": "https://spoonacular.com/recipeImages/646512-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 1046982,
        "title": "How to Make the Perfect Sweet Potato Sloppy Joes",
        "image": "https://spoonacular.com/recipeImages/1046982-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 642540,
        "title": "Falafel Burgers",
        "image": "https://spoonacular.com/recipeImages/642540-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 639392,
        "title": "Chunky Two-Bean Chili",
        "image": "https://spoonacular.com/recipeImages/639392-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 644581,
        "title": "Ginger Garlic Chili Salmon",
        "image": "https://spoonacular.com/recipeImages/644581-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 633837,
        "title": "Baked Sweet Potato Fries",
        "image": "https://spoonacular.com/recipeImages/633837-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 660395,
        "title": "Smokey Rainbow Chili",
        "image": "https://spoonacular.com/recipeImages/660395-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 638552,
        "title": "Chili chops with cauliflower salad",
        "image": "https://spoonacular.com/recipeImages/638552-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 638764,
        "title": "Chipotle Turkey Chili",
        "image": "https://spoonacular.com/recipeImages/638764-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 660288,
        "title": "Slow Cooker Kahlua Pork with Sweet Chili Pineapple Sauce",
        "image": "https://spoonacular.com/recipeImages/660288-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 795749,
        "title": "Crispy Baked Green Bean Fries",
        "image": "https://spoonacular.com/recipeImages/795749-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 636573,
        "title": "Butternut Squash and Black Bean Chili with Bulgar",
        "image": "https://spoonacular.com/recipeImages/636573-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 637631,
        "title": "Cheesy Bacon Burger with Spicy Chipotle Aiolo Sauce",
        "image": "https://spoonacular.com/recipeImages/637631-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 642695,
        "title": "Feta Stuffed Burgers",
        "image": "https://spoonacular.com/recipeImages/642695-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 1096277,
        "title": "Kale Chips with Parmesan Cheese and Garlic",
        "image": "https://spoonacular.com/recipeImages/1096277-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 775621,
        "title": "Gorgonzola & Grilled Peach Burger",
        "image": "https://spoonacular.com/recipeImages/775621-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 637897,
        "title": "Chicken and Chickpea Chili",
        "image": "https://spoonacular.com/recipeImages/637897-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 673457,
        "title": "Slow Cooker Chili",
        "image": "https://spoonacular.com/recipeImages/673457-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 662376,
        "title": "Superbowl Chili",
        "image": "https://spoonacular.com/recipeImages/662376-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 637265,
        "title": "Cashew-Chili Portabello",
        "image": "https://spoonacular.com/recipeImages/637265-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 657226,
        "title": "Pulled Pork Sandwich with Mango BBQ sauce",
        "image": "https://spoonacular.com/recipeImages/657226-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 649141,
        "title": "La Bella Italian Turkey Burger",
        "image": "https://spoonacular.com/recipeImages/649141-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 641627,
        "title": "Dr Pepper Pulled Pork",
        "image": "https://spoonacular.com/recipeImages/641627-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 634888,
        "title": "Best Buffalo Chicken Chili",
        "image": "https://spoonacular.com/recipeImages/634888-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 1095894,
        "title": "Salmon Amaranth Burgers with Radish Slaw",
        "image": "https://spoonacular.com/recipeImages/1095894-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 635059,
        "title": "Black Bean and Veggie Burgers with Corn Salsa",
        "image": "https://spoonacular.com/recipeImages/635059-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 1697611,
        "title": "Chili con Carne that'll make your taste buds go silly",
        "image": "https://spoonacular.com/recipeImages/1697611-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 641845,
        "title": "Easy Beef and Bean Chili",
        "image": "https://spoonacular.com/recipeImages/641845-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 638549,
        "title": "Chili and Garlic Spiced Beef and Broccoli Stir Fry",
        "image": "https://spoonacular.com/recipeImages/638549-312x231.jpg",
        "imageType": "jpg"
    }
];

const sampleFevorite = [
    {
        "id": 641845,
        "title": "Easy Beef and Bean Chili",
        "image": "https://spoonacular.com/recipeImages/641845-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 634888,
        "title": "Best Buffalo Chicken Chili",
        "image": "https://spoonacular.com/recipeImages/634888-312x231.jpg",
        "imageType": "jpg"
    },{
        "id": 641627,
        "title": "Dr Pepper Pulled Pork",
        "image": "https://spoonacular.com/recipeImages/641627-312x231.jpg",
        "imageType": "jpg"
    },
    {
        "id": 642695,
        "title": "Feta Stuffed Burgers",
        "image": "https://spoonacular.com/recipeImages/642695-312x231.jpg",
        "imageType": "jpg"
    },
];

export {sampleFevorite, sampleFoodData};