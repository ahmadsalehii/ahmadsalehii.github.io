function Section({ children, classList, id = " " }) {
  return (
    <section id={id} className={classList}>
      {children}
    </section>
  );
}

export default Section;
