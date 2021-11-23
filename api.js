const URL ='https://api.github.com/users'
let templet = document.getElementById('templete');

async function FeatchApi(){
    let connectServer = await window.fetch(URL);
    let ConvertJSON = await connectServer.json();
    let output = '';
    for(let user of ConvertJSON){

        output+=`
    <div class = 'userBlock'>
        <img src = ${user.avatar_url} alt=${user.login}/>
        <h2>${user.login}</h2>
        <button>
            <a href=${user.html_url} target ="_blank">Go to profile</a>
        </button>
    </div>`;
            
    }
    // loop ended here
    templet.innerHTML = output;
}



FeatchApi()