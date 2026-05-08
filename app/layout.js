import "./globals.css";

export const metadata = {
  title: "Pilates Her Australia",
  description: "Pilates empowerment app for women in Australia"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
