import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  Input,
  Label,
} from '../shadcn/ui';
import Viewer from '../Viewer';

const AlertDialogExample = () => {
  const [title, setTitle] = useState('Default Title');
  const [description, setDescription] = useState('Default Description');
  const [confirmLabel, setConfirmLabel] = useState('Confirm');
  const [cancelLabel, setCancelLabel] = useState('Cancel');

  const handleTitleChange = (newTitle: string): void => {
    setTitle(newTitle);
  };
  
  const handleDescriptionChange = (newDescription: string): void => {
    setDescription(newDescription);
  };
  
  const handleConfirmLabelChange = (newLabel: string): void => {
    setConfirmLabel(newLabel);
  };
  
  const handleCancelLabelChange = (newLabel: string): void => {
    setCancelLabel(newLabel);
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
        Confirm Label:
        <Input type="text" value={confirmLabel} onChange={(e) => handleConfirmLabelChange(e.target.value)} />
      </Label>
      <Label>
        Cancel Button Label:
        <Input type="text" value={cancelLabel} onChange={(e) => handleCancelLabelChange(e.target.value)} />
      </Label>
    </div>
  );

  const alertDialogComponent = (
    <AlertDialog>
      <AlertDialogTrigger>Click Me!</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction>{confirmLabel}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  const alertDialogCode = `
    <AlertDialog>
      <AlertDialogTrigger>${confirmLabel}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>${title}</AlertDialogTitle>
          <AlertDialogDescription>${description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>${cancelLabel}</AlertDialogCancel>
          <AlertDialogAction>${confirmLabel}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  `;

  return (
    <div className="container mx-auto p-4">
      <Viewer 
        component={alertDialogComponent} 
        code={alertDialogCode} 
        settings={controlsComponent}
        installCommand="npx shadcn-ui@latest add alert-dialog"
        componentName="AlertDialog, AlertDialogTrigger, AlertDialogContent, etc."
      />
    </div>
  );
};

export default AlertDialogExample;