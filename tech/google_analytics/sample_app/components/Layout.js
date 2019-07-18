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

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-144094072-1"></script>
      <script dangerouslySetInnerHTML={{ __html:
`window.dataLayer = window.dataLayer || []
function gtag () { dataLayer.push(arguments) }
gtag('js', new Date())
gtag('config', 'UA-144094072-1')`
      }}>
      </script>
    </div>
  )
}

export default Layout
