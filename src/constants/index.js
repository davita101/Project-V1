import { BiWallet } from 'react-icons/bi'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { LuShoppingCart } from 'react-icons/lu'
import { MetalBotNft, MonkeyNft, SquirrelNft, TheNorthFaceNft } from '../assets'

export const navLinks = [
    { label: "Home", route: '/' },
    { label: "About", route: '/about' },
    { label: "Services", route: '/services' },
    { label: "Contact", route: '/contact' },
]

export const heroText = [
    {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Impedit cum inventore rem eos totam.Perspiciatis, optio natus.Sed obcaecati dolore est reiciendis unde ducimus molestias sunt! Perferendis sapiente quos non."
    }
]


export const infoText = [
    {
        icon: BiWallet,
        heading: "Collect Wallet",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo fuga laborum fugiat ducimus, nam deserunt, iure "
    },
    {
        icon: LuShoppingCart,
        heading: "Nft Marketplace",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo fuga laborum fugiat ducimus, nam deserunt, iure "
    },
    {
        icon: AiOutlineAppstoreAdd,
        heading: "Launch DApps",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo fuga laborum fugiat ducimus, nam deserunt, iure "
    }
]

export const productText = [
    {
        categoryJson: [
            {
                route: '/',
                label: "Art"
            },
            {
                route: '/',
                label: "Collectibles"
            },
            {
                route: '/',
                label: "Real Estate"
            },
            {
                route: '/',
                label: "Monkey"
            }
        ]
    },
    {
        nftJson: [
            {
                img: MonkeyNft,
                heading: "Monkey",
                price: "0.29",
                time: [3, 4, 4],
                left: 2,
                own: 24
            },

            {
                img: MetalBotNft,
                heading: "Metal Bot",
                price: "0.54",
                time: [1, 5, 55],
                left: 4,
                own: 56
            },
            {
                img: SquirrelNft,
                heading: "Squirrel",
                price: "0.20",
                time: [0, 5, 37],
                left: 8,
                own: 23
            },
            {
                img: TheNorthFaceNft,
                heading: "North Face",
                price: "1",
                time: [2, 3, 5],
                left: 4,
                own: 56
            },
        ]
    }
]