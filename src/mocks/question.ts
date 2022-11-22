import {Questions} from "../types/questions";

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const questions: Questions = [
  {
    type: 'genre',
    genre: 'rock',
    answers: [{
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Carmen_-_Prelude_to_Act_1.ogg',
      genre: 'rock',
    }, {
      src: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Entra%27cte_to_Act_IV_from_Carmen.ogg',
      genre: 'blues',
    }, {
      src: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Chopin%2C_Frederic_-_Cello_Sonata_Gmin%2C_op._65%2C_1st_movement_%28John_Michel%2C_cello%29.ogg',
      genre: 'jazz',
    }, {
      src: 'https://upload.wikimedia.org/wikipedia/commons/8/88/OdeonAA210606_01.ogg',
      genre: 'rock',
    }],
  }, {
    type: 'artist',
    song: {
      artist: 'Jim Beam',
      src: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/CantiqueDeJeanRacine.ogg',
    },
    answers: [{
      picture: `${AVATAR_URL}?rnd=${Math.random()}`,
      artist: 'John Snow',
    }, {
      picture: `${AVATAR_URL}?rnd=${Math.random()}`,
      artist: 'Jim Beam',
    }, {
      picture: `${AVATAR_URL}?rnd=${Math.random()}`,
      artist: 'Jack Daniels',
    },
    ],
  },

  {
    type: 'artist',
    song: {
      artist: 'Jim Beam',
      src: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/CantiqueDeJeanRacine.ogg',
    },
    answers: [{
      picture: `${AVATAR_URL}?rnd=${Math.random()}`,
      artist: 'John Snow',
    }, {
      picture: `${AVATAR_URL}?rnd=${Math.random()}`,
      artist: 'Jim Beam',
    }, {
      picture: `${AVATAR_URL}?rnd=${Math.random()}`,
      artist: 'Jack Daniels',
    },
    ],
  },

];

