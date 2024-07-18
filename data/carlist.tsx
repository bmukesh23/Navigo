import navigoMini from '@/public/NaviGoMini.png';
import navigoXL from '@/public/NaviGoXL.png';
import navigoPremier from '@/public/NaviGoPremier.png';
import navigoBlackSUV from '@/public/NaviGoBlackSuv.png';
import navigoSedan from '@/public/NaviGoSedan.png';


export default [
    {
        id: 1,
        name: "Mini",
        image: navigoMini,
        charges: 300,
        min: "5 min",
    },
    {
        id: 2,
        name: "Swift XL",
        image: navigoXL,
        charges: 300,
        min: "10 min",
    },
    {
        id: 3,
        name: "Premier",
        image: navigoPremier,
        charges: 500,
        min: "12 min",
    },
    {
        id: 4,
        name: "Prime SUV",
        image: navigoBlackSUV,
        charges: 700,
        min: "16 min",
    },
    {
        id: 5,
        name: "Prime Sedan",
        image: navigoSedan,
        charges: 1000,
        min: "15 min",
    },

]