import { createContext, useContext, useEffect, useState } from 'react';

export interface Movie {
  id: number;
  title: string;
  sinopse: string;
  srcImage: string;
  coverImage: string;
  releaseData: string;
}

// declara o contexto
const MoviesContext = createContext<Movie[]>([]);

// declara o que será provido pelo contexto
export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const mockMovies: Movie[] = [
      {
        id: 1,
        title: 'Aquaman 2: O Reino Perdido',
        sinopse:
          'Um antigo poder é libertado e o herói Aquaman precisa fazer um perigoso acordo com um aliado improvável para proteger Atlântida e o mundo de uma devastação irreversível.',
        srcImage: '/assets/images/aquaman.jpeg',
        coverImage: '/assets/images/aquamanCover.jpg',
        releaseData: '19/11/2024',
      },
      {
        id: 2,
        title: 'Batman',
        sinopse:
          'Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.',
        srcImage: '/assets/images/batman.jpeg',
        coverImage: '/assets/images/batmanCover.jpg',
        releaseData: '01/11/2024',
      },
      {
        // excluir Call of Duty
        id: 3,
        title: 'Call of Duty: Black Ops III',
        sinopse: 'seus componentes com MovieProvider',
        srcImage: '/assets/images/callOfDuty.jpg',
        coverImage: '/assets/images/callOfDutyCover.jpg',
        releaseData: '28/09/2024',
      },
      {
        id: 4,
        title: 'Eu Sou a Lenda',
        sinopse:
          'Robert Neville é um brilhante cientista e o único sobrevivente de uma epidemia que transformou os humanos em mutantes sedentos por sangue. Andando pela cidade de Nova York, ele procura por outros possíveis sobreviventes e tenta achar a cura da praga usando seu próprio sangue, que é imune.',
        srcImage: '/assets/images/euSouALenda.jpeg',
        coverImage: '/assets/images/euSouALendaCover.jpg',
        releaseData: '02/11/2024',
      },
      {
        id: 5,
        title: 'Five Nights At Freddys',
        sinopse:
          'No Freddy Fazbears Pizza, robôs animados fazem a festa das crianças durante o dia. Mas, quando chega a noite, eles se transformam em assassinos psicopatas',
        srcImage: '/assets/images/fiveNightsAtFreddys.jpg',
        coverImage: '/assets/images/fiveNightsAtFreddysCover.jpeg',
        releaseData: '03/01/2025',
      },
      {
        id: 6,
        title: 'Frozen 2',
        sinopse:
          'De volta à infância de Elsa e Anna, as duas garotas descobrem uma história do pai, quando ainda era príncipe de Arendelle. Ele conta às meninas a história de uma visita à floresta dos elementos, onde um acontecimento inesperado teria provocado a separação dos habitantes da cidade com os quatro elementos fundamentais: ar, fogo, terra e água. Esta revelação ajuda Elsa a compreender a origem de seus poderes.',
        srcImage: '/assets/images/frozen.jpg',
        coverImage: '/assets/images/frozenCover.jpg',
        releaseData: '21/09/2024',
      },
      {
        id: 7,
        title: 'The Dark Knight',
        sinopse:
          'Batman tem conseguido manter a ordem em Gotham com a ajuda de Jim Gordon e Harvey Dent. No entanto, um jovem e anárquico criminoso, conhecido apenas como Coringa, pretende testar o Cavaleiro das Trevas e mergulhar a cidade em um verdadeiro caos.',
        srcImage: '/assets/images/theDarkKnight.jpg',
        coverImage: '/assets/images/theDarkKnightCover.jpg',
        releaseData: '10/10/2024',
      },
      {
        id: 8,
        title: 'Velozes e Furiosos 9',
        sinopse:
          'Dominic Toretto e Letty vivem uma vida pacata ao lado do filho. Mas eles logo são ameaçados pelo passado de Dom: seu irmão desaparecido Jakob, que retorna e está trabalhando ao lado de Cipher. Cabe a Dom reunir a equipe novamente para enfrentá-los.',
        srcImage: '/assets/images/velozesEFuriosos9.jpg',
        coverImage: '/assets/images/velozesEFuriosos9Cover.jpg',
        releaseData: '04/02/2025',
      },
    ];

    setMovies(mockMovies);
  }, []);

  return <MoviesContext.Provider value={movies}>{children}</MoviesContext.Provider>;
};

// cria hook personalizado
export const useMoviesContext = () => useContext(MoviesContext);
