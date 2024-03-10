import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">THE COOK BOOK</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>

      <div className="post">
        <div className="image">
          <img src="https://i.pinimg.com/564x/66/69/aa/6669aa09bc7baabaf050f80c86416806.jpg"></img>
        </div>
        <div className="texts">
          <h2>Easy Saucy Ramen Noodles</h2>
          <p className="info">
            <a className="author">Queen of Spades</a>
            <time>2024-03-08 14:49</time>
          </p>
          <p className="summary">Here's an easy saucy ramen noodles recipe with a thick and flavourful sauce! You can also add in whatever veggies of your choice or even some tofu and mushrooms!The sauce is really versatile so you can opt to even use it for stir-fries. Slurp away and enjoy!</p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img src="https://i.pinimg.com/564x/66/69/aa/6669aa09bc7baabaf050f80c86416806.jpg"></img>
        </div>
        <div classname="texts">
          <h2>Easy Saucy Ramen Noodles</h2>
          <p className="info">
            <a className="author">Queen of Clubs</a>
            <time>2024-03-08 14:50</time>
          </p>
          <p className="summary">Here's an easy saucy ramen noodles recipe with a thick and flavourful sauce! You can also add in whatever veggies of your choice or even some tofu and mushrooms!The sauce is really versatile so you can opt to even use it for stir-fries. Slurp away and enjoy!</p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img src="https://i.pinimg.com/564x/66/69/aa/6669aa09bc7baabaf050f80c86416806.jpg"></img>
        </div>
        <div className="texts">
          <h2>Easy Saucy Ramen Noodles</h2>
          <p className="info">
            <a className="author">Queen of Hearts</a>
            <time>2024-03-08 14:51</time>
          </p>
          <p className="summary">Here's an easy saucy ramen noodles recipe with a thick and flavourful sauce! You can also add in whatever veggies of your choice or even some tofu and mushrooms!The sauce is really versatile so you can opt to even use it for stir-fries. Slurp away and enjoy!</p>
        </div>
      </div>
    </main>
  );
}

export default App;
