// Examples.tsx
import React, { useState } from 'react';
import AccordionExample from '@/components/examples/accordion-example';
import NavMenu from '@/components/nav-menu';
import AlertDialogExample from '@/components/examples/alert-dialog-example';
import AlertExample from '@/components/examples/alert-example';
import AvatarExample from '@/components/examples/avatar-example';
import BadgeExample from '@/components/examples/badge-example';
import ButtonExample from '@/components/examples/button-example';
import CalendarExample from '@/components/examples/calendar-example';
import CardExample from '@/components/examples/card-example';
import CheckboxExample from '@/components/examples/checkbox-example';
import CollapsibleExample from '@/components/examples/collapsible-example';
import CommandExample from '@/components/examples/command-example';

const Examples = () => {
  const [activeComponent, setActiveComponent] = useState<string>('Accordion');

  return (
    <div className="container mx-auto p-4">
      <NavMenu setActiveComponent={setActiveComponent} />

      <div className='w-full h-full my-12'>
      {activeComponent === 'Accordion' && <AccordionExample />}
      {activeComponent === 'Alert Dialog' && <AlertDialogExample />}
      {activeComponent === 'Alert' && <AlertExample />}
      {activeComponent === 'Avatar' && <AvatarExample />}
      {activeComponent === 'Badge' && <BadgeExample />}
      {activeComponent === 'Button' && <ButtonExample />}
      {activeComponent === 'Calendar' && <CalendarExample />}
      {activeComponent === 'Card' && <CardExample />}
      {activeComponent === 'Checkbox' && <CheckboxExample />}
      {activeComponent === 'Collapsible' && <CollapsibleExample />}
      {activeComponent === 'Command' && <CommandExample />}
      
      </div>
    </div>
  );
};

export default Examples;

