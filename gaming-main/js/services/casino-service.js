export const casinoService = {
    query,
}

function query() {
    return gCasinos
}

const gCasinos = [
    {
        name: 'Gransino',
        bonus: 'You can choose from 3 different bonuses',
        wagering: '40x',
        categories: ['Slots', 'Mini Games', 'Live Casino', 'Table Games'],
        payments: ['Visa', 'MasterCard', 'Bitcoin', 'Ethereum', 'Neteller'],
        payoutSpeed: 'Fast payout, 24-48 hours',
        winningRate: '96%-98%%',
        link: 'https://casinohermes1.com',
        logo: 'img/casino/gransino1.webp',
    },
    {
        name: 'Fat Pirate',
        bonus: '100% up to £425 + 200 Free Spins + 1 Bonus Crab',
        wagering: '35x',
        categories: ['Slots', 'Live Casino', 'Table Games', 'Mini Games'],
        payments: ['Visa', 'MasterCard', 'Bitcoin', 'Ethereum', 'Neteller'],
        payoutSpeed: '1-3 Days',
        winningRate: '95%',
        rating: 5,
        link: 'https://fatpirate3.com',
        logo: 'img/casino/fatPirate.png',
    },
    {
        name: '1Red',
        bonus: '200% up to £7,890 + 100 Free spins',
        wagering: '30x',
        categories: ['Slots', 'Mini Games', 'Live Casino', 'Table Games'],
        payments: ['Visa', 'MasterCard', 'Bitcoin', 'Ethereum', 'Neteller'],
        payoutSpeed: 'Fast payout, 1-3 Days',
        winningRate: '98%',
        rating: 5,
        link: 'https://1red.com',
        logo: 'img/casino/1red.png',
    },
    {
        name: 'Donbet',
        bonus: '150% up to €750 + 50 Free Spins',
        wagering: '30x',
        categories: [
            'eSports',
            'Mini Games',
            'Live Casino',
            'Slots',
            'Table Games',
        ],
        payments: ['Visa', 'MasterCard', 'Bitcoin', 'Ethereum', 'Neteller'],
        payoutSpeed: '1 for crypto, 1-5 Days for e-wallets and bank transfers',
        winningRate: '95%-98%',
        rating: 5,
        link: 'https://Donbet.com',
        logo: 'img/casino/donbet.png',
    },
    {
        name: 'Europeen777',
        bonus: '300% Bonus on your first 3 deposits',
        wagering: '30x',
        categories: ['Live Casino', 'Slots', 'Table Games'],
        payments: ['Credit card', 'e-wallet', 'Cryptocurrency'],
        payoutSpeed: '1-5 Days',
        winningRate: '97% for table games and slots',
        rating: 5,
        link: 'https://Europeen777.com',
        logo: 'img/casino/europeen777.png',
    },
]
