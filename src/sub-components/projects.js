import cssLogo from '../assets/skill-logo/css.png';
import expressLogo from '../assets/skill-logo/expressjs.png';
import htmlLogo from '../assets/skill-logo/html.png';
import jsLogo from '../assets/skill-logo/javascript.png';
import nodejsLogo from '../assets/skill-logo/nodejs.png';
import reactLogo from '../assets/skill-logo/react.png';
import gitLogo from '../assets/skill-logo/git.png';
import agileLogo from '../assets/skill-logo/agile.png';
import figmaLogo from '../assets/skill-logo/figma.svg';
import lowLogo from '../assets/skill-logo/database.png';
import pokemon from '../assets/projects-pics/pokemon.png';
import ab from '../assets/projects-pics/americanburgers.png'

export const projects = [
    {
      "picture": pokemon,
      "name": "Pokemon Teams",
      "description": "Detta är ett simpelt javascript project, data hämtar från ett api och visas i en grid layout. Jag har också lagt till funktioner som: sökning, fånga pokemons, lägga till dem i sitt lag, ge de eget namn mm.",
      "descriptionEN": "This is a simple javascript project, data fetches from an api and is displayed in a grid layout. I have also added functions such as: search, catch pokemons, add them to their team, give them their own name, etc.",
      "siteLink": "https://miladgezabi.github.io/pokemonteam/",
      "githubLink": "https://github.com/MiladGezabi/pokemonteam",
      "made with": [htmlLogo, cssLogo, jsLogo]
    },
    {
      "picture": ab,
      "name": "American Burgers",
      "description": "En påhittat resturangs hemsida som innehåller homepage, menysida och beställningar. Man kan beställa maträtter och dryck, man kan även logga in som admin och lägga till nya maträtter och dryck. test konto: username = Admin, Password = mums",
      "descriptionEN": "A made-up restaurant's website that contains homepage, menu page and orders. You can order dishes and drinks, you can also log in as admin and add new dishes and drinks. test account: username = Admin, Password = mums",
      "siteLink": "https://wiry-shop.surge.sh/",
      "githubLink": "https://github.com/NorthPew/Bionic-Gardeners/tree/main",
      "made with": [reactLogo, cssLogo, jsLogo]
    }
]