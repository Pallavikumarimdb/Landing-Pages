import 'ui/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#DCD7C9]">
      <body>{children}</body>
    </html>
  );
}
