const styles = {
  container: {
    maxWidth: "50%",
    marginTop: "4%",
    marginLeft:"13%"
  },
  image: {
    marginLeft:"4%",
    marginTop:"6%",
    height:"30%",
    maxWidth:"30%"
  },
  pElFont: {
    textIndent: "3%",
    fontSize: "20px",
  },
};

export default function AboutMePage() {
  return (
    <div className="body-content" id="aboutme-content" >
      <img
        style={styles.image}
        src="/assets/images/avatar_placeholder.png" alt="A recent photo of Yilun Fan"
      ></img>
      <div className="container" style={styles.container}>
        <h1 className="mb-4">AboutMe</h1>
        <p style={styles.pElFont}>
          "Yilun Fan, a Biochemistry graduate from the University of California,
          San Diego, earned his Bachelor's degree in 2021. Currently based in
          Alhambra, CA 91801. He brings experience as an Analyst in the
          Chemistry Lab at UCSD and two years of managing restaurant & catering
          services. Yilun has honed strong analytical and independent
          problem-solving skills and excels in interpersonal communication and
          teamwork."
        </p>
      </div>
    </div>
  );
}
