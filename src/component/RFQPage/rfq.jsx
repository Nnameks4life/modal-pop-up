import React from 'react'

export default function Rfq() {
    const [rfqDetail, setRfqDetail] = useState({
        product: "",
        description: "",
        quantity: "",
        unit: "",
        price: "",
        port: "",
        tradeTerms: "",
        paymentTerms: "",
        fullname:"",
       email: "",
       phoneNumber: ""
      });

      const handleChange = (e) => {
        setRfqDetail({ ...rfqDetail, [e.target.name]: [e.target.value] });
      };
  return (
    <div>
        <h2>Enter Product Specifications</h2>
        <p>Fill in desired product specification below, so our sourcing agents can get you your specific needs. Please note that all fields are required.</p>
        <form>
            
        </form>
    </div>
  )
}
