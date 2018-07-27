export const getHeaders = () => {

    const requestsHeader = {
        'Content-Type': 'application/json',
        'Key': 'bitbookdev',
    }

    // if (localStorage.getItem("sessionId")) {
    //     requestsHeader['SessionId'] = localStorage.getItem("sessionId");
    // }

    return requestsHeader;
}

export const get = (url) => {

    return fetch(url, {

        headers: {
            'sessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            'Key': 'bitbookdev',
        },
        method: 'GET'
    })
        .then(response => {
           return response.json()
        })
}

export const post = (url, newContent) => {

    const postData = {
        method: 'POST',
        body: JSON.stringify(newContent),
        headers: {
            'Content-Type': 'application/json',
            'sessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
            'Key': 'bitbookdev',
        },
    }
    return fetch(url, postData)

}

export const put = (url, data) => {

    return fetch(url, {

        method: 'PUT',
        body: JSON.stringify(data),
        headers: getHeaders(),
    })

}

export const deleteData = (url) => {

    return fetch(url, {

        method: 'DELETE',
        headers: getHeaders()
    })
}

