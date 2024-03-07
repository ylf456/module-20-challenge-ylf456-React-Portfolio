import FooterComponent from "./footerComponent";

export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <FooterComponent
      links={[
        <p key={1}> Github Profile: 
          <a href="https://github.com/ylf456" target="_blank">https://github.com/ylf456</a>
        </p>,
        <p key={2}>Linkedin: 
          <a href="https://www.linkedin.com/in/yilun-fan-270a0b234/" target="_blank">https://www.linkedin.com/in/yilun-fan-270a0b234/</a>
        </p>,
        <p key={3}> Third link placeholder
        <a href="" target="_blank">link</a>
      </p>,
      ]}
    />
  );
}
