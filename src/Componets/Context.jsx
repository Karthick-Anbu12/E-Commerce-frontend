import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
const context = createContext()


export const UserProvider = ({ children }) => {
  const [isLoggedIn, setLoggedin] = useState(true);
  const [cart, setcart] = useState([])
  const [total, settotal] = useState(0)
  const [datas, setdatas] = useState([])
  const [user, setuser] = useState({})
  const [product, setproduct] = useState([])
  const [search, setsearch] = useState("")

  const getdata = async () => {
    const product = await axios.get("http://localhost:3000/products")
    setdatas(product.data)
  }
  const methodSearch = () => {
    if (search === "") {
      return setproduct([])
    }
    const filterbysearch = datas.filter((item) => {
      if (item.name.toLowerCase().includes(search.toLowerCase())) {
        return item
      }
    })
    setproduct(filterbysearch)
    console.log(product)
  }
  const additem = async (data) => {
    try {
      await axios.post("http://localhost:3000/addtocart", data, {
        headers: {
          Authorization: window.localStorage.getItem("mytoken")
        }
      })
      setcart([...cart, data])
      settotal(total + data.price)
    } catch (error) {
      console.log("Someting went wrong")
    }
  }
  const removeitem = async (index) => {
    if(cart.length==0||total<0)
     {
      
      cart.splice(index, 1)
      setcart([...cart])
      settotal(0)
      try {
        await axios.post("http://localhost:3000/removefromcart", cart, {
          headers: {
            Authorization: window.localStorage.getItem("mytoken")
          }
        })
      } catch (error) {
        console.log("Someting went wrong")
      } 
     
     }
     else{
    settotal(total - cart[index].price)
    cart.splice(index, 1)
    setcart([...cart])
    try {
      await axios.post("http://localhost:3000/removefromcart", cart, {
        headers: {
          Authorization: window.localStorage.getItem("mytoken")
        }
      })
    } catch (error) {
      console.log("Someting went wrong")
    }
  }
  }
  const getuser = async () => {
    const users = await axios.get("http://localhost:3000/user-info", {
      headers: {
        Authorization: window.localStorage.getItem("mytoken")
      }
    })
    setuser(users.data)
    setcart(users.data.cart)
    settotal(users.data.total)
    console.log(total)
  }
  useEffect(() => {
    getuser()
    getdata()
  }, [])
  return <context.Provider value={{ datas, cart, setcart,additem, removeitem, getuser, getdata, total, user, product, methodSearch, setsearch, isLoggedIn, setLoggedin }}>
    {children}
  </context.Provider>
}
export default context