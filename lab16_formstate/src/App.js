import './App.css';
import { useState } from 'react';

function App() {
  // OPEN AND CLOSE BUTTON
  const [isOpen, setIsOpen] = useState(false)

  // Function to toggle the isOpen state
  const openreadmore = function(){
    setIsOpen(!isOpen)
  }

  // setState for 'form'
  const[inputs, setInputs] = useState({})

  // Function to capture input username
  const capturename = function(e){
    setName(e.target.value)
  }

  // Function to submit the form
  const submitform = function(e){
    e.preventDefault()
    alert(`Welcome to React Form ${inputs.username} \nYour
      age is ${inputs.age}`)
  }

  //Function to collect all values in the form
  const handlechange = function(e){
    const name = e.target.name
    const value = e.target.value
    setInputs(values => ({...values, [name]:value}))
  }
  return (
    <div className="App">
      <h1>John Maxime Aritmetica </h1>
      <div className='info'>
        <p><b>Cat (Felis cactus)</b>, commonly reffered to as the domestic cat or house cat</p>
        <button className='readmorebtn' onClick={openreadmore}>{isOpen ?  "Hide" : "Read More"}</button>
      </div>
      <section>
        {
          isOpen &&
          <div className='readmore'>
          <p>Cats are independent and curious creatures, known for their graceful movements and playful antics. With their soft fur, sharp instincts, and mesmerizing eyes, they bring comfort and companionship to millions of homes. Whether napping in a sunny spot or chasing a toy, cats effortlessly balance elegance and charm. </p>
          </div>
        }
      </section>

      <form onSubmit={submitform}>
        <fieldset>
          <legend> User Information </legend>
            <label for="username">Enter a name: </label>
            <input
            type='text'
            id='username'
            name='username'
            placeholder='Type Your name...'
            value={inputs.username}
            onChange={handlechange}
            />
            <label for="age">Enter an age: </label>
            <input
              type='number'
              name='age'
              id='age'
              value={inputs.age}
              onChange={handlechange}
             
               />

          {/** Submit Button */}
          <div>
            <input type='submit'/>
          </div>
        </fieldset>
      </form>

    </div>
  );
}

export default App;
