import tourImg  from '../images/bamburi.jpg';
import tourImg2  from '../images/leopard.webp';
import tourImg3  from '../images/Mutara.jpg';
import tourImg4  from '../images/capella.jpg';
import tourImg5  from '../images/maraaaaa.jpg';
import tourImg6  from '../images/tawi.jpeg';
import tourImg7  from '../images/Saltlick.jpg';
import tourImg8  from '../images/Kajiado.webp';
import tourImg9  from '../images/sentrim.jpeg';
import tourImg10  from '../images/Sun n Set.jpeg';
import tourImg11  from '../images/epashikino.jpg';
import tourImg12  from '../images/maiyaaan.jpg';
import tourImg13  from '../images/swahili beach.jpeg';
import tourImg14  from '../images/Elmer.jpeg';
import tourImg15  from '../images/lake-naivasha-resort.jpg';


const tours = [
    {
        id: 1,
        title: "North Coast",
        city: "Bamburi Beach Resort",
        price: 32700, 
        maxGroupSize: 6,
        desc: "All meals inclusive, hotel amenities, sgr & transfer inclusive",
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
        desc: "All meals inclusive, hotel amenities, sgr & transfer inclusive",
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
        desc: "self drive, all meals on full board",
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
        desc: "all meals on full board, self-drive",
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
    {
        id: 9,
        title:"Naivasha-Gilgil",
        city: "Sentrim Elementaita",
        price: 26600,
        maxGroupSize: 6,
        desc: "this is the description",
        reviews: [
            {
                name:"Winnie",
                rating: 8,
            },
        ],
        avgRating: 7,
        photo: tourImg9,
        featured: true,
    },
    {
        id: 10,
        title:"Diani",
        city: "Sun N Sand Beach Resort",
        price: 30000,
        maxGroupSize: 6,
        desc: "this is the description",
        reviews: [
            {
                name:"Winnie",
                rating: 8,
            },
        ],
        avgRating: 7,
        photo: tourImg10,
        featured: true,
    },
    {
        id: 11,
        title:"Naivasha-Gilgil",
        city: "Epashikino resort & spa",
        price: 26600,
        maxGroupSize: 6,
        desc: "this is the description",
        reviews: [
            {
                name:"Winnie",
                rating: 8,
            },
        ],
        avgRating: 7,
        photo: tourImg11,
        featured: true,
    },
    {
        id: 12,
        title:"Mt Kenya-Nanyuki",
        city: "Maiyan Villas",
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
        photo: tourImg12,
        featured: true,
    },
    {
        id: 13,
        title:"Diani",
        city: "Swahili Beach",
        price: 156600,
        maxGroupSize: 6,
        desc: "this is the description",
        reviews: [
            {
                name:"Winnie",
                rating: 8,
            },
        ],
        avgRating: 7,
        photo: tourImg13,
        featured: true,
    },
    {
        id: 14,
        title:"Naivasha-Gilgil",
        city: "Elmer resort & spa",
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
        photo: tourImg14,
        featured: true,
    },
    {
        id: 15,
        title:"Naivasha",
        city: "Lake Naivasha Resort",
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
        photo: tourImg15,
        featured: true,
    },
    

];

export default tours;