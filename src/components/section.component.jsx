const Section = ({path, children, ...otherprops}) => {
  return (
      <section {...otherprops} style={{
          background: `url(${path})`,
          width: '100%',
          height: '100vh',
          relative: true,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
      }}>
            {children}
    </section>
  );
}

export default Section;