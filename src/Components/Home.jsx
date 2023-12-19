import Landing from "./InsideHome/Landing";
import PopularProducts from "./InsideHome/PopularProducts";
import Team from "./InsideHome/Team";
import Why from "./InsideHome/Why";
import Popular from "./InsideHome/popularImages";
import ScrollBtn from "./ScrollBtn";

export default function Home() {
  return (
    <>
      <ScrollBtn />
      <Landing />
      <Popular />
      <PopularProducts />
      <Why />
      <Team />
    </>
  );
}
