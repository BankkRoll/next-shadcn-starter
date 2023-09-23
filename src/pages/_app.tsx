import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../lib/theme-provider';
import { Toaster } from '@/components/shadcn/ui/toaster';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
}
