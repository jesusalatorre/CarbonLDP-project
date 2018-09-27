// File to configure connection to Carbon LDP

let movieExamples = [
    {
        name: "Jurassic World: Fallen Kingdom",
        image: "http://bit.ly/2NLa8OQ",
        description: "It's been three years since theme park and luxury resort Jurassic World was destroyed by dinosaurs out of containment. Isla Nublar now sits abandoned by humans while the surviving dinosaurs fend for themselves in the jungles. When the island's dormant volcano begins roaring to life, Owen (Chris Pratt) and Claire (Bryce Dallas Howard) mount a campaign to rescue the remaining dinosaurs from this extinction-level event. Owen is driven to find Blue, his lead raptor who's still missing in the wild, and Claire has grown a respect for these creatures she now makes her mission. Arriving on the unstable island as lava begins raining down, their expedition uncovers a conspiracy that could return our entire planet to a perilous order not seen since prehistoric times.",
    },
    {
        name: "Deadpool 2",
        image: "http://bit.ly/2NJygBA",
        description: "After surviving a near fatal bovine attack, a disfigured cafeteria chef (Wade Wilson) struggles to fulfill his dream of becoming Miami's hottest bartender, while also learning to cope with his lost sense of taste. Searching to regain his spice for life, as well as a flux capacitor, Wade must battle ninjas, the yakuza, and a pack of sexually aggressive canines, as he journeys around the world to discover the importance of family, friendship, and flavor - finding a new taste for adventure and earning the coveted coffee mug title of World's Best Lover.",
    },
    {
        name: "Hereditary",
        image: "http://bit.ly/2zwC1kV",
        description: "When Ellen, the matriarch of the Graham family, passes away, her daughter's family begins to unravel cryptic and increasingly terrifying secrets about their ancestry. The more they discover, the more they find themselves trying to outrun the sinister fate they seem to have inherited. Making his feature debut, writer-director Ari Aster unleashes a nightmare vision of a domestic breakdown that exhibits the craft and precision of a nascent auteur, transforming a familial tragedy into something ominous and deeply disquieting, and pushing the horror movie into chilling new terrain with its shattering portrait of heritage gone to hell.",
    },
    {
        name: "John Wick 2",
        image: "http://bit.ly/2zy0GG1",
        description: "In this next chapter following the 2014 hit, legendary hitman John Wick (Keanu Reeves) is forced back out of retirement by a former associate plotting to seize control of a shadowy international assassins' guild. Bound by a blood oath to help him, John travels to Rome where he squares off against some of the world's deadliest killers.",
    },
    {
        name: "12 Strong",
        image: "http://bit.ly/2DzDET6",
        description: 'Chris Hemsworth ("Thor," "The Avengers" films) and Oscar nominee Michael Shannon ("Revolutionary Road," "Nocturnal Animals") star in "12 Strong," a powerful new war drama from Alcon Entertainment, Black Label Media and Jerry Bruckheimer Films. Based on the book best-selling book Horse Soldiers, it is story of heroism based on true events that unfolded a world away in the aftermath of 9/11.',
    },
];

export function getMovies() {
    return new Promise(
        function (resolve, reject) {
            setTimeout(() => resolve(movieExamples), 3000);
        });
}
