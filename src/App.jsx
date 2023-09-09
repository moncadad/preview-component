import "./App.sass";

function App() {
  const cars = [
    {
      id: 1,
      icon: "sedans.svg",
      type: "SEDAN",
      details:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the cirt or on your next road trip.",
    },
    {
      id: 2,
      icon: "suvs.svg",
      type: "SUVS",
      details:
        "Take an SUV r its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures",
    },
    {
      id: 3,
      icon: "luxury.svg",
      type: "LUXURY",
      details:
        "cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxurt rental and arrive in style.",
    },
  ];

  const carsElement = cars.map((car) => {
    return (
      <section className="section" key={car.id}>
        <img
          className="icon"
          src={`/images/icon-${car.icon}`}
          alt={`${car.type} Icon`}
        />
        <h1>{car.type}</h1>
        <p>{car.details}</p>
        <button className="btn">Learn More</button>
      </section>
    );
  });

  return (
    <div className="wrapper">
      <main className="main">{carsElement}</main>
    </div>
  );
}

export default App;
