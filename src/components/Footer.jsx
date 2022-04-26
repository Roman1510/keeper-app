function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>made by Roman Vinnick</p>
    </footer>
  )
}

export default Footer
