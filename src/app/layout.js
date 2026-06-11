import "./globals.css";

export const metadata = {
  title: "RiPEN",
  description: "It knows before you do",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}