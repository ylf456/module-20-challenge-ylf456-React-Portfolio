export default function PortfolioComponent({ content }) {
  return (
    <div className="body-content">
      <div className="container mt-2">
        <div className="row row-cols-2 row-cols-lg-3 ">
          {content.map((contents) => contents)}
        </div>
      </div>
    </div>
  );
}
