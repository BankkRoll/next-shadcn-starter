import React, { useState } from 'react';
import { Badge, Input, Label, Select, SelectTrigger, SelectItem, SelectContent } from '../shadcn/ui';
import Viewer from '../Viewer';

type BadgeVariantType = "default" | "secondary" | "destructive" | "success" | "info" | "warning" | "outline" | undefined;

const BadgeExample = () => {
  const [variant, setVariant] = useState<BadgeVariantType>('default');
  const [content, setContent] = useState('Badge');

  const handleVariantChange = (newVariant: string): void => {
    setVariant(newVariant as BadgeVariantType);
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
            <SelectItem value="secondary">Secondary</SelectItem>
            <SelectItem value="destructive">Destructive</SelectItem>
            <SelectItem value="success">Success</SelectItem>
            <SelectItem value="info">Info</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
            <SelectItem value="outline">Outline</SelectItem>
          </SelectContent>
        </Select>
      </Label>
    </div>
  );

  const badgeComponent = (
    <Badge variant={variant}>
      {content}
    </Badge>
  );

  const badgeCode = `
    <Badge variant="${variant}">
      ${content}
    </Badge>
  `;

  return (
    <div className="container mx-auto p-4">
      <Viewer 
        component={badgeComponent} 
        code={badgeCode} 
        settings={controlsComponent}
        installCommand="npx shadcn-ui@latest add badge"
        componentName="Badge"
      />
    </div>
  );
};

export default BadgeExample;
