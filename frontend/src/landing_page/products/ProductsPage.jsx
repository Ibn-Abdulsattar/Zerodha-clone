import Hero from "./Hero";
import LeftCorner from "./LeftCorner";
import RightCorner from "./RightCorner";
import Universe from "./Universe";
import console from "../../assets/image/console.png";
import coin from "../../assets/image/coin.png";
import kite from "../../assets/image/kite.png";
import kiteconnect from "../../assets/image/kiteconnect.png";
import varsity from "../../assets/image/varsity.png";
import google from "../../assets/image/google.svg";
import app from "../../assets/image/app.svg";
import { Link } from "@mui/material";

export default function ProductsPage() {
  const products = [
    {
      title: "Kite",
      description:
        "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
    },
    {
      title: "Console",
      description:
        "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
    },
    {
      title: "Coin",
      description:
        "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
    },
    {
      title: "Kite Connect API",
      description:
        "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
    },
    {
      title: "Varsity mobile",
      description:
        "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
    },
  ];

  const stack = (
  <>
    Want to know more about our technology stack? Check out the{' '}
    <Link href="" sx={{ textDecoration: 'none' }}>
      Zerodha.tech
    </Link>{' '}
    blog.
  </>
);

  return (
    <>
      <Hero />
      <LeftCorner
        img={kite}
        link={`${import.meta.env.VITE_Dashboard_Url}/orders`}
        title={products[0].title}
        description={products[0].description}
        Try={"Try demo"}
        learn={"Learn more"}
        google = {google}
        app = {app}
      />
      <RightCorner
        img={console}
        link={`${import.meta.env.VITE_Dashboard_Url}/holdings`}
        title={products[1].title}
        description={products[1].description}
        Try={"Learn more"}
        learn={""}
        google = {""}
        app = {app}
      />
      <LeftCorner
        img={coin}
        link={`${import.meta.env.VITE_Dashboard_Url}/positions`}
        title={products[2].title}
        description={products[2].description}
        Try={"Coin"}
        learn={"Learn more"}
        google = {google}
        app = {app}
      />
      <RightCorner
        img={kiteconnect}
        link={`${import.meta.env.VITE_Dashboard_Url}/funds`}
        title={products[3].title}
        description={products[3].description}
        Try={"Kite Connect"}
        learn={""}
        google = {""}
        app = {app}
      />
      <LeftCorner
        img={varsity}
        link={`${import.meta.env.VITE_Dashboard_Url}/apps`}
        title={products[4].title}
        description={products[4].description}
        Try={"Try demo"}
        learn={"Learn more"}
        google = {google}
        app = {app}
        stack={stack}
      />
      <Universe />
    </>
  );
}
