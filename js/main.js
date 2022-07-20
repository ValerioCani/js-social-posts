const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    }, 
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const container = document.getElementById('container');

posts.forEach((posted) => {
    let post = document.createElement('div');
    post.classList.add('post');

        let postHeader = document.createElement('div');
        postHeader.classList.add('post__header');

            let postMeta = document.createElement('div');
            postMeta.classList.add('post-meta');
                
                let postMetaIcon = document.createElement('div');
                postMetaIcon.classList.add('post-meta__icon');
                    
                    let profilePic = document.createElement('img');
                    profilePic.classList.add('profile-pic');
                    postMetaIcon.append(profilePic);

                postMeta.append(postMetaIcon);
                
                let postMetaData = document.createElement('div');
                postMetaData.classList.add('post-meta__data');
                
                    let postMetaAuthor = document.createElement('div');
                    postMetaData.classList.add('post-meta__author');
                    postMetaData.append(postMetaAuthor);
                    
                    let postMetaTime = document.createElement('div');
                    postMetaData.classList.add('post-meta__time');
                    postMetaData.append(postMetaTime);
                
                postMeta.append(postMetaData);
            
            postHeader.append(postMeta);
           
        post.append(postHeader);

        let postText = document.createElement('div');
        postText.classList.add('post__text');
        post.append(postText);

        let postImage = document.createElement('div');
        postImage.classList.add('post__image');

            let imagePost = document.createElement('img');
            postImage.append(imagePost);

        post.append(postImage);

        let postFooter = document.createElement('div');
        postFooter.classList.add('post__footer');

            let likes = document.createElement('div');
            likes.classList.add('likes', 'js-likes');
            
                let likesCTA = document.createElement('div');
                likesCTA.classList.add('likes__cta');
                likes.append(likesCTA);

                let likesCounter = document.createElement('div');
                likesCounter.classList.add('likes__counter');
                likes.append(likesCounter);

            postFooter.append(likes);
        
        
        post.append(postFooter);
        
    container.append(post);
});