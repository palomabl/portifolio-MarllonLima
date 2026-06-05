export const serviceSlugByTitle = {
  'Pacotes Mensais': 'pacotes-mensais',
  Eventos: 'eventos',
  'Pacote de Vídeos': 'pacote-de-videos',
}

export const servicesData = {
  'pacotes-mensais': {
    slug: 'pacotes-mensais',
    title: 'Pacotes Mensais',
    tagline: 'Conteúdo recorrente para marcas que querem presença, consistência e crescimento digital.',
    description:
      'Planejamento, captação e edição de conteúdos pensados para manter sua marca ativa, profissional e alinhada com seus objetivos todos os meses.',
    about: {
      forWho:
        'Para marcas e empreendedores que precisam de presença digital consistente, mas não têm tempo ou estrutura para produzir conteúdo de qualidade todo mês.',
      problem:
        'Postar conteúdo irregularmente prejudica o algoritmo e enfraquece sua marca. Sem produção planejada, você perde visibilidade e relevância.',
      result:
        'Uma marca visualmente forte, com conteúdo produzido profissionalmente todo mês, pronta para crescer nas redes sociais.',
    },
    included: [
      { title: 'Planejamento de Conteúdo', desc: 'Calendário mensal alinhado com seus objetivos e datas importantes.' },
      { title: 'Captação de Imagens', desc: 'Fotos e vídeos profissionais com direção criativa dedicada.' },
      { title: 'Edição de Vídeos', desc: 'Edição completa otimizada para cada plataforma digital.' },
      { title: 'Ajustes para Redes Sociais', desc: 'Formatos e proporções corretos para Instagram, TikTok e YouTube.' },
      { title: 'Entrega Organizada', desc: 'Arquivos nomeados, organizados e prontos para publicar.' },
      { title: 'Suporte durante o Processo', desc: 'Acompanhamento e comunicação durante todo o mês.' },
    ],
    portfolio: [
      { label: 'Conteúdo Mensal — Moda', date: 'Março 2024', wide: true },
      { label: 'Reels — Gastronomia', date: 'Fevereiro 2024', wide: false },
      { label: 'Stories — Lifestyle', date: 'Janeiro 2024', wide: false },
      { label: 'Feed — Saúde e Bem-estar', date: 'Dezembro 2023', wide: false },
      { label: 'Conteúdo — Personal Trainer', date: 'Novembro 2023', wide: false },
    ],
    testimonials: [
      {
        text: 'Desde que contratei o Marllom para cuidar do meu conteúdo mensal, minha presença nas redes cresceu de forma consistente. Profissionalismo e criatividade em cada entrega.',
        name: 'Ana Paula',
        project: 'Pacote Mensal — Marca de moda',
      },
      {
        text: 'O resultado superou minhas expectativas. Conteúdo alinhado com minha identidade visual e entregue no prazo todo mês, sem estresse.',
        name: 'Rafael Menezes',
        project: 'Pacote Mensal — Personal trainer',
      },
    ],
  },

  eventos: {
    slug: 'eventos',
    title: 'Eventos',
    tagline: 'Captação completa para eventos que merecem ser lembrados.',
    description:
      'Cobertura profissional de casamentos, eventos corporativos e celebrações especiais. Do registro fotográfico ao audiovisual cinematográfico, cada momento é preservado com cuidado.',
    about: {
      forWho:
        'Para casais, empresas e organizadores que querem registrar seus eventos com qualidade cinematográfica e atenção aos detalhes que fazem a diferença.',
      problem:
        'Eventos únicos não podem ser refeitos. Uma cobertura amadora significa perder para sempre momentos que importam e que jamais se repetem.',
      result:
        'Um registro completo e emocionante do seu evento, com fotos e vídeos que contam a história com qualidade e beleza duradoura.',
    },
    included: [
      { title: 'Cobertura Fotográfica', desc: 'Registro completo dos momentos mais importantes do evento.' },
      { title: 'Cobertura em Vídeo', desc: 'Captação cinematográfica com equipamentos profissionais.' },
      { title: 'Edição Completa', desc: 'Edição cuidadosa com trilha sonora e correção de cor.' },
      { title: 'Highlight do Evento', desc: 'Vídeo resumo elegante para compartilhar nas redes sociais.' },
      { title: 'Entrega Digital', desc: 'Galeria online para download e compartilhamento fácil.' },
      { title: 'Suporte no Dia', desc: 'Presença e suporte completo durante todo o evento.' },
    ],
    portfolio: [
      { label: 'Casamento — Laís & Gabriel', date: 'Abril 2024', wide: true },
      { label: 'Corporativo — Summit 2024', date: 'Março 2024', wide: false },
      { label: 'Casamento — Marina & Felipe', date: 'Fevereiro 2024', wide: false },
      { label: 'Evento — Lançamento de Marca', date: 'Janeiro 2024', wide: false },
      { label: 'Corporativo — Confraternização', date: 'Dezembro 2023', wide: false },
    ],
    testimonials: [
      {
        text: 'O Marllom capturou cada detalhe do nosso casamento de um jeito que a gente nem percebeu a câmera. O resultado foi simplesmente lindo.',
        name: 'Camila & Pedro',
        project: 'Cobertura de casamento',
      },
      {
        text: 'Cobertura completa do nosso evento corporativo. Profissionalismo do início ao fim e entrega no prazo combinado.',
        name: 'Beatriz Telles',
        project: 'Evento corporativo',
      },
    ],
  },

  'pacote-de-videos': {
    slug: 'pacote-de-videos',
    title: 'Pacote de Vídeos',
    tagline: 'Vídeos pensados para engajar, converter e representar sua marca.',
    description:
      'Produção audiovisual completa: roteiro, captação e edição para campanhas, lançamentos e redes sociais. Do conceito à entrega final, com direção criativa.',
    about: {
      forWho:
        'Para marcas, empreendedores e criadores que precisam de vídeos profissionais pontuais para campanhas, lançamentos ou crescimento nas redes sociais.',
      problem:
        'Vídeos mal produzidos afastam clientes e enfraquecem a credibilidade da marca. Um bom vídeo vende antes mesmo de você precisar falar.',
      result:
        'Vídeos profissionais, alinhados com a identidade da sua marca, prontos para engajar sua audiência e gerar resultados reais.',
    },
    included: [
      { title: 'Briefing e Roteiro', desc: 'Planejamento estratégico e criação do roteiro do vídeo.' },
      { title: 'Direção Criativa', desc: 'Conceito visual alinhado com a identidade e tom da marca.' },
      { title: 'Captação Profissional', desc: 'Gravação com equipamentos de alta qualidade.' },
      { title: 'Edição e Motion', desc: 'Edição completa com animações e identidade visual aplicada.' },
      { title: 'Versões por Formato', desc: 'Adaptação para Reels, Stories, YouTube e outros canais.' },
      { title: 'Revisão Incluída', desc: 'Rodadas de ajuste para garantir o resultado ideal.' },
    ],
    portfolio: [
      { label: 'Campanha — Lançamento de Produto', date: 'Abril 2024', wide: true },
      { label: 'Reels — Marca de Moda', date: 'Março 2024', wide: false },
      { label: 'Institucional — Startup', date: 'Fevereiro 2024', wide: false },
      { label: 'Vídeo — Depoimento de Cliente', date: 'Janeiro 2024', wide: false },
      { label: 'Reels — Personal Brand', date: 'Dezembro 2023', wide: false },
    ],
    testimonials: [
      {
        text: 'O vídeo que o Marllom produziu para o lançamento do nosso produto gerou mais engajamento do que qualquer post que já fizemos. Resultado incrível.',
        name: 'Lucas Ferreira',
        project: 'Vídeo de lançamento de produto',
      },
      {
        text: 'Processo simples, criativo e resultado acima da expectativa. Os reels que ele produziu para a gente viralizaram duas vezes no mesmo mês.',
        name: 'Isabela Cruz',
        project: 'Pacote de Reels',
      },
    ],
  },
}
