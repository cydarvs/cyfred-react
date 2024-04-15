import MenuItemList from './MenuItemList/MenuItemList';
import salads from '../data/salads.json'

/* pass the salads as props */
export const App = () => {
  return (
    <div>
     <MenuItemList salads={salads} />
    </div>
  );
};

