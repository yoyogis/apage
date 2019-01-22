var api = (function(){
    function searchParameters(){
        let result = {};
        location.search.substr(1).split("&").forEach(function(item){
            let ps = item.split("=");
            result[ps[0]] = ps[1];
        });
        return result;
    }

    function loadPage(pageId){
        
    }

    return {
        searchParameters:searchParameters
    }
})();

console.log(api.searchParameters());

