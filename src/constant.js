const prod = {
		url: {
                BASE_URL: 'https://my-heroku-app.herokuapp.com',
        }
};

const dev = {
		url:{
            BASE_URL: 'http://localhost:3004',
        }		
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;