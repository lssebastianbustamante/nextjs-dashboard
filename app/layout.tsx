import { montserrat } from './ui/fonts';
import './ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Antialiased mejora la carga de la font segun el montiro o navegadore / Optimizacion de font */}
      <body className={`${montserrat.className} antialiased`}>
        {children}

        <footer className='py-10 flex justify-center items-center'>
          Hecho por :heart Luis
        </footer>
        </body>
    </html>
  );
}
