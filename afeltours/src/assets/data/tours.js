import tourImg  from '../images/bamburi.jpg';
import tourImg2  from '../images/leopard.webp';
import tourImg3  from '../images/Mutara.jpg';
import tourImg4  from '../images/capella.jpg';
import tourImg5  from '../images/maraaaaa.jpg';
import tourImg6  from '../images/tawi.jpeg';
import tourImg7  from '../images/Saltlick.jpg';
import tourImg8  from '../images/Kajiado.webp';

const tours = [
    {
        id: 1,
        title:"North Coast",
        city: "Bamburi Beach Resort",
        price: 32700, 
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
        city: "Leopard Beach Resort",
        price: 39500,
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
        city: "Jambo Mutara Camp",
        price: 47000,
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
        city: "Capella resort & spa",
        price: 19400,
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
        city: "Sekenani Camp",
        price: 31300,
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
        city: "Tawi Lodge",
        price: 39200,
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
        city: "SaltLick",
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