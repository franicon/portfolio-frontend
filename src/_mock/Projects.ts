import type {projectType} from "@/types"

export  const projects: projectType[] = [
    {
        link: 'www.valuexpa.com',
        video: '',
        img: 'https://res.cloudinary.com/dzcnkcjzx/image/upload/v1685986638/porfolio/valuexpa_caborb.png',
        slug: 'website build for a finance company',
        title: 'ValueXPA',
        about: 'Hired as a freelancer on upwork to build a dynamic website for a finance application with listed features which was implemented with 5 start rating by the client.',
        stacks: ['Laravel', 'VueJS', 'Axios', 'Laravel Auth', 'Email', 'Trello'],
        features: ['Redesign of the existing website', 'Admin dashboard implementation with Auth', 'Options to create insight, update and deleted','Chat options with trello', 'Pricing section to receive email']
    },
    {
        link: 'www.danvicas.com',
        video: '',
        img: 'https://res.cloudinary.com/dzcnkcjzx/image/upload/v1685986663/porfolio/danvicas_uc1ilt.png',
        slug: 'website build for a construction company',
        title: 'Danvicas',
        about: 'Build and design a company website for a construction company with few features highlighted by the client.',
        stacks: ['Laravel', 'Blade', 'TailwindCss', 'Laravel Auth', 'Email'],
        features: [ 'coming up with UI for a construction website', 'building the client side and the admin dashboard', 'Admin dashboard', 'Option to Upload insights', 'Pricing section to recieve email']
    },
    {
        link: 'coin-42.netlify.app',
        video: '',
        img: 'https://res.cloudinary.com/dzcnkcjzx/image/upload/v1685986619/porfolio/crypto_vgcawp.png',
        slug: 'Build a Crypto market-cap',
        title: 'Coin24',
        about: 'Build a crypto Market Cap with VueJS and fetching data from CoinGecko API using axios',
        stacks: ['VueJS', 'Axios', 'Boostrap', 'CoinGecko Api'],
        features: ['Fetching data from coinGecko API', 'Filter by country currency', 'Input search to find a particular asset', 'Options to load more Assets']
    },
    {
        link: 'snazzy-biscotti-24c7a6.netlify.app',
        video: '',
        img: 'https://res.cloudinary.com/dzcnkcjzx/image/upload/v1685986610/porfolio/auth_vzrjdy.png',
        slug: 'Auth system build with VueJS with form validation',
        title: 'Auth with JWT',
        about: 'Build and Authentication system with VueJS and implement state management with using pinia with input validation using veeValidate.',
        stacks: ['VueJS', 'Axios', 'VeeValidate', 'Pinia'],
        features: ['Authentication system', 'Implement statement management', 'Implement JWT token to authorize and validate current user', 'Add validation checks with veeValidate']
    },
    {
        link: 'calm-manatee-7778e3.netlify.app',
        video: '',
        img: 'https://res.cloudinary.com/dzcnkcjzx/image/upload/v1685986621/porfolio/shifta_cwaaog.png',
        slug: 'Clone a landing to practice Tailwindcss with VueJS',
        title: 'ShiftA',
        about: 'Tried implementing the techniques learned in tailwindcss to build a landing page using VueJS and create multiple components to be used and understand the technology more.',
        stacks: ['VueJS', 'TailwindCss', 'Vite'],
        features: ['Building Responsive Design', 'Writing reusable components with vue and Tailwindcss', 'Understanding Tailwindcss',]
    },
    {
        link: 'splendid-kangaroo-2cbbc4.netlify.app',
        video: '',
        img: 'https://res.cloudinary.com/dzcnkcjzx/image/upload/v1685986620/porfolio/clipboard_vjhyry.png',
        slug: 'A simple landing page build with tailwindcss.',
        title: 'Clipboard',
        about: 'Decided to test my skill with TailwindCss by building a simple landing page got the challenged from frontend mentor.',
        stacks: ['HTML', 'Css', 'TailWindCss',],
        features: ['Responsive Design', 'Reusable Styling', 'Understanding TailwindCss syntax',]
    }
]
