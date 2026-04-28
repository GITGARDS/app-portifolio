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
    label: 'Habilidades',
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
  progress: number;
};

export const MOCK_STACKS: MockStackModel[] = [
  {
    title: 'Java',
    descricao: 'Linguagem',
    icone: 'images/java.webp',
    progress: 80,
  },
  {
    title: 'Delphi',
    descricao: 'Linguagem',
    icone: 'images/delphi.png',
    progress: 80,
  },
  {
    title: 'Typescript',
    descricao: 'Linguagem',
    icone: 'images/typescript.png',
    progress: 70,
  },
  {
    title: 'Node.js',
    descricao: 'Ambiente',
    icone: 'images/nodejs.png',
    progress: 60,
  },
  {
    title: 'Next.js',
    descricao: 'Framework',
    icone: 'images/Nextjs.webp',
    progress: 70,
  },
  {
    title: 'Angular',
    descricao: 'Framework',
    icone: 'images/angular.png',
    progress: 80,
  },
  {
    title: 'Figma',
    descricao: 'Interface Design',
    icone: 'images/figma.png',
    progress: 50,
  },
  {
    title: 'MySql',
    descricao: 'Banco de dados',
    icone: 'images/mysql.png',
    progress: 90,
  },
  {
    title: 'Postgresql',
    descricao: 'Banco de dados',
    icone: 'images/postgresql.png',
    progress: 90,
  },
  {
    title: 'Prisma',
    descricao: 'ORM',
    icone: 'images/prisma.png',
    progress: 60,
  },
  {
    title: 'Drizzle',
    descricao: 'ORM',
    icone: 'images/drizzle.png',
    progress: 50,
  },
  {
    title: 'Neon',
    descricao: 'Database',
    icone: 'images/neon.jpg',
    progress: 50,
  },
  {
    title: 'Stripe',
    descricao: 'Payment',
    icone: 'images/Stripe.webp',
    progress: 50,
  },
  {
    title: 'Tailwind',
    descricao: 'estilização',
    icone: 'images/tailwindcss.webp',
    progress: 80,
  },
  {
    title: 'Vercel',
    descricao: 'Provedor',
    icone: 'images/Vercel.webp',
    progress: 80,
  },
  {
    title: 'Supabase',
    descricao: 'Database',
    icone: 'images/supabase.webp',
    progress: 80,
  },
  {
    title: 'Docker',
    descricao: 'Conteiner',
    icone: 'images/docker.png',
    progress: 60,
  },
];

export type MockProjetoModel = {
  titulo: string;
  descricao: string;
  capa: string;
  stacks: string[];
  urlRepo: string;
  urlProj: string;
};

export const MOCK_PROJETOS: MockProjetoModel[] = [
    {
    titulo: 'Folha de Pagamento',
    descricao: '',
    capa: 'images/projetos/app-folha.png',
    stacks: ['Angular', 'rxjs', 'tailwind', 'firebase', '@ngrx/signals'],
    urlRepo: 'https://github.com/GITGARDS/ng-folha-pro',
    urlProj: 'https://ng-folha-pro.vercel.app/',
  },
  {
    titulo: 'Modern Store',
    descricao: 'Modern Angular Ecommerce App',
    capa: 'images/projetos/ng-ecommerce.jpg',
    stacks: ['Angular', 'rxjs', 'ngrx', 'tailwind'],
    urlRepo: 'https://github.com/GITGARDS/ng-ecommerce',
    urlProj: 'https://ng-ecommerce-lyart.vercel.app/',
  },

  {
    titulo: 'Financas',
    descricao:
      'Finanças é a gestão do dinheiro, especialmente de empresas, organizações ou governos. Ela envolve o processo de aquisição, gasto e investimento de capital.',
    capa: 'images/projetos/finance.jpg',
    stacks: ['Next.js', 'Shadcn UI', 'Tailwind', 'Drizzle', 'Clerk', 'Hono', 'Neon', 'Zod'],
    urlRepo: 'https://github.com/GITGARDS/tnext-finance',
    urlProj: 'https://tnext-finance.vercel.app',
  },

  {
    titulo: 'ScraperFlow',
    descricao:
      'Automatize sites e extraia dados sem esforço algum — sem precisar de codificação. O flow builder do FlowScraper e as ações de IA personalizáveis ​​tornam a automação da web fácil, eficiente e flexível.',
    capa: 'images/projetos/scrape.jpg',
    stacks: ['Next.Js', 'Shadcn UI', 'Tailwind', 'Prisma', 'Clerk', 'Stripe', 'Zod'],
    urlRepo: 'https://github.com/GITGARDS/tnext-scrape-flow',
    urlProj: 'https://tnext-scrape-flow.vercel.app',
  },
  {
    titulo: 'Landing Page',
    descricao:
      'Uma landing page é uma página da web que visa atrair visitantes, coletar dados e convertê-los em clientes ou leads. Também é conhecida como página de conversão, de captura ou de destino',
    capa: 'images/projetos/landing-page.png',
    stacks: ['Next.Js', 'Tailwind', 'Framer motion'],
    urlRepo: 'https://github.com/GITGARDS/tnext-saaswebsite-landingpage',
    urlProj: 'https://tnext-saaswebsite-landingpage.vercel.app',
  },
  // {
  //   titulo: 'Clone netflix',
  //   descricao:
  //     'Netflix é um serviço online de streaming norte-americano lançado em 2010 e é disponível em mais de 190 países.',
  //   capa: 'images/projetos/netflix-clone.png',
  //   stacks: ['NextJs', 'Shadcn UI', 'Tailwind', 'Clerk', 'Prisma', 'Neon'],
  //   urlRepo: 'https://github.com/GITGARDS/tnext-netflix-clone',
  //   urlProj: 'https://next-netflix-clone-nine.vercel.app',
  // },
  // {
  //   titulo: 'Page form',
  //   descricao: 'Crie formulários com um incrível designer de arrastar e soltar',
  //   capa: 'images/projetos/page-form.png',
  //   stacks: ['NextJs', 'Tailwind'],
  //   urlRepo: 'https://github.com/GITGARDS/tnext-page-form',
  //   urlProj: 'https://tnext-page-form.vercel.app/',
  // },
  // {
  //   titulo: 'Posto',
  //   descricao: '',
  //   capa: 'images/projetos/bomba.png',
  //   stacks: ['Angular', 'rxjs'],
  //   urlRepo: 'https://github.com/GITGARDS/app-posto',
  //   urlProj: 'https://app-posto-eight.vercel.app/',
  // },
  // {
  //   titulo: 'Vidracaria',
  //   descricao: '',
  //   capa: 'images/projetos/app-vidros.jpg',
  //   stacks: ['Angular', 'rxjs', 'tailwind'],
  //   urlRepo: 'https://github.com/GITGARDS/app-vidro',
  //   urlProj: 'https://app-vidro.vercel.app/',
  // },
  // {
  //   titulo: 'Compras',
  //   descricao: '',
  //   capa: 'images/projetos/app-compras.jpg',
  //   stacks: ['Angular', 'rxjs', 'tailwind'],
  //   urlRepo: 'https://github.com/GITGARDS/app-compras',
  //   urlProj: 'https://app-compras-seven.vercel.app',
  // },
  // {
  //   titulo: 'Estoque',
  //   descricao: '',
  //   capa: 'images/projetos/app-estoque.png',
  //   stacks: ['Angular', 'rxjs', 'tailwind', 'firebase'],
  //   urlRepo: 'https://github.com/GITGARDS/app-estoque',
  //   urlProj: 'https://app-estoque-ebon.vercel.app/',
  // },
];
