const images = [
    "https://images.unsplash.com/photo-1638726201854-4b42cb53d308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    'https://images.unsplash.com/photo-1638397861442-dedc9e1eb58d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1638814141222-1c560b940c52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=344&q=80',
    'https://dr.savee-cdn.com/things/6/1/947fc7825d592e073f3906.jpg',
    'https://dr.savee-cdn.com/things/6/0/ddba20ea875e5eba5e8856.jpg',
    'https://dr.savee-cdn.com/things/5/e/68f35e1404e45961765299.gif',
    'https://dr.savee-cdn.com/things/6/1/83d88d67b030d9aef082f8.jpg',
    'https://dr.savee-cdn.com/things/6/1/80259167b030d9aef046f9.jpg',
    'https://dr.savee-cdn.com/things/5/f/de5cc54d5cb418bb2bcaea.png',
    'https://dr.savee-cdn.com/things/6/1/6c578f1ff504a6334769b4.jpg',
    'https://dr.savee-cdn.com/things/6/1/76ebbcfd9b0f8e00cf35d8.jpg',
    'https://dr.savee-cdn.com/things/6/1/64711b0e69492ef09b7fd0.jpg'
]

const NUMBEROFPOST = 80

const posts = Array.from({length : NUMBEROFPOST}).map((_,i) => ({
    id : i,
    title : `Post ${i + 1}`,
    image : images[i % images.length]
}))

// const posts = []
// for(let i = 0;i < 80; i++) {
//     let item = {
//         id: i,
//         title : `Post ${i}`,
//         image : images[i % images.length]
//     }
//     posts.push(item)
// }
