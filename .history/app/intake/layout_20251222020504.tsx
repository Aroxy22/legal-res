import "./globals.css";
import { IntakeProvider } from "./intake/_context/IntakeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <IntakeProvider>{children}</IntakeProvider>
      </body>
    </html>
  );
}
