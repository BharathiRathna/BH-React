import './App.css';
// import ManinNutritionWellness from './components/nutritionwellness/MainNutritionWellness';
// import FoodService from './components/foodservice/FoodService';
import SearchFilter from './components/explore-recipes/SearchFilter';

function App() {
  return (
    // <div className=" bg-[url('/images/nutrition-wellness/bg-map.jpg')] bg-cover bg-center bg-no-repeat">
    <div className="bg-[#000]">
      {/* <ManinNutritionWellness /> */}
      {/* <FoodService /> */}
      <SearchFilter />
    </div>
  );
}

export default App;