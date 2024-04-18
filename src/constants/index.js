import { BiWallet } from 'react-icons/bi'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { LuShoppingCart } from 'react-icons/lu'

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