function setStorage(key , value ){
    return localStorage.setItem(key,value);
}

function getStorage(key , value ){
    return localStorage.getItem(key);
}

function removeStorage(key , value ){
    return localStorage.removeItem(key);
}

function clearAllStorage(key , value ){
    return localStorage.clear();
}

export {
    setStorage,
    getStorage,
    removeStorage,
    clearAllStorage
}