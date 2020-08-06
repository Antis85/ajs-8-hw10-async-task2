import GameSavingLoader from './gamesavingloader';

(async () => {
  try {
    const loadGame = await GameSavingLoader.load();
    console.log(loadGame);
  } catch (error) {
    console.error(error);
  }
})();
