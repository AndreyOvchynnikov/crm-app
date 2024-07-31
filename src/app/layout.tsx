import React from "react";
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        <div>Header</div>
        {children}
      <footer>Footer</footer>
      </body>
      
    </html>
  )
};
