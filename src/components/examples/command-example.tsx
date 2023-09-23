import React, { useState } from 'react';
import { Label, Input, Checkbox, Button } from '../shadcn/ui';
import Viewer from '../Viewer';
import { 
  Command, 
  CommandDialog, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem, 
  CommandShortcut, 
  CommandSeparator 
} from '../shadcn/ui';

const CommandExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(true);
  const [groups, setGroups] = useState([
    { heading: "File", items: ["New File", "Open File"] },
    { heading: "Edit", items: ["Copy", "Paste"] }
  ]);

  const addGroup = () => {
    setGroups([...groups, { heading: "New Group", items: [] }]);
  };

  const addItemToGroup = (groupIndex: number) => {
    const newGroups = [...groups];
    newGroups[groupIndex].items.push("New Item");
    setGroups(newGroups);
  };

  const controlsComponent = (
    <div className="flex flex-col space-y-4">
      <Label>
        Open Command Palette:
        <Checkbox checked={isOpen} onCheckedChange={() => setIsOpen(!isOpen)} />
      </Label>
      <Label>
        Show Shortcuts:
        <Checkbox checked={showShortcuts} onCheckedChange={() => setShowShortcuts(!showShortcuts)} />
      </Label>
      <Button onClick={addGroup}>Add Group</Button>
      {groups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <Input 
            value={group.heading} 
            onChange={(e) => {
              const newGroups = [...groups];
              newGroups[groupIndex].heading = e.target.value;
              setGroups(newGroups);
            }} 
          />
          <Button onClick={() => addItemToGroup(groupIndex)}>Add Item</Button>
          {group.items.map((item, itemIndex) => (
            <Input 
              key={itemIndex}
              value={item} 
              onChange={(e) => {
                const newGroups = [...groups];
                newGroups[groupIndex].items[itemIndex] = e.target.value;
                setGroups(newGroups);
              }} 
            />
          ))}
        </div>
      ))}
    </div>
  );

  const commandComponent = (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>Open Command Palette</Button>
      <CommandDialog open={isOpen}>
        <CommandInput placeholder="Search for a command..." />
        <CommandList>
        {groups.map((group, groupIndex) => (
          <CommandGroup heading={group.heading} key={groupIndex}>
            {group.items.map((item, itemIndex) => (
              <CommandItem key={itemIndex}>{item}</CommandItem>
            ))}
          </CommandGroup>
        ))}
        <CommandEmpty>No commands available</CommandEmpty>
      </CommandList>
    </CommandDialog>
    </>
  );

  const commandCode = `
    <CommandDialog open={${isOpen}}>
      <CommandInput placeholder="Search for a command..." />
      <CommandList>
        <CommandGroup heading="File">
          <CommandItem>New File</CommandItem>
          <CommandShortcut>Cmd+N</CommandShortcut>
          <CommandItem>Open File</CommandItem>
          <CommandShortcut>Cmd+O</CommandShortcut>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Edit">
          <CommandItem>Copy</CommandItem>
          <CommandShortcut>Cmd+C</CommandShortcut>
          <CommandItem>Paste</CommandItem>
          <CommandShortcut>Cmd+V</CommandShortcut>
        </CommandGroup>
        <CommandEmpty>No commands available</CommandEmpty>
      </CommandList>
    </CommandDialog>
  `;

  return (
    <div className="container mx-auto p-4">
      <Viewer 
        component={commandComponent} 
        code={commandCode} 
        settings={controlsComponent}
        installCommand="npx shadcn-ui@latest add command"
        componentName="Command"
      />
    </div>
  );
};

export default CommandExample;
