import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "./container";
import { Github } from "lucide-react";

const projects = [
  {
    title: "MLOps: Orquestación y Despliegue",
    repo: "Armegas/pipeline-flow-api",
    description: "Arquitectura de Data Pipelines para ML. Sistema de extremo a extremo para ingesta, transformación, scoring y despliegue final a través de un endpoint de FastAPI para inferencia en tiempo real.",
    tags: ["Airflow", "FastAPI", "Python", "MLOps"],
    link: "https://github.com/Armegas/pipeline-flow-api",
  },
  {
    title: "MLOps: Trazabilidad y Gestión",
    repo: "Armegas/iris-mlops-bot",
    description: "Caso práctico del ciclo de vida del modelo (MLOps) usando el dataset Iris. Incluye trazabilidad con MLflow, una UI interactiva con Streamlit y model serving con FastAPI.",
    tags: ["MLflow", "Streamlit", "FastAPI", "UI/UX"],
    link: "https://github.com/Armegas/iris-mlops-bot",
  },
  {
    title: "Software & Servicios de Inteligencia",
    repo: "Armegas/osint-portafolio",
    description: "Solución tipo SaaS para clientes que requieren informes de OSINT y auditorías de reputación online. Aplicación de ingeniería y ciencia de datos a la Ciberseguridad y Evidencia Digital Legal.",
    tags: ["OSINT", "SaaS", "Ciberseguridad", "Python"],
    link: "https://github.com/Armegas/osint-portafolio",
  },
  {
    title: "Deep Learning & Contribución Académica",
    repo: "Armegas/4Geeks...",
    description: "Material de clase de Redes de Neuronas Artificiales (RNA) que demuestra la capacidad de desglosar conceptos complejos de Deep Learning y la experiencia como instructor.",
    tags: ["Deep Learning", "Educación", "RNA", "Mentoring"],
    link: "https://github.com/Armegas/4Geeks_Academy_RNA_Redes-de-Neuronas-Artificiales-clase-",
  },
  {
    title: "Exploración Tecnológica Web3",
    repo: "Armegas/Hackthon-WEB3",
    description: "Proyecto desarrollado en un hackathon que explora tecnologías de la Web3. Muestra capacidad de aprendizaje rápido y adaptación a tecnologías emergentes.",
    tags: ["Web3", "Hackathon", "Blockchain"],
    link: "https://github.com/Armegas/Hackthon-WEB3",
  },
];

export function ProjectsSection() {
  return (
    <Container id="projects">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Mis Proyectos Clave
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Arquitectura, MLOps y Disrupción
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.repo} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription>{project.repo}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-foreground/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Ver en GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  );
}
