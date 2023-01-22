import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header';
import AllUsers from '../components/Users/AllUsers';
import UserProfile from '../components/Users/UserProfile';
import WishForm from '../components/WishForm/WishForm';
import './global.css'
import { UsersProvider } from './UsersContext';

const data = [
    {
        userId: 'u1',
        name: "Sneha Patel",
        profileImage: "https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843__340.jpg",
        location: "Mumbai, India",

        wishesCounts: {
            totalWish: 150,
            fulfilled: 20,

        },

        wishes: [
            {
                wishId: 'w1',
                heading: "A book",
                description: "A book-description",
                image: 'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w2',
                heading: "Buy a Pen",
                description: "Pen-description",
                image: 'https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w3',
                heading: "Bying a home",
                description: "Bying a home-description",
                image: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w4',
                heading: "Bying a car",
                description: "Bying a car-description",
                image: 'https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w5',
                heading: "Singing",
                description: "Singing-description",
                image: 'https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w6',
                heading: "Europe Tour",
                description: "Europe Tour-description",
                image: 'https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },

            {
                wishId: 'w7',
                heading: "Sports",
                description: "Sports-description",
                image: 'https://cdn.pixabay.com/photo/2016/05/27/14/33/football-1419954__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w8',
                heading: "Paris tour",
                description: "Paris tour-description",
                image: 'https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },
        ]
    },

    {
        userId: 'u2',
        name: "Siddharth Malhotra",
        profileImage: "https://cdn.pixabay.com/photo/2016/03/26/20/35/young-man-1281282__340.jpg",
        location: "Kolkata, India",

        wishesCounts: {
            totalWish: 41,
            fulfilled: 9,

        },

        wishes: [
            {
                wishId: 'w1',
                heading: "Buy a Blazer",
                description: "Blazer-description",
                image: 'https://cdn.pixabay.com/photo/2017/08/10/08/00/suit-2619784__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w2',
                heading: "Buy a Pen",
                description: "Pen-description",
                image: 'https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w3',
                heading: "Bying a home",
                description: "Bying a home-description",
                image: 'https://cdn.pixabay.com/photo/2023/01/14/19/50/flower-7718952_640.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w4',
                heading: "Red Shirt",
                description: "Red Shirt-description",
                image: 'https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192__340.png',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w5',
                heading: "Friuts",
                description: "Fruits-description",
                image: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w6',
                heading: "Wall Clock ",
                description: "Wall Clock-description",
                image: 'https://cdn.pixabay.com/photo/2016/11/28/21/56/clock-1866137__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },

            {
                wishId: 'w7',
                heading: "Cricket bat",
                description: "Cricket bat-description",
                image: 'https://cdn.pixabay.com/photo/2013/07/12/15/55/cricket-150560__340.png',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w8',
                heading: "Buy a calculator",
                description: "Calculator-description",
                image: 'https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },
        ]
    },

    {
        userId: 'u3',
        name: "Kushal Bajaj",
        profileImage: "https://cdn.pixabay.com/photo/2017/11/02/14/26/model-2911329__340.jpg",
        location: "Indore, India",

        wishesCounts: {
            totalWish: 241,
            fulfilled: 63,

        },

        wishes: [
            {
                wishId: 'w1',
                heading: "Necklace",
                description: "Necklace-description",
                image: 'https://cdn.pixabay.com/photo/2014/11/05/19/26/woman-518275__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w2',
                heading: "A pet dog",
                description: "Pet dog description",
                image: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w3',
                heading: "Buy a parrot",
                description: "Bying a parrot-description",
                image: 'https://cdn.pixabay.com/photo/2021/01/26/21/16/macaw-5952965__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w4',
                heading: "Silver",
                description: "Silver-description",
                image: 'https://cdn.pixabay.com/photo/2018/12/22/10/40/tree-decorations-3889456__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w5',
                heading: "Singing",
                description: "Singing-description",
                image: 'https://cdn.pixabay.com/photo/2020/09/23/02/01/microphone-5594702__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w6',
                heading: "Australia Tour",
                description: "Australia Tour-description",
                image: 'https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },

            {
                wishId: 'w7',
                heading: "Sports",
                description: "Sports-description",
                image: 'https://cdn.pixabay.com/photo/2014/11/07/00/00/volleyball-520093__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w8',
                heading: "Buy a home",
                description: "Home tour-description",
                image: 'https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },
        ]
    },

    {
        userId: 'u4',
        name: "Shiva Prasad",
        profileImage: "https://cdn.pixabay.com/photo/2016/01/18/13/07/man-1146530__340.jpg",
        location: "North Bhelpur, India",

        wishesCounts: {
            totalWish: 87,
            fulfilled: 22,

        },

        wishes: [
            {
                wishId: 'w1',
                heading: "Buy a ring",
                description: "Ring-description",
                image: 'https://cdn.pixabay.com/photo/2018/08/16/19/56/wedding-rings-3611277__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w2',
                heading: "Televison",
                description: "Televison description",
                image: 'https://cdn.pixabay.com/photo/2014/07/28/11/16/children-403582__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w3',
                heading: "Bying a home",
                description: "Bying a home-description",
                image: 'https://cdn.pixabay.com/photo/2023/01/14/19/50/flower-7718952_640.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w4',
                heading: "Bying cookies",
                description: "Bying cookies-description",
                image: 'https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w5',
                heading: "Razor",
                description: "Razor-description",
                image: 'https://cdn.pixabay.com/photo/2013/12/31/16/22/shaver-236900__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w6',
                heading: "Bally Tour",
                description: "Bally Tour-description",
                image: 'https://cdn.pixabay.com/photo/2020/09/06/09/05/beach-5548446__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },

            {
                wishId: 'w7',
                heading: "Sunflower",
                description: "Sunflower-description",
                image: 'https://cdn.pixabay.com/photo/2018/01/28/11/24/sunflower-3113318__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w8',
                heading: "Turkey tour",
                description: "Turkey tour-description",
                image: 'https://cdn.pixabay.com/photo/2020/05/21/16/04/turkey-5201498__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },
        ]
    },

    {
        userId: 'u5',
        name: "Rahul Dravid",
        profileImage: "https://cdn.pixabay.com/photo/2017/03/12/03/05/face-2136353__340.jpg",
        location: "Bangalore, India",

        wishesCounts: {
            totalWish: 78,
            fulfilled: 26,

        },

        wishes: [
            {
                wishId: 'w1',
                heading: "Buy a Pillow",
                description: "Pillow-description",
                image: 'https://cdn.pixabay.com/photo/2016/10/12/22/07/break-1736072__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w2',
                heading: "Singing tools",
                description: "Singing tools description",
                image: 'https://cdn.pixabay.com/photo/2016/11/21/13/36/man-1845432__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w3',
                heading: "Bying a forest",
                description: "Bying a forest-description",
                image: 'https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w4',
                heading: "Bying a camera",
                description: "Bying a camera-description",
                image: 'https://cdn.pixabay.com/photo/2017/08/07/01/41/camera-2598507__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w5',
                heading: "Learn acting",
                description: "Acting-description",
                image: 'https://cdn.pixabay.com/photo/2013/10/25/10/29/theater-200716__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w6',
                heading: "Italy Tour",
                description: "Italy Tour-description",
                image: 'https://cdn.pixabay.com/photo/2016/09/23/16/43/alley-1690053__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },

            {
                wishId: 'w7',
                heading: "Basketball",
                description: "Basketball-description",
                image: 'https://cdn.pixabay.com/photo/2016/11/18/22/10/man-1837119__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w8',
                heading: "World cup",
                description: "World cup-description",
                image: 'https://cdn.pixabay.com/photo/2018/06/06/12/05/world-cup-3457789__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },
        ]
    },

    {
        userId: 'u6',
        name: "Akash Verma",
        profileImage: "https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg",
        location: "Kolkata, India",

        wishesCounts: {
            totalWish: 14,
            fulfilled: 10,

        },

        wishes: [
            {
                wishId: 'w1',
                heading: "Buy a cat",
                description: "Cat-description",
                image: 'https://cdn.pixabay.com/photo/2017/04/30/18/33/kittens-2273598__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w2',
                heading: "Bicycle",
                description: "Bicycle description",
                image: 'https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w3',
                heading: "Sea beach",
                description: "Sea beach-description",
                image: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w4',
                heading: "Bying a dragon",
                description: "Bying a dragon-description",
                image: 'https://cdn.pixabay.com/photo/2016/08/16/10/18/dragon-1597583__340.png',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w5',
                heading: "Learn Dancing",
                description: "Dancing-description",
                image: 'https://cdn.pixabay.com/photo/2016/11/08/05/15/ramayana-festival-1807516__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w6',
                heading: "Buy some orangesr",
                description: "Oranges-description",
                image: 'https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },

            {
                wishId: 'w7',
                heading: "Blue flower",
                description: "Blue flower-description",
                image: 'https://cdn.pixabay.com/photo/2015/03/04/12/59/bells-flower-658751__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w8',
                heading: "Red hat ",
                description: "Red Hat-description",
                image: 'https://cdn.pixabay.com/photo/2019/12/08/12/37/chihuahua-4681108__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },
        ]
    },

    {
        userId: 'u7',
        name: "Diana D'Mello",
        profileImage: "https://cdn.pixabay.com/photo/2016/04/18/23/08/beautiful-1337737__340.jpg",
        location: "New York, USA",

        wishesCounts: {
            totalWish: 134,
            fulfilled: 110,

        },

        wishes: [
            {
                wishId: 'w1',
                heading: "Make up box",
                description: "Make up box-description",
                image: 'https://cdn.pixabay.com/photo/2021/04/22/11/47/eye-shadows-6198839__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w2',
                heading: "Watch a movie",
                description: "Watch a movie- description",
                image: 'https://cdn.pixabay.com/photo/2017/09/02/22/33/movies-2708756__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w3',
                heading: "Bying a carpet",
                description: "Bying a carpet-description",
                image: 'https://cdn.pixabay.com/photo/2015/12/11/18/08/rug-1088557__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w4',
                heading: "Bying a yellow sweator",
                description: "Bying a yellow sweator-description",
                image: 'https://media.istockphoto.com/id/1413653243/photo/woman-drinking-hot-drink-from-mug-in-cold-morning.jpg?b=1&s=170667a&w=0&k=20&c=QlpEulFa11GEF4t9jkWEByKiOgqsJ6uxxopQ34IXK9Y=',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w5',
                heading: "Win an award",
                description: "Award-description",
                image: 'https://cdn.pixabay.com/photo/2016/08/26/15/56/medal-1622523__340.png',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w6',
                heading: "Birthday celebration",
                description: "Birthday celebration-description",
                image: 'https://cdn.pixabay.com/photo/2014/06/30/11/40/cupcakes-380178__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },

            {
                wishId: 'w7',
                heading: "A jar of Jam",
                description: "Jams-description",
                image: 'https://cdn.pixabay.com/photo/2018/06/21/19/43/fruit-3489313__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w8',
                heading: "A slate board",
                description: "A slate board-description",
                image: 'https://cdn.pixabay.com/photo/2016/08/23/15/01/board-1614646__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },
        ]
    },

    {
        userId: 'u8',
        name: "Christiano Ronaldo",
        profileImage: "https://cdn.pixabay.com/photo/2017/09/27/15/52/man-2792456__340.jpg",
        location: "Bhagalpur, India",

        wishesCounts: {
            totalWish: 36,
            fulfilled: 2,
        },

        wishes: [
            {
                wishId: 'w1',
                heading: "A football",
                description: "Buy me a football-description",
                image: 'https://cdn.pixabay.com/photo/2014/10/14/20/24/ball-488717__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w2',
                heading: "A stadium",
                description: "Stadium description",
                image: 'https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w3',
                heading: "Bying a ropeway",
                description: "Bying a ropeway-description",
                image: 'https://cdn.pixabay.com/photo/2014/01/04/13/42/chairlift-238497__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w4',
                heading: "Bying a Starry night",
                description: "Bying a Starry night-description",
                image: 'https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w5',
                heading: "Video Games",
                description: "Video games-description",
                image: 'https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w6',
                heading: "Asian Tour",
                description: "Asian Tour-description",
                image: 'https://cdn.pixabay.com/photo/2018/08/19/16/26/taiwan-3617060__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },

            {
                wishId: 'w7',
                heading: "A good lunch",
                description: "Lunch-description",
                image: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w8',
                heading: "Bye me a rest chair",
                description: "Rest chair-description",
                image: 'https://cdn.pixabay.com/photo/2014/02/21/00/09/chair-270980__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },
        ]
    },

    {
        userId: 'u9',
        name: "Michael Banerjee",
        profileImage: "https://cdn.pixabay.com/photo/2015/09/19/12/20/man-947161__340.jpg",
        location: "Paris, France",

        wishesCounts: {
            totalWish: 63,
            fulfilled: 16,

        },

        wishes: [
            {
                wishId: 'w1',
                heading: "Lets go to China",
                description: "China-description",
                image: 'https://cdn.pixabay.com/photo/2019/08/21/16/03/panda-4421395__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w2',
                heading: "African Savannah",
                description: "African Savannah- description",
                image: 'https://cdn.pixabay.com/photo/2015/11/27/14/38/elephant-1065635__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w3',
                heading: "Bying a Jacket",
                description: "Bying a Jacket-description",
                image: 'https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w4',
                heading: "Bying a Body Spray",
                description: "Bying a Body Spray-description",
                image: 'https://cdn.pixabay.com/photo/2014/08/17/20/24/perfume-420174__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w5',
                heading: "Hot Air Baloons",
                description: "Hot Air Baloons-description",
                image: 'https://cdn.pixabay.com/photo/2016/11/29/04/18/hot-air-balloons-1867279__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w6',
                heading: "Marble Statue Tour",
                description: "Marble Statue Tour-description",
                image: 'https://cdn.pixabay.com/photo/2016/01/15/14/48/antic-1141836__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },

            {
                wishId: 'w7',
                heading: "Art pencils",
                description: "Art pencils - description",
                image: 'https://cdn.pixabay.com/photo/2016/11/23/00/37/art-1851483__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w8',
                heading: "Yellow taxi",
                description: "Yellow taxi-description",
                image: 'https://cdn.pixabay.com/photo/2016/03/18/14/11/city-1265055__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },
        ]
    },

    {
        userId: 'u10',
        name: "Karan Singh",
        profileImage: "https://cdn.pixabay.com/photo/2017/03/15/17/17/men-2146800__340.jpg",
        location: "Punjab, India",

        wishesCounts: {
            totalWish: 263,
            fulfilled: 89,

        },

        wishes: [
            {
                wishId: 'w1',
                heading: "See a mountain",
                description: "See a mountain-description",
                image: 'https://cdn.pixabay.com/photo/2017/03/15/13/27/rough-horn-2146181__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w2',
                heading: "Chocolates developer",
                description: "Chocolates developer- description",
                image: 'https://cdn.pixabay.com/photo/2016/12/11/20/01/coffee-1900194__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w3',
                heading: "Bying a Story book",
                description: "Bying Story book-description",
                image: 'https://cdn.pixabay.com/photo/2022/05/10/20/52/calligraphy-7188024__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w4',
                heading: "Bying a car",
                description: "Bying a car-description",
                image: 'https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w5',
                heading: "Medicines",
                description: "Medicines-description",
                image: 'https://cdn.pixabay.com/photo/2018/09/13/02/17/pills-3673645__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w6',
                heading: "Greece Tour",
                description: "Greece Tour-description",
                image: 'https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },

            {
                wishId: 'w7',
                heading: "A Japanese cuisine",
                description: "Japanese cuisine-description",
                image: 'https://cdn.pixabay.com/photo/2016/05/21/14/09/food-1406883__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w8',
                heading: "Buy an Umbrella",
                description: "Umbrella-description",
                image: 'https://cdn.pixabay.com/photo/2016/03/26/23/00/umbrellas-1281751__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },
        ]
    },

    {
        userId: 'u11',
        name: "Salman Khan",
        profileImage: "https://cdn.pixabay.com/photo/2019/08/06/00/46/black-and-white-4387130__340.jpg",
        location: "Pune, India",

        wishesCounts: {
            totalWish: 54,
            fulfilled: 19,

        },

        wishes: [
            {
                wishId: 'w1',
                heading: "A Sunglass",
                description: "Sunglass-description",
                image: 'https://cdn.pixabay.com/photo/2017/12/06/20/23/accessory-3002608__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w2',
                heading: "Get a sleepy cat",
                description: "A sleepy cat - description",
                image: 'https://cdn.pixabay.com/photo/2016/12/30/17/27/cat-1941089__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w3',
                heading: "Bying a Toy",
                description: "Bying a Toy-description",
                image: 'https://cdn.pixabay.com/photo/2016/11/28/10/48/child-1864718__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w4',
                heading: "Bying Shoes",
                description: "Bying shoes-description",
                image: 'https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w5',
                heading: "A refrigerator",
                description: "Refrigerator-description",
                image: 'https://cdn.pixabay.com/photo/2023/01/02/22/01/fridge-7693154__340.png',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w6',
                heading: "Ice Cream",
                description: "Ice cream-description",
                image: 'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },

            {
                wishId: 'w7',
                heading: "A kite",
                description: "Kites-description",
                image: 'https://cdn.pixabay.com/photo/2017/08/22/00/50/kite-2667477__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w8',
                heading: "Buy me Eiffel tower",
                description: "Eiffel tower-description",
                image: 'https://cdn.pixabay.com/photo/2012/11/22/05/32/eiffel-tower-66925__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },
        ]
    },

    {
        userId: 'u12',
        name: "Vivek Oberoi",
        profileImage: "https://cdn.pixabay.com/photo/2017/08/15/16/28/portrait-2644622__340.jpg",
        location: "Mysore, India",

        wishesCounts: {
            totalWish: 42,
            fulfilled: 15,

        },

        wishes: [
            {
                wishId: 'w1',
                heading: "Become a Smart watch",
                description: "Wrist Smart-description",
                image: 'https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w2',
                heading: "Roses",
                description: "Roses - description",
                image: 'https://cdn.pixabay.com/photo/2018/05/16/22/27/rose-3407234__340.jpg',
                wishLink: "#",
                category: "career",
                fulfilled: true
            },

            {
                wishId: 'w3',
                heading: "Bying a piano",
                description: "Bying a piano-description",
                image: 'https://cdn.pixabay.com/photo/2013/02/06/11/12/piano-78492__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w4',
                heading: "Bying a Snowman",
                description: "Bying a Snowman-description",
                image: 'https://cdn.pixabay.com/photo/2014/04/05/11/38/snowman-316448__340.jpg',
                wishLink: "#",
                category: "lifestyle",
                fulfilled: true
            },

            {
                wishId: 'w5',
                heading: "My Birthday Cake",
                description: "My Birthday Cake-description",
                image: 'https://cdn.pixabay.com/photo/2015/08/04/14/24/birthday-874783__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w6',
                heading: "A Pen drive",
                description: "A Pen drive-description",
                image: 'https://cdn.pixabay.com/photo/2015/05/31/11/40/usb-791256__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },

            {
                wishId: 'w7',
                heading: "Scissors",
                description: "Scissors-description",
                image: 'https://cdn.pixabay.com/photo/2019/03/28/21/04/cord-4088055__340.jpg',
                wishLink: "#",
                category: "hobby",
                fulfilled: true
            },

            {
                wishId: 'w8',
                heading: "A beautiful painting",
                description: "A beautiful painting-description",
                image: 'https://cdn.pixabay.com/photo/2019/11/07/17/54/woman-4609514__340.jpg',
                wishLink: "#",
                category: "others",
                fulfilled: true
            },
        ]
    },




]

function AppEntry() {

    const [users, setUsers] = useState([])



    const [selectedUserId, setSelectedUserId] = useState(null)

    useEffect(() => {
        setUsers(data);

    }, [])

    const clickUserHandler = (id) => {
        setSelectedUserId(id)
    }

    const selectedUser = users.find(user => user.userId === selectedUserId)

    return (
        <div>
            <UsersProvider value={{ users: users, clickUserHandler: clickUserHandler }}>
                <Header />
                <WishForm />


                <AllUsers />

                {selectedUserId && <UserProfile selectedUser={selectedUser} />}
            </UsersProvider>
        </div>
    )
}

export default AppEntry;