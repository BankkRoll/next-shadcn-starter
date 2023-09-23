import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, Cross1Icon } from '@radix-ui/react-icons';
import {
  Badge,
  Button,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  ToggleTheme,
} from '../components/shadcn/ui';

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-20 pb-0 md:pb-24`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="relative">
          <Badge
            variant={'outline'}
            className="fixed left-0 top-0 flex w-full text-xs md:text-sm justify-between items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 lg:justify-center"
          >
            Get started by editing src/pages/index.tsx
            <div className="block lg:hidden lg:absolute lg:top-4 lg:right-4">
              <ToggleTheme />
            </div>
          </Badge>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="hidden lg:block">
            <ToggleTheme />
          </div>
        </div>
      </div>

      <div className="relative grid place-items-center before:absolute ">
        <Image
          className="relative md:py-4 py-6 pt-12 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <Cross1Icon width={24} height={24} className="my-6" />
        <p className="text-4xl font-semibold mb-6">shadcn/ui</p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://github.com/BankkRoll/next-shadcn-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="h-full group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <CardHeader>
              <CardTitle className="mb-2 text-xl md:text-2xl font-semibold">
                GitHub{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  <ArrowRightIcon width={28} height={28} />
                </span>
              </CardTitle>
              <CardDescription className="m-0 max-w-[30ch] text-sm opacity-50">
                Find in-depth information about this starter project and its custom components.
              </CardDescription>
            </CardHeader>
          </Card>
        </a>

        <a
          href="https://www.npmjs.com/package/create-next-shadcn-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="h-full group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <CardHeader>
              <CardTitle className="mb-2 text-xl md:text-2xl font-semibold">
                NPM{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  <ArrowRightIcon width={28} height={28} />
                </span>
              </CardTitle>
              <CardDescription className="m-0 max-w-[30ch] text-sm opacity-50">
                Learn how to install this starter easily directly via CLI.
              </CardDescription>
            </CardHeader>
          </Card>
        </a>

        <Link
          href="/examples"
        >
          <Card className="h-full group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <CardHeader>
              <CardTitle className="mb-2 text-xl md:text-2xl font-semibold">
                Examples{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  <ArrowRightIcon width={28} height={28} />
                </span>
              </CardTitle>
              <CardDescription className="m-0 max-w-[30ch] text-sm opacity-50">
                View and test the custom shadcn/ui components included in this starter.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <a
          href="https://ui.shadcn.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="h-full group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <CardHeader>
              <CardTitle className="mb-2 text-xl md:text-2xl font-semibold">
                shadcn/ui{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  <ArrowRightIcon width={28} height={28} />
                </span>
              </CardTitle>
              <CardDescription className="m-0 max-w-[30ch] text-sm opacity-50">
                Beautifully designed components that you can copy and paste into
                your apps.
              </CardDescription>
            </CardHeader>
          </Card>
        </a>
      </div>
    </main>
  );
}
