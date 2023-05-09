import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import FlashMessage from 'react-native-flash-message';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from 'src/navigation';
import { ThemeProvider } from 'src/style/theme';

const queryTime = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1800 * 1000,
      cacheTime: queryTime,
    },
  },
});

if (__DEV__) {
  import('react-query-native-devtools').then(({ addPlugin }) => {
    addPlugin({ queryClient });
  });
}

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 300);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Navigation />
        <FlashMessage position="top" />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Sentry.wrap(App);
