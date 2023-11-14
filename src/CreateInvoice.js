import React, { useState } from "react";
import axios from "axios";
import { Form,Button } from "react-bootstrap";
import {toast} from 'react-toastify';

const CreateInvoice = () => {
  const [form, setForm] = useState({
    amount: 0,
    email: "",
    deadline: "",
    paid: false,
  });
const initial={
    amount: 0,
    email: "",
    deadline: "",
    paid: false,
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log('trying')
      // Assuming your backend API is running at http://localhost:your-port
      await axios.post("http://localhost:4000/api/v1/invoice/create", form);
      toast.success("Invoice created successfully!");
      setForm(initial)
      // You can redirect or perform additional actions after successful creation
    } catch (error) {
      toast.error("Error creating invoice:", error);
    }
  };
  return (
    <div>
      <h1>Create Invoice</h1>
      <Form onSubmit={handleSubmit} style={{position:'relative',width:'50vw',left:'25vw'}}>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="amount">
          <Form.Label>Amount:</Form.Label>
          <Form.Control
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="deadline">
          <Form.Label>Deadline:</Form.Label>
          <Form.Control
            type="date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="paid">
          <Form.Check
            type="checkbox"
            label="Paid"
            checked={form.paid}
            onChange={() =>
              setForm((prevForm) => ({
                ...prevForm,
                paid: !prevForm.paid,
              }))
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Invoice
        </Button>
      </Form>
    </div>
  );
};

export default CreateInvoice;
