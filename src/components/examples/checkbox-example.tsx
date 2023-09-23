import React, { useState } from 'react';
import { Label, Checkbox } from '../shadcn/ui';
import Viewer from '../Viewer';

const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (newCheckedValue: boolean): void => {
    setIsChecked(newCheckedValue);
  };

  const controlsComponent = (
    <div className="flex flex-col space-y-4">
      <Label>
        Enable Feature:
        <Checkbox
          className='ml-2'
          checked={isChecked}
          onCheckedChange={() => handleCheckboxChange(!isChecked)}
        />
      </Label>
    </div>
  );

  const checkboxComponent = (
    <Checkbox 
      checked={isChecked}
      onCheckedChange={() => handleCheckboxChange(!isChecked)}
    />
  );

  const checkboxCode = `
    <Checkbox checked={${isChecked}} onCheckedChange={() => handleCheckboxChange(!isChecked)} />
  `;

  return (
    <div className="container mx-auto p-4">
      <Viewer 
        component={checkboxComponent} 
        code={checkboxCode} 
        settings={controlsComponent}
        installCommand="npx shadcn-ui@latest add checkbox"
        componentName="Checkbox"
      />
    </div>
  );
};

export default CheckboxExample;
