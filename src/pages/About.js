import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";
import posts from "./posts.json";

function About() {
  const imgSrc =
    "https://media.licdn.com/dms/image/C4E03AQFIY6uhcGpxUg/profile-displayphoto-shrink_400_400/0/1582079182490?e=1687996800&v=beta&t=2UXJejOawT38590jj1oHUEDeynRonS15L5C-_dV_DUk";

  return (
    <div>
      <AboutSection
        imgSrc={imgSrc}
        title="Vinícius Oliveira"
        description="Oi, me chamo Vinícius e tenho 27 anos. Nasci em Quixadá, CE e atualmente vivo em Belo Horizonte, MG."
      />
      <BlogSection posts={posts} key={Math.random()} />{" "}
    </div>
  );
}

export default About;
