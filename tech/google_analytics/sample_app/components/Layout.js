function Layout (props) {
  return (
    <div>
      <h1>Super Courses</h1>

      {props.children}

      <style jsx global>{`
          body {
            max-width: 38rem;
            padding: 2rem;
            margin: auto;
          }
        `}</style>
    </div>
  )
}

export default Layout
