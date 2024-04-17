import { BiWallet } from 'react-icons/bi'
import { CiShoppingCart } from 'react-icons/ci'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'

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
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo fuga laborum fugiat ducimus, nam deserunt, iure veniam ab magni commodi veritatis quaerat officiis necessitatibus repellendus eum asperiores nulla quibusdam nihil."
    },
    {
        icon: CiShoppingCart,
        heading: "Nft Marketplace",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo fuga laborum fugiat ducimus, nam deserunt, iure veniam ab magni commodi veritatis quaerat officiis necessitatibus repellendus eum asperiores nulla quibusdam nihil."
    },
    {
        icon: AiOutlineAppstoreAdd,
        heading: "Launch DApps",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo fuga laborum fugiat ducimus, nam deserunt, iure veniam ab magni commodi veritatis quaerat officiis necessitatibus repellendus eum asperiores nulla quibusdam nihil."
    }
]