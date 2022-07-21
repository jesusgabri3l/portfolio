import portfolio from '../../public/portfolio.png'
import chat from '../../public/chat.png'
import sunnyside from '../../public/sunnyside.png'
import countries from '../../public/countries.png'
import cms from '../../public/cms.png'
import hush from '../../public/hush.png'
import todo from '../../public/todo.png'
import random from '../../public/random.png'
import iptracker from '../../public/ip-tracker.png'





const projects = [
    {   
        id: 1,
        name: 'Portfolio',
        img: portfolio,
        code: 'https://github.com/jesusgabri3l/portfolio',
        website: '',
        tags: ['Next.js', 'BEM', 'Tailwind', 'SSR']
    },
    {   
        id: 8,
        name: 'IP-Geolocator',
        img: iptracker,
        code: 'https://github.com/jesusgabri3l/ip-geolocator',
        website: 'https://jesusgabri3l.github.io/ip-geolocator/',
        tags: ['React', 'SCSS', 'REST API', 'Map']
    },
    {   
        id: 2,
        name: 'Chat-app',
        img: chat,
        code: 'https://github.com/jesusgabri3l/chat-app',
        website: 'https://jesusgabri3l.github.io/chat-app/',
        backend: 'https://github.com/jesusgabri3l/chat-app-backend',
        tags: ['React', 'SCSS', 'Node.js', 'Socket.io', 'Google Auth', 'Firebase']
    },
    {   
        id: 3,
        name: 'Sunnyside - landing page',
        img: sunnyside,
        code: 'https://github.com/jesusgabri3l/sunnyside-landingpage',
        website: 'https://jesusgabri3l.github.io/sunnyside-landingpage/',
        tags: ['React', 'SCSS', 'BEM', 'Responsive']
    },
    {   
        id: 4,
        name: 'Countries API',
        img: countries,
        code: 'https://github.com/jesusgabri3l/countries-api',
        website: 'https://jesusgabri3l.github.io/countries-api/#/',
        tags: ['React', 'SCSS', 'BEM', 'Responsive', 'REST API']
    },
    {   
        id: 5,
        name: 'Simple CMS',
        img: cms,
        code: 'https://github.com/jesusgabri3l/cms-test',
        website: 'https://jesusgabri3l.github.io/cms-test/',
        tags: ['Svelte', 'SCSS', 'BEM', 'Responsive', 'Javascript']
    },
    {   
        id: 6,
        name: 'Hush - Landing page',
        img: hush,
        code: 'https://github.com/jesusgabri3l/hush',
        website: 'https://jesusgabri3l.github.io/hush/#/',
        tags: ['Vue', 'SCSS', 'BEM', 'Responsive', 'Javascript']
    },
    {   
        id: 7,
        name: 'Todo app',
        img: todo,
        code: 'https://github.com/jesusgabri3l/todo-graphql-frontend',
        backend: 'https://github.com/jesusgabri3l/todo-graphql-backend',
        tags: ['Vue', 'SCSS', 'Apollo', 'GraphQL', 'Node.js', 'Express', 'JUST CODE']
    },
    {   
        id: 8,
        name: 'Random Character',
        img: random,
        code: 'https://github.com/jesusgabri3l/RandomCharacter',
        website: 'https://jesusgabri3l.github.io/RandomCharacter/',
        tags: ['React', 'SCSS', 'Rest API']
    }
];

export default projects;