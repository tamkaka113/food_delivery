export const getParamsToUrl=(url,key)=>{
    var urls = new URL(url);
    return urls.searchParams.get(key);
}