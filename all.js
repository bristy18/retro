const allPost=async()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data=await res.json();
    const posts=data.posts;
    // console.log(posts)
    disPost(posts);
}
const searching=async(searchKey)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchKey}`);
    const data=await res.json();
    const posts=data.posts;
    console.log(posts)
    disPostSearch(posts);
    
}
const searchFunction=()=>{
    const searchValue=document.getElementById('search');
    const searchKey=searchValue.value;
    // console.log(searchKey);
    const container=document.getElementById('discussShow');
    container.textContent='';
    searching(searchKey);
}
const disPostSearch=posts=>{
    const container=document.getElementById('discussShow');
    posts.forEach(post => {
        // console.log(post);
        const postCard=document.createElement('div');
        postCard.classList=`flex flex-row space-x-8 m-8 border p-4 w-full`;
        postCard.innerHTML=`
        <div class="w-10 h-10">
        <img src="${post.image}" alt="">
        </div>
        <div class="flex flex-col space-y-2">
        <div class="flex flex-row space-x-2">
            <p># '${post.category}'</p>
            <p>Author : ${post.author.name}</p>
        </div>
        <h2 class="text-left">${post.title}</h2>
        <p>${post.description}</p>
        <div class="flex flex-row justify-between">
        <div class="flex flex-row space-x-2">
        <div class="flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18333C"><path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg>
                <p>${post.comment_count}</p>
        </div>
                        <div class="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#264E5B"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                            <p>${post.view_count}</p>
                        </div>
                        <div class="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#264E5B"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
                            <p>${post.posted_time}</p>
                        </div>
                        </div>
                        <button class="bg-green-500"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F3F3F3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg></button>
        `;
        container.appendChild(postCard);
    });
}

const disPost=posts=>{
    const container=document.getElementById('discussShow');
    posts.forEach(post => {
        // console.log(post);
        const postCard=document.createElement('div');
        postCard.classList=`flex flex-row space-x-8 m-8 border p-4 w-full`;
        postCard.innerHTML=`
        <div class="w-10 h-10">
        <img src="${post.image}" alt="">
        </div>
        <div class="flex flex-col space-y-2">
        <div class="flex flex-row space-x-2">
            <p># '${post.category}'</p>
            <p>Author : ${post.author.name}</p>
        </div>
        <h2 class="text-left">${post.title}</h2>
        <p>${post.description}</p>
        <div class="flex flex-row justify-between">
        <div class="flex flex-row space-x-2">
        <div class="flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18333C"><path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg>
                <p>${post.comment_count}</p>
        </div>
                        <div class="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#264E5B"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                            <p>${post.view_count}</p>
                        </div>
                        <div class="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#264E5B"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
                            <p>${post.posted_time}</p>
                        </div>
                        </div>
                        <button class="bg-green-500"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F3F3F3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg></button>
        `;
        container.appendChild(postCard);
    });
}
allPost();