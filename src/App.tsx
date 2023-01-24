import './App.css';
import WeekPicker, { calculateActiveWeek } from './components/WeekPicker';
import { useState } from 'react';
import moment from 'moment';

const currentWeek = calculateActiveWeek(moment());

function App() {
  const [selectedDays, setSelectedDays] = useState(currentWeek);

  return (
    <div className="App">
      <header className="App-header">
        <WeekPicker
            onWeekChange={setSelectedDays}
            selectedDays={selectedDays}
        />
      </header>
    </div>
  );
}

export default App;
