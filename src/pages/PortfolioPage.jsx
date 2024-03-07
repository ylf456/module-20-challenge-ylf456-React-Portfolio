import Card from "./components/portfolioComponent";

export default function Portfolio() {
  return (
    <Card
      content={[
        <div key={1} className="col text-center border border-primary p-3 ">
          <p>first project</p>
          <a href="" target="_blank">
            <img src="/assets/images/placeholderImage.png"></img>
          </a>
        </div>,
        <div key={2} className="col text-center border border-primary p-3">
          <p>second project</p>
          <a href="" target="_blank">
            <img src="/assets/images/placeholderImage.png"></img>
          </a>
        </div>,
        <div key={3} className="col text-center border border-primary p-3">
          <p>third project</p>
          <a href="" target="_blank">
            <img src="/assets/images/placeholderImage.png"></img>
          </a>
        </div>,
        <div key={4} className="col text-center border border-primary p-3">
          <p>fourth project</p>
          <a href="" target="_blank">
            <img src="/assets/images/placeholderImage.png"></img>
          </a>
        </div>,
        <div key={5} className="col text-center border border-primary p-3">
          <p>fifth project</p>
          <a href="" target="_blank">
            <img src="/assets/images/placeholderImage.png"></img>
          </a>
        </div>,
        <div key={6} className="col text-center border border-primary p-3">
          <p>sixth project</p>
          <a href="" target="_blank">
            <img src="/assets/images/placeholderImage.png"></img>
          </a>
        </div>,
      ]}
    />
  );
}
