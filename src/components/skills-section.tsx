import { BrainCircuit, Rocket, ShieldCheck, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "./container";

const skills = [
  {
    icon: <Workflow className="h-8 w-8 text-primary" />,
    title: "Orquestación y Data Pipelines",
    description: "Diseño, construcción y monitoreo de Data Pipelines (ETL/ELT) modulares y tolerantes a fallos con Apache Airflow. Creación de DAGs complejos para automatizar el ciclo de vida de modelos de Machine Learning (MLOps).",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Despliegue y APIs en Tiempo Real",
    description: "Desarrollo de APIs de alto rendimiento y baja latencia con FastAPI para el model serving. Implementación de arquitecturas robustas para asegurar el despliegie en tiempo real de resultados y predicciones.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Machine Learning Avanzado",
    description: "Sólida base en el diseño e implementación de modelos de Deep Learning y Redes Neuronales Artificiales (RNA). Experiencia en la enseñanza y conceptualización de temas complejos, como se evidencia en mi contribución académica.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Ciberseguridad y OSINT",
    description: "Aplicación de habilidades de desarrollo para ofrecer servicios profesionales de Inteligencia de Fuentes Abiertas (OSINT) y auditorías de reputación online, generando entregables legales y confiables para clientes.",
  },
];

export function SkillsSection() {
  return (
    <Container id="skills" className="bg-card border-y">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Mi Stack de Ingeniería
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Desde la Orquestación hasta el Despliegue en Tiempo Real
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {skills.map((skill, index) => (
          <Card key={skill.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-card">
            <CardHeader className="flex flex-row items-center gap-4">
              {skill.icon}
              <CardTitle className="text-xl font-semibold text-primary">{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
