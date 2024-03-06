const styles ={
footerContainer:{
    display:'flex'
}
}

export default function FooterComponent({ links }) {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="row" id="">
            <ul className="">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </footer>
    );
  }