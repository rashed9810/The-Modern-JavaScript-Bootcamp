const library = [  {
    title: 'Himur Rupa',
    author: 'Humayon Ahmed',
    status: {
        own: true,
        reading: true,
        read: false,

    }, 
},
{
    title: 'Hazar Borchor Dhore',
    author: 'Johir Raihan',
    status: {
        own: true,
        reading: false,
        read: false,
    },
}, 
{
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    status: {
        own: true,
        reading: false,
        read: true,

    },
}, 
 {
    title: 'The Monk who sold his Ferrari',
    author: 'Robin Sharma',
    status: {
        own: false,
        reading: false,
        read: true,
    },
},
];

library[0].status.read = true;
library[1].status.read = true ;
library[2].status.read = true;

const{title: firstBook} = library[0];
console.log(firstBook);


const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
