import React, { FunctionComponent } from 'react';
import { Header } from './Header';
import { BookGallery } from './BookGallery';
import { BrowserSolidLdoProvider } from '@ldo/solid-react';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserSolidLdoProvider>
        <Header />
        <BookGallery />
      </BrowserSolidLdoProvider>
    </div>
  );
}

export default App;