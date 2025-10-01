import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "./container";
import Link from "next/link";

export function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://www.linkedin.com/in/nelson-castro-andrews-4a27541b4/", 
    },
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/Armegas",
    },
    {
      name: "Email",
      icon: <Mail className="h-6 w-6" />,
      url: "mailto:nelsoncastroandrews@gmail.com", 
    },
  ];

  return (
    <footer className="border-t">
      <Container className="py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.icon}
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nelson Castro Andrews. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
