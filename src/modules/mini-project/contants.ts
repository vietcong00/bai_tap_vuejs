export const ITEM_NAVBAR_LIST = [
    'Laptops',
    'Desktop PCs',
    'Networking Devices',
    'Printers & Scanners',
    'PC Parts',
    'All Other Products',
    'Repairs',
    'Our Deals',
];

export const FILTER_PRICE_OPTION = [
    {
        name: '$0.00 - $1,000.00',
        number: 0,
        minPrice: 0,
        maxPrice: 1000,
    },
    {
        name: '$1,000.00 - $2,000.00',
        number: 0,
        minPrice: 1000,
        maxPrice: 2000,
    },
    {
        name: '$2,000.00 - $3,000.00',
        number: 0,
        minPrice: 2000,
        maxPrice: 3000,
    },
    {
        name: '$3,000.00 - $4,000.00',
        number: 0,
        minPrice: 3000,
        maxPrice: 4000,
    },
    {
        name: '$4,000.00 - $5,000.00',
        number: 0,
        minPrice: 4000,
        maxPrice: 5000,
    },
    {
        name: '$5,000.00 - $6,000.00',
        number: 0,
        minPrice: 5000,
        maxPrice: 6000,
    },
    {
        name: '$6,000.00 - $7,000.00',
        number: 0,
        minPrice: 6000,
        maxPrice: 7000,
    },
    {
        name: '$7,000.00 And Above',
        number: 0,
        minPrice: 7000,
        maxPrice: Infinity,
    },
];

export const PAGINATION_OPTIONS = [
    { name: '2 per page', value: 2 },
    { name: '5 per page', value: 5 },
    { name: '10 per page', value: 10 },
    { name: '15 per page', value: 15 },
    { name: '20 per page', value: 20 },
];

export const SORT_OPTIONS = ['Position', 'Price', 'Name', 'Rate'];

export const TEXT_ITEM_DEFAULT = {
    name: '',
    number: 0,
};

export const FILTER_CHOSEN_PRICE_DEFAULT = {
    name: '',
    minPrice: 0,
    maxPrice: 0,
    number: 0,
};

export const FILTER_CHOSEN_LIST_DEFAULT = {
    category: { ...TEXT_ITEM_DEFAULT },
    price: { ...FILTER_CHOSEN_PRICE_DEFAULT },
    color: { ...TEXT_ITEM_DEFAULT },
};
