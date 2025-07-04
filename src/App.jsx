import './App.css';
import ManinNutritionWellness from './components/nutritionwellness/MainNutritionWellness';
import FoodService from './components/foodservice/FoodService';
import SearchFilter from './components/explore-recipes/SearchFilter';

function App() {
  return (
    <div className="bg-[#000]">
      <FoodService />
      {/* <ManinNutritionWellness /> */}
      {/* <SearchFilter /> */}
    </div>
  );
}

export default App;