import "./layout.css";
import Sidebar from '@/app/components/layout/Sidebar';
import Header from '@/app/components/layout/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body className="text-blueGray-700 antialiased">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          <Sidebar />
          <div className="relative md:ml-64 bg-blueGray-50">
            <Header />
            <div className="px-4 md:px-10 mx-auto w-full -m-24">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
