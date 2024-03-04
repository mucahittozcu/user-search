"use client"
import React, { useState } from "react"

const Api = "https://api.github.com"

const UserSearch = () => {
    //  Kullanıcının arama kutusuna girdiği değeri tutar. //
    const [userInput, setUserInput] = useState("")
    // GitHub API'den dönen kullanıcıları saklayan bir dizi. //
    const [users, setUsers] = useState([])

    // Kullanıcının arama kutusuna her karakter girdiğinde userInput state'ini güncellemek için kullanılır. //
    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }

    // Form submit edildiğinde çalışır. //
    const handleSubmit = async (e) => {
        e.preventDefault() // ile sayfanın yeniden yüklenmesi engellenir. //
        try {
            // GitHub API'sine kullanıcının girdiği değeri içeren bir istek gönderilir. //
            const response = await fetch(`${Api}/search/users?q=${userInput}`)
            const data = await response.json() //  HTTP yanıtını JSON formatına dönüştürür.JavaScript nesneleri olarak kullanmamızı sağlar. //
            setUsers(data.items)
        } catch (error) {
            console.error("Error fetching users:", error)
        }
    }

    return (
        <div className="container">
            <h1>GitHub User Search</h1>
            <form className="container-form" onSubmit={handleSubmit}>
                <input 
                className="container-input"
                    type="text" 
                    placeholder="GitHub Username or E-mail" 
                    value={userInput} 
                    onChange={handleInputChange}
                />
                <button className="btn-submit" type="submit">Search</button>
            </form>
            <div> 
                <h3>Results</h3>
                {users.map((user) => (
                    <div className="container-result" key={user.id}>
                          
                        <img  src={user.avatar_url} alt={user.login} />
                        <h4>{<a href={user.html_url}>{user.login}</a>}</h4>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserSearch;


// // Deneme // // 
// "use client"
// import { useState } from "react"

// const Api = "https://api.github.com"
// const UserSearch = () => {
//     // // Bu state, kullanıcının input alanına girdiği değeri saklayacak.
//     const [userInput,setUserInput] = useState("")
//     // // Bu state, GitHub API'den dönen kullanıcıları saklayacak bir dizi olacak.
//     const [users, setUsers] = useState([])
    
// const handleInputChange = (e) => {
//     setUserInput(e.target.value)
// }

// const handleSubmit = (e) => {
//     e.preventDefault()
//     sendQuery(userInput)
// }

// async function fetchusers (query) {
//  const response = await fetch(`${Api}/search/users?q=${query}`) 
//  const data = await response.json()
//  return data 
// }

// async function sendQuery(query) {
//   let response = await fetchusers(query);
//   setUsers(response.items);    
// }

//   return (
//     <div>
//         <h1>GitHub User Search</h1>
//        <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           placeholder="GitHub Username or E-mail" 
//           value={userInput} 
//           onChange={handleInputChange}
//         />
//         <button type="submit">Search</button>
//        </form>
     
//        { users.map((user) => (
//                 <div key={user.id}>
//                     <h2>{user.name}</h2>   
//                     <img src={user.avatar_url} alt={user.login} />
//                     <h4>{user.login}</h4>
//                     <a href={user.html_url}>{user.html_url}</a>
//                 </div>
//             ))}
//        </div>
//   )
// }
// export default UserSearch









// // Deneme // // sadece bir kullanıcı getiriyor. // //
// "use client"
// import { useState,useEffect } from "react"


// const UserSearch = () => {
//     // // Bu state, kullanıcının input alanına girdiği değeri saklayacak.
//     const [userInput,setUserInput] = useState("")
//     // // Bu state, GitHub API'den dönen kullanıcıları saklayacak bir dizi olacak.
//     const [users, setUsers] = useState([])
    
// const handleInputChange = (e) => {
//     setUserInput(e.target.value)
// }

// // // Form gönderildiğinde bu fonksiyon çağrılır. Kullanıcının girdiği değeri kullanarak GitHub API'ye bir istek gönderir ve API'den dönen veriyi işler.
// const handleSubmit = async (e) => {

//     // //  Formun varsayılan davranışını engeller, yani sayfanın yeniden yüklenmesini önler.
//      e.preventDefault()

//      // //  Kullanıcının girdiği değerin boş olup olmadığını kontrol eder.
//     if(!userInput.trim()) return;

//     // // Asenkron bir işlemi (API isteği) gerçekleştirirken oluşabilecek hataları ele almak için bir try-catch bloğu kullanılır.
//   try {
//       const response = await fetch(`https://api.github.com/users/${userInput}`)

//       if (!response.ok) {
//           throw new Error("Kullanıcı bulunamadı")
//      // // Yanıtın başarılı bir HTTP yanıt kodu (200-299 aralığında) döndürüp döndürmediğini belirler. Eğer yanıt başarılı değilse (örneğin, 404 Not Found gibi bir durumda), fetch isteği başarısız olmuş demektir.
//     }

//       const userData = await response.json() // // API'den gelen veriyi json formatına dönüştürür.
//       setUsers([userData])// // Kullanıcıları bir dizi içinde saklayarak map fonksiyonunu kullanabiliriz.
      
//     }  catch (error) {
//         console.error(error.message)
//     }
//  }


//   return (
//     <div>
//         <h1>GitHub User Search</h1>
//        <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           placeholder="GitHub Username or E-mail" 
//           value={userInput} 
//           onChange={handleInputChange}
//         />
//         <button type="submit">Search</button>
//        </form>
     
//        { users.map((user) => (
//                 <div key={user.id}>
//                     <h2>{user.name}</h2>   
//                     <img src={user.avatar_url} alt={user.login} />
//                     <h4>{user.login}</h4>
//                     <a href={user.html_url}>{user.html_url}</a>
//                 </div>
//             ))}
//        </div>
//   )
// }
// export default UserSearch

