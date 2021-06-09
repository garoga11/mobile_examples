const BASE_URL = 'http://localhost:5000';

async function callApi(endpoint, options = {}){
    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };

    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

const api = {
    badges: {
        list(){
            return callApi('/all/');
        },
        create(badge) {
            return callApi(`/new/`, {
                method: 'POST',
                body: JSON.stringify(badge),
            });
            
        },
        read(badgeId){
            return callApi(`/_id:${badgeId}`);
        },
        update(badgeId, updates){
            return callApi(`/_id:${badgeId}`, {
                method: 'PUT',
                body: JSON.stringify(updates),
            });
        },
        remove(badgeId){
            return callApi(`/_id:${badgeId}`, {
                method: 'DELETE',
            });
        },
    },
};

export default api;