import React, { useState } from 'react';
import { Calendar, Label, Checkbox } from '../shadcn/ui';
import Viewer from '../Viewer';

const CalendarExample = () => {
  const [showOutsideDays, setShowOutsideDays] = useState(true);

  const handleShowOutsideDaysChange = (newCheckedValue: boolean) => {
    setShowOutsideDays(newCheckedValue);
  };
  
  const controlsComponent = (
    <div className="flex flex-col space-y-4">
      <Label>
        Show Outside Days:
        <Checkbox
          className='ml-2'
          checked={showOutsideDays}
          onCheckedChange={(checked) => {
            if (typeof checked === 'boolean') {
              handleShowOutsideDaysChange(checked);
            }
          }}
          />
      </Label>
    </div>
  );

  const calendarComponent = (
    <Calendar showOutsideDays={showOutsideDays} />
  );

  const calendarCode = `
    <Calendar showOutsideDays={${showOutsideDays}} />
  `;

  return (
    <div className="container mx-auto p-4">
      <Viewer 
        component={calendarComponent} 
        code={calendarCode} 
        settings={controlsComponent}
        installCommand="npx shadcn-ui@latest add calendar, npm i react-day-picker , npm i @radix-ui/react-icons"
        componentName="Calendar"
      />
    </div>
  );
};

export default CalendarExample;