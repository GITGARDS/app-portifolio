export type MockRotasModel = {
  label: string;
  link: string;
};

export const MOCK_ROTAS: MockRotasModel[] = [
  {
    label: 'Sobre',
    link: '#sobre',
  },
  {
    label: 'Stacks',
    link: '#stacks',
  },
  {
    label: 'Projetos',
    link: '#projetos',
  },
];

export type MockStackModel = {
  title: string;
  descricao: string;
  icone: string;
};

export const MOCK_STACKS: MockStackModel[] = [
  {
    title: 'Java',
    descricao: 'Linguagem',
    icone: 'images/java.webp',
  },
  {
    title: 'Delphi',
    descricao: 'Linguagem',
    icone: 'images/delphi.png',
  },
  {
    title: 'Typescript',
    descricao: 'Linguagem',
    icone: 'images/typescript.png',
  },
  {
    title: 'Node.js',
    descricao: 'Ambiente',
    icone: 'images/nodejs.png',
  },
  {
    title: 'Next.js',
    descricao: 'Framework',
    icone: 'images/Nextjs.webp',
  },
  {
    title: 'Angular',
    descricao: 'Framework',
    icone: 'images/angular.png',
  },
  {
    title: 'Figma',
    descricao: 'Interface Design',
    icone: 'images/figma.png',
  },
  {
    title: 'MySql',
    descricao: 'Banco de dados',
    icone: 'images/mysql.png',
  },
  {
    title: 'Postgresql',
    descricao: 'Banco de dados',
    icone: 'images/postgresql.png',
  },
  {
    title: 'Prisma',
    descricao: 'ORM',
    icone: 'images/prisma.png',
  },
  {
    title: 'Drizzle',
    descricao: 'ORM',
    icone: 'images/drizzle.png',
  },
  {
    title: 'Neon',
    descricao: 'Database',
    icone: 'images/neon.jpg',
  },
  {
    title: 'Stripe',
    descricao: 'Payment',
    icone: 'images/Stripe.webp',
  },
  {
    title: 'Tailwind',
    descricao: 'estilização',
    icone: 'images/tailwindcss.webp',
  },
  {
    title: 'Vercel',
    descricao: 'Provedor',
    icone: 'images/Vercel.webp',
  },
  {
    title: 'Supabase',
    descricao: 'Database',
    icone: 'images/supabase.webp',
  },
  {
    title: 'Docker',
    descricao: 'Conteiner',
    icone: 'images/docker.png',
  },
];

export type MockProjetoModel = {
  titulo: string;
  descricao: string;
  href: string;
  capa: string;
  stacks: string[];
};

export const MOCK_PROJETOS: MockProjetoModel[] = [
  {
    titulo: 'Financas',
    descricao:
      'Finanças é a gestão do dinheiro, especialmente de empresas, organizações ou governos. Ela envolve o processo de aquisição, gasto e investimento de capital.',
    href: 'https://tnext-finance.vercel.app/',
    capa: 'images/projetos/finance.jpg',
    stacks: [
      'Next.js',
      'Typescript',
      'Shadcn UI',
      'Tailwind',
      'Drizzle',
      'Clerk',
      'Hono',
      'Neon',
      'Zod',
    ],
  },

  {
    titulo: 'ScraperFlow',
    descricao:
      'Automatize sites e extraia dados sem esforço algum — sem precisar de codificação. O flow builder do FlowScraper e as ações de IA personalizáveis ​​tornam a automação da web fácil, eficiente e flexível.',
    href: 'https://tnext-scrape-flow.vercel.app/',
    capa: 'images/projetos/scrape.jpg',
    stacks: [
      'Next.Js',
      'Typescript',
      'Shadcn UI',
      'Tailwind',
      'Prisma',
      'Clerk',
      'Stripe',
      'Zod',
    ],
  },
  {
    titulo: 'Landing Page',
    descricao:
      'Uma landing page é uma página da web que visa atrair visitantes, coletar dados e convertê-los em clientes ou leads. Também é conhecida como página de conversão, de captura ou de destino',
    href: 'https://tnext-saaswebsite-landingpage.vercel.app/',
    capa: 'images/projetos/landing-page.png',
    stacks: ['Next.Js', 'Typescript', 'Tailwind', 'Framer motion'],
  },
  {
    titulo: 'Clone netflix',
    descricao:
      'Netflix é um serviço online de streaming norte-americano lançado em 2010 e é disponível em mais de 190 países.',
    href: 'https://next-netflix-clone-nine.vercel.app',
    capa: 'images/projetos/netflix-clone.png',
    stacks: ['NextJs', 'Typescript', 'Shadcn UI', 'Tailwind', 'Clerk', 'Prisma', 'Neon'],
  },
  {
    titulo: 'Page form',
    descricao: 'Crie formulários com um incrível designer de arrastar e soltar',
    href: 'https://tnext-page-form.vercel.app/',
    capa: 'images/projetos/page-form.png',
    stacks: ['NextJs', 'Typescript', 'Tailwind'],
  },
  {
    titulo: 'app-posto',
    descricao: '',
    href: 'https://app-posto-eight.vercel.app/',
    capa: 'images/projetos/bomba.png',
    stacks: ['Angular', 'rxjs', 'scss', 'Typescript'],
  },
  {
    titulo: 'app-vidro',
    descricao: '',
    href: 'https://app-vidro.vercel.app/',
    capa: 'images/projetos/app-vidros.jpg',
    stacks: ['Angular', 'rxjs','tailwind', 'Typescript'],
  },
];
