// Layout.js
import React from 'react';
import Header from './../header/Header'; // Adjust the import path as needed

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
