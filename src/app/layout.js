import "./globals.css";

export const metadata = {
  metadataBase: "https://msf-next.vercel.app",
  title: "MSF",
  description: "America's Premier Law Firm for Sexual Abuse Cases",
  openGraph: {
    title: "MSF",
    description: "America's Premier Law Firm for Sexual Abuse Cases",
    images: ["/meta-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
