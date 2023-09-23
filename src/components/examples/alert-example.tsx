import React, { useState } from 'react';
import { RocketIcon, CheckIcon, Cross1Icon, InfoCircledIcon , ExclamationTriangleIcon } from '@radix-ui/react-icons';
import {
  Alert,
  AlertTitle,
  AlertDescription,
  Input,
  Label,
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent
} from '../shadcn/ui';
import Viewer from '../Viewer';

type VariantType = "default" | "destructive" | "success" | "info" | "warning" | undefined;
type IconType = "Rocket" | "Check" | "Warning" | "Info" | "Close" | undefined;

const AlertExample = () => {
  const [title, setTitle] = useState('Default Title');
  const [description, setDescription] = useState('Default Description');
  const [variant, setVariant] = useState<VariantType>('default');
  const [icon, setIcon] = useState<IconType>('Rocket');

  const handleTitleChange = (newTitle: string): void => {
    setTitle(newTitle);
  };

  const handleDescriptionChange = (newDescription: string): void => {
    setDescription(newDescription);
  };

  const handleVariantChange = (newVariant: string): void => {
    setVariant(newVariant as VariantType);
  };

    const handleIconChange = (newIcon: string): void => {
    setIcon(newIcon as IconType);
  };

  const controlsComponent = (
    <div className="flex flex-col space-y-4">
      <Label>
        Icon:
        <Select value={icon} onValueChange={handleIconChange}>
          <SelectTrigger>{icon || 'Select an icon'}</SelectTrigger>
          <SelectContent>
            <SelectItem value="Rocket">Rocket</SelectItem>
            <SelectItem value="Check">Check</SelectItem>
            <SelectItem value="Warning">Warning</SelectItem>
            <SelectItem value="Info">Info</SelectItem>
            <SelectItem value="Close">Close</SelectItem>
          </SelectContent>
        </Select>
      </Label>
      <Label>
        Title:
        <Input type="text" value={title} onChange={(e) => handleTitleChange(e.target.value)} />
      </Label>
      <Label>
        Description:
        <Input type="text" value={description} onChange={(e) => handleDescriptionChange(e.target.value)} />
      </Label>
      <Label>
        Variant:
        <Select value={variant} onValueChange={handleVariantChange}>
            <SelectTrigger>{variant || 'Select a variant'}</SelectTrigger>
            <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="destructive">Destructive</SelectItem>
                <SelectItem value="success">Success</SelectItem> {/* New */}
                <SelectItem value="info">Info</SelectItem> {/* New */}
                <SelectItem value="warning">Warning</SelectItem> {/* New */}
            </SelectContent>
        </Select>
      </Label>
    </div>
  );

  const iconMapping = {
    Rocket: <RocketIcon className="h-4 w-4" />,
    Check: <CheckIcon className="h-4 w-4" />,
    Warning: <ExclamationTriangleIcon className="h-4 w-4" />,
    Info: <InfoCircledIcon className="h-4 w-4" />,
    Close: <Cross1Icon className="h-4 w-4" />
  };

  const alertComponent = (
    <Alert variant={variant}>
      {icon && iconMapping[icon]}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );


  const alertCode = `
    <Alert variant="${variant}">
    ${icon ? `<${icon}Icon className="h-4 w-4" />` : ''}
      <AlertTitle>${title}</AlertTitle>
      <AlertDescription>${description}</AlertDescription>
    </Alert>
  `;

  return (
    <div className="container mx-auto p-4">
      <Viewer 
        component={alertComponent} 
        code={alertCode} 
        settings={controlsComponent}
        installCommand="npx shadcn-ui@latest add alert, npm i @radix-ui/react-icons"
        componentName="Alert, AlertTitle, AlertDescription"
      />
    </div>
  );
};

export default AlertExample;
