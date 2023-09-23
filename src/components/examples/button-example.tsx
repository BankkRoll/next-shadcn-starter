import React, { useState } from 'react';
import { Button, Input, Label, Select, SelectTrigger, SelectItem, SelectContent } from '../shadcn/ui';
import Viewer from '../Viewer';

type ButtonVariantType = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "success" | "info" | "warning" | undefined;
type ButtonSizeType = "default" | "sm" | "lg" | "icon" | undefined;

const ButtonExample = () => {
  const [variant, setVariant] = useState<ButtonVariantType>('default');
  const [size, setSize] = useState<ButtonSizeType>('default');
  const [content, setContent] = useState('Click Me');

  const handleVariantChange = (newVariant: string): void => {
    setVariant(newVariant as ButtonVariantType);
  };

  const handleSizeChange = (newSize: string): void => {
    setSize(newSize as ButtonSizeType);
  };

  const handleContentChange = (newContent: string): void => {
    setContent(newContent);
  };

  const controlsComponent = (
    <div className="flex flex-col space-y-4">
      <Label>
        Content:
        <Input type="text" value={content} onChange={(e) => handleContentChange(e.target.value)} />
      </Label>
      <Label>
        Variant:
        <Select value={variant} onValueChange={handleVariantChange}>
          <SelectTrigger>{variant || 'Select a variant'}</SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="destructive">Destructive</SelectItem>
            <SelectItem value="outline">Outline</SelectItem>
            <SelectItem value="secondary">Secondary</SelectItem>
            <SelectItem value="ghost">Ghost</SelectItem>
            <SelectItem value="link">Link</SelectItem>
            <SelectItem value="success">Success</SelectItem>
            <SelectItem value="info">Info</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
          </SelectContent>
        </Select>
      </Label>
      <Label>
        Size:
        <Select value={size} onValueChange={handleSizeChange}>
          <SelectTrigger>{size || 'Select a size'}</SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="sm">Small</SelectItem>
            <SelectItem value="lg">Large</SelectItem>
            <SelectItem value="icon">Icon</SelectItem>
          </SelectContent>
        </Select>
      </Label>

    </div>
  );

  const buttonComponent = (
    <Button variant={variant} size={size}>
      {content}
    </Button>
  );

  const buttonCode = `
    <Button variant="${variant}" size="${size}">
      ${content}
    </Button>
  `;

  return (
    <div className="container mx-auto p-4">
      <Viewer 
        component={buttonComponent} 
        code={buttonCode} 
        settings={controlsComponent}
        installCommand="npx shadcn-ui@latest add button"
        componentName="Button"
      />
    </div>
  );
};

export default ButtonExample;
