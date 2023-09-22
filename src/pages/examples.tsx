// src/pages/test.tsx
import React, { useState, useEffect } from 'react';
import { RocketIcon } from '@radix-ui/react-icons';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  Alert,
  AlertDescription,
  AlertTitle,
  AspectRatio,
  AuthModal,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Badge,
  Button,
  Calendar,
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  Checkbox,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
  DataTableDemo,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Input,
  Label,
  ToggleTheme,
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ScrollArea,
  ScrollBar,
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  Separator,
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  Skeleton,
  Slider,
  Switch,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Textarea,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  Toaster,
  Toggle,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '../components/ui';

const Examples = () => {
  return (
    <div className="p-4 space-y-4 max-w-4xl mx-auto">
      <Accordion type="single">
        <AccordionItem value={'1'}>
          <AccordionTrigger>This is a accordian question?</AccordionTrigger>
          <AccordionContent>
            This is the answer to the question.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator width="full" />

      <AlertDialog>
        <AlertDialogTrigger>
          <Button>Open Alert Dialog</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Alert Dialog</AlertDialogTitle>
          </AlertDialogHeader>

          <AlertDialogDescription>
            This is a simple alert dialog example.
          </AlertDialogDescription>

          <AlertDialogFooter>
            <AlertDialogCancel as="button">Cancel</AlertDialogCancel>

            <AlertDialogAction as="button">Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Separator width="full" />

      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Alert!</AlertTitle>
        <AlertDescription>This is a default alert.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Alert!</AlertTitle>
        <AlertDescription>This is a destructive alert.</AlertDescription>
      </Alert>

      <Separator width="full" />

      <Avatar>
        <AvatarFallback src="https://bit.ly/dan-abramov" />
        <AvatarImage src="https://bit.ly/dan-abramov" />
      </Avatar>

      <Separator width="full" />

      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>

      <Separator width="full" />

      <AuthModal />

      <Separator width="full" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto">
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="info">Info</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">
          <RocketIcon />
        </Button>
      </div>

      <Separator width="full" />

      <Card className="outline outline-1 outline-ring max-w-fit">
        <Calendar />
      </Card>
      <Separator width="full" />

      <Card className="outline outline-1 outline-ring max-w-fit">
        <CardHeader>
          <CardTitle>This is a Card Title</CardTitle>
          <CardDescription>This is a Card Description</CardDescription>
        </CardHeader>
        <CardContent>This is the card content.</CardContent>
        <CardFooter>This is the card footer.</CardFooter>
      </Card>

      <Separator width="full" />

      <label className="flex items-center">
        <Checkbox />
        <span className="ml-2">Checkbox</span>
      </label>

      <Separator width="full" />

      <Progress
        value="50"
        min={0}
        max={100}
        type="circular"
        strokeWidth={12}
        colorVariant="destructive"
      />

      <Separator width="full" />

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>
            <p>This is a tooltip!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Separator width="full" />

      {/*
        // TODO: Finish all  components 
        <Collapsible> </Collapsible>
        <Command> </Command>
        <ContextMenu> </ContextMenu>
        <DataTableDemo />
        <Dialog> </Dialog>
        <DropdownMenu> </DropdownMenu>
        <Form />
        <HoverCard> </HoverCard>
        <Input />
        <Label> </Label>
        <ToggleTheme />
        <Menubar> </Menubar>
        <NavigationMenu> </NavigationMenu>
        <Popover> </Popover>
        <RadioGroup> </RadioGroup>
        <ScrollArea> </ScrollArea>
        <Select> </Select>
        <Separator> </Separator>
        <Sheet> </Sheet>
        <Skeleton> </Skeleton>
        <Slider> </Slider>
        <Switch> </Switch>
        <Table> </Table>
        <Tabs> </Tabs>
        <Textarea> </Textarea>        
        <Toggle> </Toggle>
    */}
    </div>
  );
};

export default Examples;
