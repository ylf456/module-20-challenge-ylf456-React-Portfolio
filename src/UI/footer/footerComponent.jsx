const styles ={
footerContainer:{
    display:'flex'
}
}

export default function FooterComponent({ links }) {
    return (
      <footer className="bg-dark text-light text-center py-0.5 text-lg">
        <div className="container">
          <div>
            <ul>
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </footer>
    );
  }