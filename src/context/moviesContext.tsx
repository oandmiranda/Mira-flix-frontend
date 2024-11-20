import { createContext, useContext, useEffect, useState } from 'react';

export interface Movie {
  id: number;
  title: string;
  sinopse: string;
  srcImage: string;
  coverImage: string;
  available: string;
  releaseData: number;
  duration: string;
  category: string;
  filmeId: string;
}

// declara o contexto
const MoviesContext = createContext<Movie[]>([]);

// função embaralha os objetos do array
const ShuffleArray = (array: Movie[]) => {
  // sort pode conter uma função de comparação para retornar o array com base nela
  // Math.random() gera um número aleatório entre 0 e 1

  // Math.random() - 0.5 (lógica principal para gerar ordem randômica)
  /* se o resultado da comparação entre dois elementos (a, b) for negativo, o primeiro valor é retornado. Se o resultado entre a comparação (c, d) for positivo, seguindo a ordem, "c" deve vir depois de "d". Se o resultado for 0, a ordem se mantém. */
  return array.sort(() => Math.random() - 0.5);
};

// declara o que será provido pelo contexto
export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const mockMovies: Movie[] = [
      {
        id: 1,
        title: 'The Dark Knight',
        sinopse:
          'Batman tem conseguido manter a ordem em Gotham com a ajuda de Jim Gordon e Harvey Dent. No entanto, um jovem e anárquico criminoso, conhecido apenas como Coringa, pretende testar o Cavaleiro das Trevas e mergulhar a cidade em um verdadeiro caos.',
        srcImage: '/assets/images/theDarkKnight.jpg',
        coverImage: '/assets/images/theDarkKnightCover.jpg',
        available: '11/10/2024',
        releaseData: 2008,
        duration: '2h32m',
        category: 'Ação',
        filmeId: '/movie/155',
      },
      {
        id: 2,
        title: 'Creed 3',
        sinopse:
          'Depois de dominar os ringues, Adonis Creed tem prosperado com sua carreira e família. Quando um amigo de infância e ex-prodígio do boxe, Damian, ressurge após uma longa sentença na prisão, o campeão fica ansioso para provar que merece sua chance. O confronto entre ex-amigos é mais do que apenas uma luta. Para acertar as contas, Adonis deve colocar seu futuro em risco para enfrentar Damian, um lutador que não tem nada a perder.',
        srcImage: '/assets/images/creed3.jpeg',
        coverImage: '/assets/images/creed3.jpeg',
        available: '01/12/2024',
        releaseData: 2023,
        duration: '1h56m',
        category: 'Ação',
        filmeId: '/movie/677179',
      },
      {
        id: 3,
        title: 'Aquaman 2: O Reino Perdido',
        sinopse:
          'Um antigo poder é libertado e o herói Aquaman precisa fazer um perigoso acordo com um aliado improvável para proteger Atlântida e o mundo de uma devastação irreversível.',
        srcImage: '/assets/images/aquamanCover.jpg',
        coverImage: '/assets/images/aquamanCover.jpg',
        available: '19/11/2024',
        releaseData: 2023,
        duration: '1h55m',
        category: 'Ação',
        filmeId: '/movie/297802',
      },
      {
        id: 4,
        title: 'Indiana Jones e o Chamado do Destino',
        sinopse:
          'O lendário herói arqueólogo está de volta neste aguardado capítulo final da icônica franquia, uma incrível e empolgante aventura cinematográfica.',
        srcImage: '/assets/images/indianaJones.jpeg',
        coverImage: '/assets/images/indianaJonesCover.jpg',
        available: '29/09/2024',
        releaseData: 2023,
        duration: '2h22m',
        category: 'Ação',
        filmeId: '/movie/335977',
      },
      {
        id: 5,
        title: 'Madame Teia',
        sinopse:
          'Cassandra Webb, uma paramédica em Manhattan, tem habilidades de clarividência. Forçada a confrontar revelações sobre seu passado, ela forja uma relação com três jovens destinadas a futuros poderosos.',
        srcImage: '/assets/images/madameTeia.jpeg',
        coverImage: '/assets/images/madameTeiaCover.jpeg',
        available: '04/12/2024',
        releaseData: 2024,
        duration: '1h54m',
        category: 'Ação',
        filmeId: '/movie/634492',
      },
      {
        id: 6,
        title: 'Frozen 2',
        sinopse:
          'De volta à infância de Elsa e Anna, as duas garotas descobrem uma história do pai, quando ainda era príncipe de Arendelle. Ele conta às meninas a história de uma visita à floresta dos elementos, onde um acontecimento inesperado teria provocado a separação dos habitantes da cidade com os quatro elementos fundamentais: ar, fogo, terra e água. Esta revelação ajuda Elsa a compreender a origem de seus poderes.',
        srcImage: '/assets/images/frozen.jpg',
        coverImage: '/assets/images/frozenCover.jpg',
        available: '21/09/2024',
        releaseData: 2019,
        duration: '1h44m',
        category: 'Em alta',
        filmeId: '/movie/330457',
      },
      {
        id: 7,
        title: 'Furiosa: Uma Saga Mad Max',
        sinopse:
          'A jovem Furiosa cai nas mãos de uma grande horda de motoqueiros liderada pelo senhor da guerra Dementus. Varrendo Wasteland, eles encontram a Cidadela, presidida pelo Immortan Joe. Enquanto os dois tiranos lutam pelo domínio, Furiosa logo se vê em uma batalha ininterrupta para voltar para casa.',
        srcImage: '/assets/images/furiosa_umaSagaMadMax.jpeg',
        coverImage: '/assets/images/furiosa_umaSagaMadMaxCover.jpeg',
        available: '12/11/2024',
        releaseData: 2024,
        duration: '2h25m',
        category: 'Recomendados para você',
        filmeId: '/movie/786892',
      },
      {
        id: 8,
        title: 'Jogos Mortais',
        sinopse:
          'Dois homens acordam acorrentados em um banheiro como prisioneiros de um assassino em série que leva suas vítimas a situações limítrofes em um jogo macabro. Para sobreviver, eles terão de desvendar juntos as peças desse quebra-cabeças doentio.',
        srcImage: '/assets/images/jogosMortais.jpeg',
        coverImage: '/assets/images/jogosMortaisCover.jpeg',
        available: '24/10/2024',
        releaseData: 2005,
        duration: '1h43m',
        category: 'Terror',
        filmeId: '/movie/298250',
      },
      {
        id: 9,
        title: 'Batman',
        sinopse:
          'Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.',
        srcImage: '/assets/images/batman.jpeg',
        coverImage: '/assets/images/batmanCover.jpg',
        available: '01/11/2024',
        releaseData: 2022,
        duration: '2h56m',
        category: 'Ação',
        filmeId: '/movie/268',
      },
      {
        id: 10,
        title: 'Eu Sou a Lenda',
        sinopse:
          'Robert Neville é um brilhante cientista e o único sobrevivente de uma epidemia que transformou os humanos em mutantes sedentos por sangue. Andando pela cidade de Nova York, ele procura por outros possíveis sobreviventes e tenta achar a cura da praga usando seu próprio sangue, que é imune.',
        srcImage: '/assets/images/euSouALenda.jpeg',
        coverImage: '/assets/images/euSouALendaCover.jpg',
        available: '02/11/2024',
        releaseData: 2008,
        duration: '1h41m',
        category: 'Ação',
        filmeId: '/movie/6479',
      },
      {
        id: 11,
        title: 'Velozes e Furiosos 9',
        sinopse:
          'Dominic Toretto e Letty vivem uma vida pacata ao lado do filho. Mas eles logo são ameaçados pelo passado de Dom: seu irmão desaparecido Jakob, que retorna e está trabalhando ao lado de Cipher. Cabe a Dom reunir a equipe novamente para enfrentá-los.',
        srcImage: '/assets/images/velozesEFuriosos9.jpg',
        coverImage: '/assets/images/velozesEFuriosos9Cover.jpg',
        available: '04/01/2025',
        releaseData: 2021,
        duration: '2h23m',
        category: 'Ação',
        filmeId: '/movie/385128',
      },
    ];

    setMovies(ShuffleArray(mockMovies));
  }, []);

  return <MoviesContext.Provider value={movies}>{children}</MoviesContext.Provider>;
};

// cria hook personalizado
export const useMoviesContext = () => useContext(MoviesContext);
