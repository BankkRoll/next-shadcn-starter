import * as React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "../components/shadcn/ui";

type NavMenuProps = {
  setActiveComponent: (component: string) => void;
};

const NavMenu: React.FC<NavMenuProps> = ({ setActiveComponent }) => {
  const basicComponents = [
    "Avatar", "Badge", "Button", "Card", "Checkbox", "Form", "Input", 
    "Label", "Radio Group", "Select", "Slider", "Switch", "Textarea", "Toggle"
  ];
  const interactiveComponents = [
    "Alert", "Alert Dialog", "Dialog", "Hover Card", "Popover", 
    "Toast", "Toaster", "Tooltip", "Use Toast"
  ];
  const advancedComponents = [
    "Accordion", "Aspect Ratio", "Calendar", "Collapsible", "Command", 
    "Context Menu", "Menubar", "Navigation Menu", "Scroll Area", "Separator", 
    "Sheet", "Skeleton", "Table", "Tabs"
  ];
  

  const handleComponentClick = (component: string) => {
    setActiveComponent(component);
  };

  const createListItems = (components: string[], description: string) => {
    return (
      <div className="grid gap-3 p-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:grid-cols-[.75fr_1fr]">
        <div className="flex flex-col space-y-3 bg-gradient-to-b from-muted/50 to-muted p-6 rounded-md">
          <div className="mb-2 mt-4 text-lg font-medium">
            {description}
          </div>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {components.map((component) => (
            <li key={component}>
              <button onClick={() => handleComponentClick(component)}>
                {component}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Basic</NavigationMenuTrigger>
          <NavigationMenuContent>
            {createListItems(basicComponents, "Basic UI and form elements")}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Interactive</NavigationMenuTrigger>
          <NavigationMenuContent>
            {createListItems(interactiveComponents, "Dialogs and Notifications")}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Advanced</NavigationMenuTrigger>
          <NavigationMenuContent>
            {createListItems(advancedComponents, "Complex Layouts and UI")}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;