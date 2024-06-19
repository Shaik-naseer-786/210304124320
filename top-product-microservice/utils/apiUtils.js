const axios = require('axios');

const getProducts = async () => {
    try {
        const response = await axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products', {
            headers: {
                'ClientID': '511a9824-ff9f-452b-914a-78a27eaac8d8',
                'ClientSecret': 'BhXfKyboTxYpTYDL',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4Nzc3NzA0LCJpYXQiOjE3MTg3Nzc0MDQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjUxMWE5ODI0LWZmOWYtNDUyYi05MTRhLTc4YTI3ZWFhYzhkOCIsInN1YiI6IjIxMDMwNDEyNDMyMEBwYXJ1bHVuaXZlcnNpdHkuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJQYXJ1bCBVbml2ZXJzaXR5IiwiY2xpZW50SUQiOiI1MTFhOTgyNC1mZjlmLTQ1MmItOTE0YS03OGEyN2VhYWM4ZDgiLCJjbGllbnRTZWNyZXQiOiJCaFhmS3lib1R4WXBUWURMIiwib3duZXJOYW1lIjoiTmFzZWVyIiwib3duZXJFbWFpbCI6IjIxMDMwNDEyNDMyMEBwYXJ1bHVuaXZlcnNpdHkuYWMuaW4iLCJyb2xsTm8iOiIyMTAzMDQxMjQzMjAifQ.PeJQzWvBLYo0eX_4_eLZRrGg_qY8LBBArvp7281nc2Y', // Update with your actual access token
                'Accept': 'application/json',
            },
            params: {
                top: '5',
                minPrice: '100',
                maxPrice: '10000'
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch products from test server');
    }
};

module.exports = { getProducts };