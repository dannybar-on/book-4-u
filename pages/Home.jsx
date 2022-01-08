const { Link } = ReactRouterDOM;

export function Home() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <h2>Welcome To Book4U</h2>
      <Link to="/books">Explore</Link>
    </section>
  );
}
