import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Nelson Castro Andrews: MLOps Engineer | Data Pipelines (Airflow) & FastAPI',
  description: 'Data Scientist y Desarrollador de Software. Experto en orquestación de Pipelines de Datos con Airflow, despliegue en tiempo real con FastAPI y modelos de Redes Neuronales (RNA). Portafolio de MLOps y OSINT.',
  keywords: ['MLOps Engineer', 'Data Pipelines', 'Airflow DAGs', 'FastAPI', 'Redes Neuronales', 'Data Scientist', 'OSINT', 'Ciberseguridad', 'Python', 'Despliegue ML'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
