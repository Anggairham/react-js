// GLobal API Services
// https://www.youtube.com/watch?v=xncr4BecGP8&list=PLU4DS8KR-LJ03qEsHn9zV4qdhcWtusBqb&index=31

import axios from 'axios';

const RootPath = 'http://localhost:3004'
const Get = (path) => {
    const promise = new Promise((resolve,reject)=>{
        axios.get(`${RootPath}/${path}`).then((response)=>{
            resolve(response)
        }, (err) => {
            reject(err)
        })
    })
    return promise;
}

const Post = (path, data) => {
    const promise = new Promise((resolve,reject)=>{
        axios.post(`${RootPath}/${path}`,data).then((response)=>{
            resolve(response)
        }, (err)=>{
            reject(err)
        })
    })
    return promise;
}
const getNewsBlog = (data) => Get('posts?_sort=id&_order=desc');
const postNewsBlog = (data) => Post('posts',data);

const API = {
    getNewsBlog,
    postNewsBlog,
}

export default API;
