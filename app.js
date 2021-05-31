var lat = {};
var cache = {};
var active = './locales/en.json';

function loading(isLoading){
    if(isLoading){
        document.getElementById('select-language').setAttribute("disabled", "disabled");
        document.getElementById('species-indicator').classList.remove('invisible');
    }else{
        document.getElementById('select-language').removeAttribute('disabled');
        document.getElementById('species-indicator').classList.add('invisible');
    }
}

function refreshList(){
    var list = document.getElementById('species-list');
    list.innerHTML = '';
    var count = 0;
    if(active===null){
        for(var species in lat){
            count++;
            var line = document.createElement('li');
            line.classList.add('list-group-item');
            line.innerHTML = '<i>' + lat[species] + '</i>';
            document.getElementById('species-list').appendChild(line);
        }
        document.getElementById('language-file').innerHTML = '<a href="./lat.json">./lat.json</a>';
    }else{
        for(var species in cache[active]){
            count++;
            var line = document.createElement('li');
            line.classList.add('list-group-item');
            line.innerHTML = '<b>' + cache[active][species].join(', ') + '</b><br/><i>' + lat[species] + '</i>';
            document.getElementById('species-list').appendChild(line);
        }
        document.getElementById('language-file').innerHTML = '<a href="' + active + '">' + active + '</a>';
    }
    document.getElementById('species-count').innerHTML = count;
    
    loading(false);
}

function getTranslation(url){
    loading(true);

    if(url=='./lat.json'){
        active = null;
        setTimeout(refreshList, 100);
        return;
    }else if(cache[url]){
        active = url;
        refreshList();
        return;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            active = url;
            cache[url] = data;
            refreshList();
        })
        .catch((error) => {
            console.error('Error:', error);
        }
    );
}
function getLat(){
    loading(true);

    fetch('./lat.json')
        .then(response => response.json())
        .then(data => {
            lat = data;
            getTranslation(active);
        })
        .catch((error) => {
            console.error('Error:', error);
        }
    );
}

function onSelectLanguage(event){
    getTranslation(event.srcElement.value);
}

window.addEventListener("change", onSelectLanguage);
getLat();