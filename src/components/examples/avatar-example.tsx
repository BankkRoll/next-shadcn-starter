import React, { useState } from 'react';
import Viewer from '../Viewer';
import { Input, Label, Avatar, AvatarImage, AvatarFallback } from '../shadcn/ui';

const AvatarExample = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [fallbackText, setFallbackText] = useState<string>('AB');
  
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleFallbackTextChange = (newText: string) => {
      setFallbackText(newText);
    };
  
    const controlsComponent = (
      <div className="flex flex-col space-y-4">
        <Label>
          Upload Image:
          <Input type="file" onChange={handleImageChange} />
        </Label>
        <Label>
          Fallback Text:
          <Input
            type="text"
            value={fallbackText}
            onChange={(e) => handleFallbackTextChange(e.target.value)}
          />
        </Label>
      </div>
    );
  
    const avatarComponent = (
      <Avatar>
        {imageSrc ? (
          <AvatarImage src={imageSrc} alt="Avatar" />
        ) : (
          <AvatarFallback>{fallbackText}</AvatarFallback>
        )}
      </Avatar>
    );
  
    const avatarCode = `
    <Avatar>
      {imageSrc ? (
        <AvatarImage src={imageSrc} alt="Avatar" />
      ) : (
        <AvatarFallback>${fallbackText}</AvatarFallback>
      )}
    </Avatar>
    `;
  
    return (
      <div className="container mx-auto p-4">
        <Viewer
          component={avatarComponent}
          code={avatarCode}
          settings={controlsComponent}
          installCommand="npx shadcn-ui@latest add avatar"
          componentName="Avatar, AvatarImage, AvatarFallback"
        />
      </div>
    );
  };
  
  export default AvatarExample;