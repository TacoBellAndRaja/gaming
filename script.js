document.addEventListener('DOMContentLoaded', () => {
    const games = [
        { title: 'The Legend of Zelda: Tears of the Kingdom', releaseDate: 'May 12, 2023' },
        { title: 'Metroid Prime 4', releaseDate: 'TBA 2024' },
        { title: 'Pikmin 4', releaseDate: 'July 21, 2023' },
        { title: 'Super Mario Bros. Wonder', releaseDate: 'October 20, 2023' },
        { title: 'F-Zero: GX Remake', releaseDate: 'TBA 2024' }
    ];

    const gameList = document.getElementById('game-list');

    games.forEach(game => {
        const li = document.createElement('li');
        li.textContent = `${game.title} - Release Date: ${game.releaseDate}`;
        gameList.appendChild(li);
    });
});
