import React from "react";
import './homepage.css';
import GameItem from '../game-item/GameItem';

const GAMES = [
    {
        image: '/pics/godofwar.jpg',
        title: 'God of War',
        genres: ['Action', 'Adventure'],
        price: 800,
        video: 'https://www.youtube.com/embed/EE-4GvjKcfs"',
        id: 1,
        description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
    },
    {
        image: '/pics/lego.jpg',
        title: 'LEGO® Brawls',
        genres: ['Файтинг', 'Action'],
        video: 'https://www.youtube.com/embed/MuYe0URoSVc',
        price: 1200,
        id: 2,
        description: 'Придумай непревзойденных минифигурок-бойцов и пробей себе путь по уровням во всех своих любимых темах LEGO® в первом командном боевике, действие которого происходит во вселенной LEGO. Играй с друзьями дома или по всему миру и посмотри, как ты справляешься с конкурентами.'
    },
    {
        image: '/pics/turt.jpg',
        title: 'Teenage Mutant Ninja Turtles: The Cowabunga Collection',
        genres: ['Action', 'Adventure'],
        video: 'https://www.youtube.com/embed/0paGjvgg9kg',
        price: 1199,
        id: 3,
        description: 'Teenage Mutant Ninja Turtles: The Cowabunga Collection — это невероятный набор из тринадцати классических игр о черепашках-ниндзя от Konami.'
    },
    {
        image: '/pics/pacmac.jpg',
        title: 'PAC-MAN WORLD Re-PAC',
        genres: ['Квест', 'Шутер'],
        video: 'https://www.youtube.com/embed/j_SgOs8vkFE',
        price: 1199,
        id: 4,
        description: 'PAC-MAN возвращается домой в свой день рождения и видит, что Призраки похитили его семью и друзей и испортили праздник! Чтобы вернуть родных и близких, PAC-MAN отправляется на остров Призраков!'
    },
    {
        image: '/pics/cultofthelamb.jpg',
        title: 'Cult of the Lamb',
        video: 'https://www.youtube.com/embed/xsPtUNB1z-Q',
        genres: ['Roguelike', 'Файтинг'],
        price: 890,
        id: 5,
        description: 'В Cult of the Lamb игрок окажется в роли одержимого ягненка, спасенного от гибели жутким незнакомцем. Чтобы отплатить долг спасителю, вам придется найти ему верных последователей. Заложите основы собственного культа в землях лжепророков и совершайте вылазки в разнообразные таинственные регионы, создайте преданное сообщество лесных почитателей и несите свое Слово, чтобы сделать это сообщество единственным истинным культом.'
    },
    {
        image: '/pics/madeinabyss.jpg',
        title: 'Made in Abyss: Binary Star Falling into Darkness',
        genres: ['Action', 'РПГ', 'Виживання'],
        video: 'https://www.youtube.com/embed/iwbtZo6P-Yw',
        price: 1800,
        id: 6,
        description: 'Станьте пещерным рейдером и исследуйте мир Бездны!'
    },
]


const HomePage = () => {
    return(
        <div className="homePage">
            {GAMES.map(game => <GameItem game={game} key={game.id}/>)}
        </div>
    )
}
export default HomePage;