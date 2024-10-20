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
    const product = await axios.get("https://e-commerce-back-end-avek.onrender.com/products")
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

  }
  const additem = async (data) => {
    if (!isLoggedIn) {
      alert("Login to add to cart")
    }
    try {
      await axios.post("https://e-commerce-back-end-avek.onrender.com/addtocart",data, {
        headers: {
          Authorization: window.localStorage.getItem("mytoken")
        }
      })
      setcart([...cart, data])
     settotal((prevTotal) => prevTotal + data.price);
     const currentTotal = total + data.price;
     await axios.post("https://e-commerce-back-end-avek.onrender.com/total",{ total: currentTotal }, {
      headers: {
        Authorization: window.localStorage.getItem("mytoken")
      }
    })
      
    } catch (error) {
      console.log("Someting went wrong")
    }
  }
  const removeitem = async (index) => {
    settotal((prevTotal) => prevTotal - cart[index].price);
    const currentTotal = total - cart[index].price;
    cart.splice(index, 1)
    setcart([...cart])
    if (cart.length == 0 || total <= 0) {
      settotal(0)
    }
    try {
      await axios.post("https://e-commerce-back-end-avek.onrender.com/removefromcart", cart, {
        headers: {
          Authorization: window.localStorage.getItem("mytoken")
        }
      })
      await axios.post("https://e-commerce-back-end-avek.onrender.com/total",{ total:currentTotal}, {
        headers: {
          Authorization: window.localStorage.getItem("mytoken")
        }
      })
    } catch (error) {
      console.log("Someting went wrong")
    }
  }

  const getuser = async () => {
    const users = await axios.get("https://e-commerce-back-end-avek.onrender.com/user-info", {
      headers: {
        Authorization: window.localStorage.getItem("mytoken")
      }
    })
    setuser(users.data)
    setcart(users.data.cart)
    settotal(users.data.total)
  }
  useEffect(() => {
    getuser()
    getdata()
  }, [])
  const checkout = async () => {
    if (total <= 0) {
      alert("Empty Cart")
    }
    else {
      var options = {
        key: "rzp_test_ZoI3UVvPWE6pB2",
        key_secret: "LduvQqrKFIj1k7QcWINmXf8Y",
        amount: total * 100,
        currency: "INR",
        name: "Shop Sphere",
        description: "Test Transaction",
        handler: async function (response) {
          if (response.razorpay_payment_id) {
            alert("Order Placed")
            setcart([])
          settotal(0)
            await axios.post("https://e-commerce-back-end-avek.onrender.com/after-checkout", cart, {
              headers: {
                Authorization: window.localStorage.getItem("mytoken")
              }
            })
            await axios.post("https://e-commerce-back-end-avek.onrender.com/cart-total", { total }, {
              headers: {
                Authorization: window.localStorage.getItem("mytoken")
              }
            })
          }
        },
        prefill: {
          name: user.username,
          email: user.email,
          contact: user.number,
        },
      };
      var pay = new window.Razorpay(options)
      pay.open();
    }
  }
  return <context.Provider value={{ datas, cart, checkout, setcart, additem, removeitem, getuser, getdata, total, user, product, methodSearch, setsearch, isLoggedIn, setLoggedin }}>
    {children}
  </context.Provider>
}
export default context