const getMeal = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

const getMealElement = document.getElementById("getMealBtn");
getMealElement.addEventListener("click", getMeal);

const createMeal = meal => {
	const ingredients = [];

const createMeal = (meal) => {
    const ingredients = [];
    for(let i=1; i<=20; i++) {
        if(meal[`strIngredient${i}`]) {
                ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
        } else {
            break;
            }
        }
}
}