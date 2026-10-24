import './globals.css';

export const metadata = {
  title: 'Wada Technologies',
  description:
    'Wada Technologies designs and builds fast, animated, carefully engineered websites and web apps.',
};



export const viewport = {
  themeColor: '#060912',
  colorScheme: 'dark',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;700&family=Syne:wght@600;700;800&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
