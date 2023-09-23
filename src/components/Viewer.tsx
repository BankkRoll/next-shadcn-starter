import React, { useEffect, useMemo, useState } from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Card,
  CardContent,
} from './shadcn/ui';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';

type ViewerProps = {
  component: React.ReactNode;
  code: string;
  settings?: React.ReactNode;
  installCommand?: string;
  componentName?: string;
};

const Viewer: React.FC<ViewerProps> = ({
  component,
  code,
  settings,
  installCommand,
  componentName,
}) => {
  const [activeTab, setActiveTab] = useState<string>('component');
  const [isCopiedCode, setIsCopiedCode] = useState(false);
  const [isCopiedInstall, setIsCopiedInstall] = useState(false);
  const installCommands = useMemo(() => {
    return installCommand ? installCommand.split(',') : [];
  }, [installCommand]);

  const [copiedInstallCommands, setCopiedInstallCommands] = useState<boolean[]>(
    []
  );

  useEffect(() => {
    setCopiedInstallCommands(new Array(installCommands.length).fill(false));
  }, [installCommands]);

  const handleCopy = (
    text: string,
    setCopyState: React.Dispatch<React.SetStateAction<boolean>>,
    idx?: number
  ) => {
    navigator.clipboard.writeText(text);
    setCopyState(true);

    if (idx !== undefined) {
      const newCopiedStates = [...copiedInstallCommands];
      newCopiedStates[idx] = true;
      setCopiedInstallCommands(newCopiedStates);
      setTimeout(() => {
        newCopiedStates[idx] = false;
        setCopiedInstallCommands(newCopiedStates);
      }, 2000);
    } else {
      setTimeout(() => setCopyState(false), 2000);
    }
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <Card className="border p-4 min-h-[82vh] outline outline-1 outline-ring">
      <CardContent>
        <div className="flex flex-col md:flex-row mt-4">
          <div className="flex-none md:flex-1 mb-4 md:mb-0 md:mr-4 w-full md:w-1/2 overflow-auto rounded-lg p-4">
            {settings}
          </div>
          <div className="flex-grow md:flex-1 w-full md:w-1/2">
            <Tabs defaultValue="component" onValueChange={setActiveTab}>
              <TabsList className="flex justify-between mb-4">
                <TabsTrigger
                  onClick={() => setActiveTab('component')}
                  className={activeTab === 'component' ? 'active-class' : ''}
                  value="component"
                >
                  Component
                </TabsTrigger>
                <TabsTrigger
                  onClick={() => setActiveTab('code')}
                  className={activeTab === 'code' ? 'active-class' : ''}
                  value="code"
                >
                  Code
                </TabsTrigger>
              </TabsList>
              <TabsContent
                className={`${
                  activeTab === 'component' ? '' : 'hidden'
                } w-full h-full overflow-auto`}
                value="component"
              >
                {component}
              </TabsContent>
              <TabsContent
                className={`${
                  activeTab === 'code' ? '' : 'hidden'
                } relative w-full h-full overflow-auto rounded-lg p-4`}
                value="code"
              >
                <div className="relative">
                  To install:
                  {installCommands.map((cmd, idx) => (
                    <div key={idx} className="relative my-2">
                      <button
                        onClick={() =>
                          handleCopy(cmd.trim(), setIsCopiedInstall, idx)
                        }
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10"
                      >
                        {copiedInstallCommands[idx] ? (
                          <CheckIcon />
                        ) : (
                          <CopyIcon />
                        )}
                      </button>
                      <code>
                        <pre className="text-xs md:text-sm lg:text-base overflow-auto rounded-lg language-javascript">
                          {cmd.trim()}
                        </pre>
                      </code>
                    </div>
                  ))}
                </div>

                <div className="my-2 py-2 px-4 rounded items-center">
                  <p className="text-sm mb-0">
                    You need to import the component as:
                  </p>
                  <code className="text-xs md:text-sm lg:text-base mx-1">
                    import
                  </code>
                  <code className="text-xs md:text-sm lg:text-base mx-1 rounded-lg language-javascript p-1">
                    {'{ '}
                    {componentName}
                    {' }'}
                  </code>
                  <code className="text-xs md:text-sm lg:text-base mx-1">
                    from &apos;../your/shadcn/ui/folder&apos;;
                  </code>
                </div>

                <div className="relative">
                  <button
                    onClick={() => handleCopy(code, setIsCopiedCode)}
                    className="absolute top-2 right-2 z-10"
                  >
                    {isCopiedCode ? <CheckIcon /> : <CopyIcon />}
                  </button>
                  <pre className="text-xs md:text-sm lg:text-base overflow-auto rounded-lg language-javascript">
                    <code>{code}</code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Viewer;
