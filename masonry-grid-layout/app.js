const container = document.querySelector(".container")

function generateMasonryGrid(columns, posts) {
    container.innerHTML = ''

    //store all column arrays which contain the relavant posts
    let columnWrappers = {}

    for(let i = 0; i < columns; i++) {
        columnWrappers[`column${i}`] = []
    }
    for(let i = 0; i < posts.length; i++){
        const column = i % columns
        columnWrappers[`column${column}`].push(posts[i])
    }
    for (let i = 0; i < columns; i++) {
        let columnPosts = columnWrappers[`column${i}`]
        let column = document.createElement('div')
        column.classList.add('column')

        columnPosts.forEach(p => {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post')
            let image = document.createElement('img')
            image.src = p.image
            postDiv.appendChild(image)
            column.appendChild(postDiv)
        });
        container.appendChild(column)
    }
}

generateMasonryGrid(5,posts)
