import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vozes Cifras',
  description: 'Site de Cifra do Vozes da Imaculada',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id="teste">
                {children}
            </body>
    </html>
  )
}
