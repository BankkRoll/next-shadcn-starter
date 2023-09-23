import React, { useState } from 'react';
import Viewer from '../Viewer';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  Input, Label, Textarea
} from '../shadcn/ui';

const CardExample = () => {
  const [title, setTitle] = useState('Card Title');
  const [description, setDescription] = useState('Card Description');
  const [content, setContent] = useState('Card Content');
  const [footer, setFooter] = useState('Card Footer');

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleDescriptionChange = (newDescription: string) => {
    setDescription(newDescription);
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleFooterChange = (newFooter: string) => {
    setFooter(newFooter);
  };


  const controlsComponent = (
    <div className="flex flex-col space-y-4">
      <Label>
        Title:
        <Input type="text" value={title} onChange={(e) => handleTitleChange(e.target.value)} />
      </Label>
      <Label>
        Description:
        <Input type="text" value={description} onChange={(e) => handleDescriptionChange(e.target.value)} />
      </Label>
      <Label>
        Content:
        <Textarea value={content} onChange={(e) => handleContentChange(e.target.value)} />
      </Label>
      <Label>
        Footer:
        <Input type="text" value={footer} onChange={(e) => handleFooterChange(e.target.value)} />
      </Label>
    </div>
  );

  const cardComponent = (
    <Card className='border max-w-fit'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
      <CardFooter>
        {footer}
      </CardFooter>
    </Card>
  );

  const cardCode = `
    <Card className='border max-w-fit'>
      <CardHeader>
        <CardTitle>${title}</CardTitle>
        <CardDescription>${description}</CardDescription>
      </CardHeader>
      <CardContent>
        ${content}
      </CardContent>
      <CardFooter>
        ${footer}
      </CardFooter>
    </Card>
  `;

  return (
    <div className="container mx-auto p-4">
      <Viewer 
        component={cardComponent} 
        code={cardCode} 
        settings={controlsComponent}
        installCommand="npx shadcn-ui@latest add card"
        componentName="Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent"
      />
    </div>
  );
};

export default CardExample;