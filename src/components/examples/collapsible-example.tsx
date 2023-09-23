import React, { useState } from 'react';
import Viewer from '../Viewer';
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Label, Checkbox, Input } from '../shadcn/ui';

const CollapsibleExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [triggerText, setTriggerText] = useState('Toggle Collapsible Section');
  const [contentText, setContentText] = useState('This is the content inside the collapsible section.');

  const controlsComponent = (
    <div className="flex flex-col space-y-4">
      <Label>
        Open:
        <Checkbox className='ml-2' checked={isOpen} onCheckedChange={() => setIsOpen(!isOpen)} />
      </Label>
      <Label>
        Disabled:
        <Checkbox className='ml-2' checked={isDisabled} onCheckedChange={() => setIsDisabled(!isDisabled)} />
      </Label>
      <Label>
        Trigger Text:
        <Input type="text" value={triggerText} onChange={(e) => setTriggerText(e.target.value)} />
      </Label>
      <Label>
        Content Text:
        <Input type="text" value={contentText} onChange={(e) => setContentText(e.target.value)} />
      </Label>
    </div>
  );


  const collapsibleComponent = (
    <Collapsible open={isOpen} disabled={isDisabled}>
      <CollapsibleTrigger>{triggerText}</CollapsibleTrigger>
      <CollapsibleContent>
        <p>{contentText}</p>
      </CollapsibleContent>
    </Collapsible>
  );

  const collapsibleCode = `
    <Collapsible open={${isOpen}} disabled={${isDisabled}}>
      <CollapsibleTrigger>${triggerText}</CollapsibleTrigger>
      <CollapsibleContent>
        <p>${contentText}</p>
      </CollapsibleContent>
    </Collapsible>
  `;

  return (
    <div className="container mx-auto p-4">
      <Viewer 
        component={collapsibleComponent} 
        code={collapsibleCode} 
        settings={controlsComponent}
        installCommand="npx shadcn-ui@latest add collapsible"
        componentName="Collapsible"
      />
    </div>
  );
};

export default CollapsibleExample;
