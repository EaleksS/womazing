import '../styles/globals.css';
import Menu from '../component/Menu';
import { Raleway } from '@next/font/google';

const font = Raleway({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head />
      <body className={font.className}>
        <section className="wrapper">
          <Menu />
          {children}
        </section>
      </body>
    </html>
  );
}
