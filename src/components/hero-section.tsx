import { Button } from "@/components/ui/button";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <Container className="text-center py-24 sm:py-32 lg:py-40">
      <Image
        src="/nelson.png"
        alt="Nelson Castro Andrews"
        width={160}
        height={160}
        className="rounded-full mx-auto mb-8 border-4 border-primary shadow-lg"
        priority
      />
      <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-primary">
        Convirtiendo Datos Crudos en Software de Negocio y Decisión.
      </h1>
      <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
        Soy <span className="font-bold">Nelson Castro Andrews</span>, Ingeniero de Sistemas y Científico de Datos. Experto en la arquitectura y despliegue de <span className="font-semibold text-primary/90">Pipelines de ML robustos</span> con <span className="font-semibold text-primary/90">Airflow, FastAPI y Prefect</span>.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="#projects">
            🚀 Ver Proyectos MLOps y Despliegue
          </Link>
        </Button>
      </div>
    </Container>
  );
}
