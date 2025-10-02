import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-5xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold">Nelson Castro Andrews</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-4">
            <Button variant="link" asChild><Link href="#skills">Habilidades</Link></Button>
            <Button variant="link" asChild><Link href="#projects">Proyectos</Link></Button>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
