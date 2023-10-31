// API notifitin

export const API_NOTIFICATION_MESSAGES={
    loading:{
        title:'loading....',
        message:'Data succesfully'
    },
    success:{
        title:'success',
        message:'data succesfully loaded'
    },
    responseFailure:{
        title:'Error',
        message:'An error occured while fetching'
    },
    requestFailure:{
        title: 'Error',
        message:'An Errro while parsing or request data'
    },
    networkError:{
        title:'Error',
        message:'network error hain , try again later'
    }
}

// API SERVICE CALL
export const SERVICE_URLS={
    userSignup:{ url:'/signup', method:'POST'}
}