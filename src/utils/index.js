export * from './constants'

export const setItemInLocalStorage = (key,value) =>{
  if(!key || !value){
    return console.error('Can not store in LocalStorage')
  }
  const valueToStore = typeof value !== 'string' ? JSON.stringify(value):value

  localStorage.setItem(key,valueToStore)
}

export const getItemFromLocalStorage = (key) =>{
  if(!key ){
    return console.error('Can not get the value from LocalStorage')
  }
  return localStorage.getItem(key)

}

export const removeItemFromLocalStorage = (key) =>{
  if(!key ){
    return console.error('Can not get the value from LocalStorage')
  }
  localStorage.removeItem(key)

}



export const getFormBody = (params) =>{
  let formBody = [];

  for(let property in params){
    // 'user name => 'user%20name
    let encodedKey = encodeURIComponent(property) 

    // pranav 123 => pranav%2020123
    let encodedValue = encodeURIComponent(params[property])
  
    formBody.push(encodedKey+ '=' + encodedValue)
  
  }

  //'username=pranav&password=123213'
  return formBody.join('&')


}