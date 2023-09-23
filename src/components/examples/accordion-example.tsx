import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Input,
  Label,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button
} from '../shadcn/ui';
import Viewer from '../Viewer';

const AccordionExample = () => {
  const [numItems, setNumItems] = useState(2);
  const [itemConfigs, setItemConfigs] = useState([
    { name: 'Item 1', content: 'Content 1' },
    { name: 'Item 2', content: 'Content 2' }
  ]);
  const [accordionType, setAccordionType] = useState<'single' | 'multiple'>('single');
  const installCommand = 'npx shadcn-ui@latest add accordion';
  const componentName = 'Accordion, AccordionContent, AccordionItem, AccordionTrigger,';

  const handleItemConfigChange = (index: number, key: 'name' | 'content', value: string) => {
    const newConfigs = [...itemConfigs];
    newConfigs[index][key] = value;
    setItemConfigs(newConfigs);
  };

  const handleNumItemsChange = (newNum: number) => {
    if (newNum >= 0) {  // Check to ensure the number is non-negative
      const newConfigs = Array(newNum).fill({ name: 'Default Item', content: 'Default content' });
      setItemConfigs(newConfigs);
      setNumItems(newNum);
    } else {
      console.error('Invalid number of items:', newNum);
    }
  };
  
  const controlsComponent = (
    <div className="flex flex-col space-y-4">
    <Label>
      Number of Items:
      <Input
        type="number"
        value={numItems}
        onChange={(e) => handleNumItemsChange(parseInt(e.target.value, 10))}
      />
    </Label>

    <Label>
      Accordion Type:
      <DropdownMenu>
        <DropdownMenuTrigger className='outline outline-1 outline-ring rounded m-2 p-1'>{accordionType}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => setAccordionType('single')}>
            Single
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setAccordionType('multiple')}>
            Multiple
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Label>

    {itemConfigs.map((config, i) => (
      <div key={i} className="flex space-x-4">
        <Label>
          {`Name for Item ${i + 1}:`}
          <Input
            type="text"
            value={config.name}
            onChange={(e) => handleItemConfigChange(i, 'name', e.target.value)}
          />
        </Label>
        <Label>
          {`Content for Item ${i + 1}:`}
          <Input
            type="text"
            value={config.content}
            onChange={(e) => handleItemConfigChange(i, 'content', e.target.value)}
          />
        </Label>
      </div>
    ))}
  </div>
  );

  const accordionComponent = (
    <Accordion type={accordionType}>
      {itemConfigs.map((config, index) => (
        <AccordionItem value={index.toString()} key={index}>
          <AccordionTrigger>{config.name}</AccordionTrigger>
          <AccordionContent>{config.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  const accordionCode = `
    <Accordion type="${accordionType}">
      ${itemConfigs.map(
        (config, index) => `
        <AccordionItem value="${index}">
          <AccordionTrigger>${config.name}</AccordionTrigger>
          <AccordionContent>${config.content}</AccordionContent>
        </AccordionItem>
      `
      ).join('')}
    </Accordion>
  `;

  return (
    <div className="container mx-auto p-4">
      {/* The Accordion */}
      <div>
      <Viewer 
        component={accordionComponent} 
        code={accordionCode} 
        settings={controlsComponent}
        installCommand={installCommand}
        componentName={componentName}
      />
      </div>
    </div>
  );
};

export default AccordionExample;

