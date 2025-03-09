import { useState } from 'react';
import Footer from './components/footer';

// Mapping of color names to Tailwind CSS classes
const colorClasses = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
};

function App() {
  const [color, setColor] = useState();

  return (
    <div className={`w-full h-screen ${colorClasses[color]}`}>
      <Footer setColor={setColor} />
    </div>
  );
}

export default App;