import { CartContext } from "@/components/CartContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function CartPage() {
    const {cartProducts, addProduct, removeProduct, clearCart} = useContext(CartContext)
    const [products,setProducts] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [country, setCountry] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)
    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', {ids:cartProducts})
                .then(response => {setProducts(response.data)})
        } else {
            setProducts([])
        }
    }, [cartProducts])
    useEffect(() => {
        if (typeof window === 'undefined') {
            return
        }
        if (window.location.href.includes('success')) {
            setIsSuccess(true)
            clearCart()
        }
    },[])
    function moreOfThisProduct(id) {
        addProduct(id)
    }
    function lessOfThisProduct(id) {
        removeProduct(id)
    }
    async function goToPayment() {
        const response = await axios.post('/api/checkout', {
            name, email, city, postalCode, streetAddress, country,
            cartProducts,
        })
        if (response.data.url) {
            window.location = response.data.url;
        }
    }
    let total = 0;
    for (const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0;
        total += price
    }

    if (isSuccess) {
        return (
            <>
                <Header />
                <h1>Thanks for your order!</h1>
                <p>We will email you when your order will be sent.</p>
                <Footer />
            </>
        )
    }

    return (
        <div>
            <Header />
            <div className="grid sm:grid-cols-1 xl:grid-cols-2 gap-10 w-9/12 mx-auto mt-20">
                <div className="mb-10">
                    {!cartProducts?.length && (
                        <div>Cart is empty</div>
                    )}
                    <table className="text-lg shadow-lg table-style sm:m-auto bg-white">
                        <thead>
                            <tr>
                                <th className="table-item pt-5">Product</th>
                                <th className="table-item pt-5">Quantity</th>
                                <th className="table-item pt-5">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cartProducts?.length > 0 && (
                                products.map(product => (
                                    <tr className="text-center" key={product._id}>
                                        <td className="table-item">{product.title}</td>
                                        <td className="flex justify-center table-item">
                                            <button className="btn-secondary" onClick={() => lessOfThisProduct(product._id)}>-</button>
                                            <p className="mx-2">{cartProducts.filter(id => id === product._id).length}</p>
                                            <button className="btn-secondary" onClick={() => moreOfThisProduct(product._id)}>+</button>
                                        </td>
                                        <td className="table-item">£{cartProducts.filter(id => id === product._id).length * product.price}</td>
                                    </tr>
                                ))
                        )}
                        <tr className="text-center">
                            <td></td>
                            <td></td>
                            <td className="font-bold pb-5">£{total}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="mb-10">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={name} 
                        name="name"
                        onChange={ev => setName(ev.target.value)} 
                        className="input"
                    />
                    <input 
                        type="text" 
                        placeholder="Email" 
                        value={email} 
                        name="email"
                        onChange={ev => setEmail(ev.target.value)} 
                        className="input"
                    />
                    <input 
                        type="text" 
                        placeholder="City" 
                        value={city} 
                        name="city"
                        onChange={ev => setCity(ev.target.value)} 
                        className="input"
                    />
                    <input 
                        type="text" 
                        placeholder="Postal Code" 
                        value={postalCode} 
                        name="postalCode"
                        onChange={ev => setPostalCode(ev.target.value)} 
                        className="input"
                    />
                    <input 
                        type="text" 
                        placeholder="Street Address" 
                        value={streetAddress} 
                        name="streetAddress"
                        onChange={ev => setStreetAddress(ev.target.value)} 
                        className="input"
                    />
                    <input 
                        type="text" 
                        placeholder="Country" 
                        value={country} 
                        name="country"
                        onChange={ev => setCountry(ev.target.value)}
                        className="input"
                    />
                    <button onClick={goToPayment} className="btn-primary">Continue to payment</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}