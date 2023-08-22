import tourImg  from '../images/northCoast.png';
import tourImg2  from '../images/southCoast.png';
import tourImg3  from '../images/mtkenya.png';
import tourImg4  from '../images/naivasha.png';
import tourImg5  from '../images/mara.png';
import tourImg6  from '../images/amboseli.png';
import tourImg7  from '../images/amboseli.png';
import tourImg8  from '../images/mara.png';

const tours = [
    {
        id: 1,
        title:"North Coast",
        city: "Kilifi",
        price: 15000 , 
        maxGroupSize: 6,
        desc: "this is the description",
        reviews: [],
        avgRating: 7,
        photo: tourImg,
        featured: true,
    },
    {
        id: 2,
        title:"South Coast",
        city: "Mombasa",
        price: 15000,
        maxGroupSize: 6,
        desc: "this is the description",
        reviews: [],
        avgRating: 7,
        photo: tourImg2,
        featured: true,
    },
    {
        id: 3,
        title:"Mt Kenya",
        city: "Nanyuki",
        price: 9000,
        maxGroupSize: 6,
        desc: "this is the description",
        reviews: [],
        avgRating: 7,
        photo: tourImg3,
        featured: true,
    },
    {
        id: 4,
        title:"Naivasha-Elementaita",
        city: "Nakuru",
        price: 13000,
        maxGroupSize: 6,
        desc: "this is the description",
        reviews: [
            {
                name:"Sam",
                rating: 6,
            },
        ],
        avgRating: 7,
        photo: tourImg4,
        featured: true,
    },
    {
        id: 5,
        title:"Maasai Mara",
        city: "Narok",
        price: 22000,
        maxGroupSize: 6,
        desc: "this is the description",
        reviews: [
            {
                name:"Winnie",
                rating: 9,
            },
        ],
        avgRating: 8,
        photo: tourImg5,
        featured: true,
    },
    {
        id: 6,
        title:"Amboseli",
        city: "Voi",
        price: 19000,
        maxGroupSize: 6,
        desc: "this is the description",
        reviews: [
            {
                name:"Kefa",
                rating: 8,
            },
        ],
        avgRating: 8,
        photo: tourImg6,
        featured: true,
    },
    {
        id: 7,
        title:"Tsavo",
        city: "Voi",
        price: 15000,
        maxGroupSize: 6,
        desc: "this is the description",
        reviews: [
            {
                name:"Mesh",
                rating: 9,
            },
        ],
        avgRating: 8,
        photo: tourImg7,
        featured: true,
    },
    {
        id: 8,
        title:"Kajiado",
        city: "Kajiado",
        price: 15600,
        maxGroupSize: 6,
        desc: "this is the description",
        reviews: [
            {
                name:"Winnie",
                rating: 8,
            },
        ],
        avgRating: 7,
        photo: tourImg8,
        featured: true,
    },
];

export default tours;