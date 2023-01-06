import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    { name: 'Laptop', price: 130000 },
    { name: 'Phone', price: 100000 },
    { name: 'Tablet', price: 30000 },
    { name: 'Watch', price: 15000 }
  ];
  return (
    <div className="App">
      {/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      } */}
      {/* <Product name='Laptop' price="50000"></Product>
      <Product name='Phone' price="90000"></Product>
      <Product name='Watch' price="3500"></Product> */}

      {/* <Counter></Counter> */}

      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(22);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  // console.log(users);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h1>External Users:</h1>
      <p>{users.length}</p>
      {
        users.map(user => <Users name={user.name} email={user.email} city={user.address.city}></Users>)
      }
    </div>
  );
}

function Users(props) {
  return (
    <div style={{ border: '2px solid maroon', backgroundColor: 'lightpink', borderRadius: '10px', margin: '15px' }}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

export default App;
