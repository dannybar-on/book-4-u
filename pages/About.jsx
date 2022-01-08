const { NavLink, Route } = ReactRouterDOM;

function Team() {
  return (
    <ul>
      <li>Puki ben david</li>
      <li>Shraga ben david</li>
      <li>Muki ben david</li>
    </ul>
  );
}

function Vision() {
  return (
    <div>
      <span>Our vision:</span>
      <ul>
        <li>Selling the best books</li>
        <li>Eat - Read - Sleep</li>
      </ul>
    </div>
  );
}

export function About() {
  return (
    <section className="about">
      <h1>We're all about Books...</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio omnis,
        dolor ea consequatur autem quo fuga dolore! Doloribus unde ratione
        laudantium cumque laborum explicabo amet id a incidunt, illum, odio
        saepe alias modi optio quia tempore. Sit nihil dicta obcaecati?
      </p>
      <NavLink activeClassName="my-active" to="/about/team">
        My Team
      </NavLink>
      <NavLink activeClassName="my-active" to="/about/vision">
        Our vision
      </NavLink>
      <Route component={Team} path="/about/team" />
      <Route component={Vision} path="/about/vision" />
    </section>
  );
}
