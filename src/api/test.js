import axios from 'axios'
const api_key = "841eec397c5b30135100417a42900c1f"
const language = "ko"

//토큰가져오기
export const login=async()=>{
    const response = await axios.get(`/authentication/token/new?api_key=${api_key}`)
    localStorage.setItem('userToken',response.data.request_token)
    return response
}

export const getTest=async()=>{
    const response = await axios.get(`/genre/movie/list?api_key=${api_key}&language=${language}`)
    return response
}

export const getTopMovie=async()=>{
    const response = await axios.get(`/movie/top_rated?api_key=${api_key}&language="ko"`)
    return response
}

export const getDetail=async()=>{
    const response = await axios.get(`/movie/680?api_key=${api_key}&language=ko`)
    return response
}

export const getLanguage=async()=>{
    const response = await axios.get(`/configuration/languages?api_key=${api_key}`)
    return response
}