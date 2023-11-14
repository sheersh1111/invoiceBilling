import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { Button } from "react-bootstrap";

function Inovices({email}) {
  const [invoices, setInvoices] = useState([]);

  const history = useHistory();

  if(email===null){
    history.push('/login')
  }
console.log(invoices,email)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(`http://localhost:4000/api/v1/invoice/all?email=${email}`);
        setInvoices(data.invoices); // Assuming the response is an array of invoices
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [email]); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="container mt-4 bg-light">
      <Button variant="outline-primary" style={{position:'absolute',right:'9vw',top:'5vh'}}
      onClick={()=>{
        history.push('/create')
      }}
      >Create New Invoice</Button>
      <h1 className="mb-4 text-primary">Invoices</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Deadline</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices?.map((invoice) => (
            <tr key={invoice.id}>
              <td>{new Date(invoice.deadline).toLocaleDateString()}</td>
              <td>Rs.{invoice.amount.toFixed(2)}</td>
              <td>
              <span className={`badge bg-${invoice.paid ? "success" : "danger"}`}>
  {invoice.paid ? "Paid" : "Unpaid"}
</span>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button onClick={()=>{
        axios.get(`http://localhost:4000/api/v1/getEmail?email=${email}`)
      }}>
        Get Details on Mail
      </Button>
    </div>
  );
}

export default Inovices;