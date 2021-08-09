import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import ImageList from "@material-ui/core/ImageList";
// import ImageListItem from "@material-ui/core/ImageListItem";
// import ImageListItemBar from "@material-ui/core/ImageListItemBar";
// import IconButton from "@material-ui/core/IconButton";
// import { DialogTitle, Grid } from "@material-ui/core";
import gold from "../Main/VideoTutorial/gold.svg";
import "./Offers.css";

// const itemData = [
//   {
//     title: "2x2 images",
//     img: ["/images/amazon-pay-giftcard.jpg", "/images/saregama.jpeg"],
//     featured: true,
//   },
//   {
//     title: "1x1 images",
//     img: ["/images/dominos.png", "/images/dominos.png", "/images/dominos.png"],
//     featured: false,
//   },
// ];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper,
//   },
//   imageList: {
//     transform: "translateZ(0)",
//   },
//   titleBar: {
//     background:
//       "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
//       "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
//   },
//   icon: {
//     color: "white",
//   },
// }));

export default function OffersComponent() {
  return (
    <div className="main-container">
      <div>
        <div className="coinsqtybox pb-2">
          {/* 
          TODO: create component to show coins and diamond, so it can be used everywhere
          <div> Freedom Coins </div> */}
          <img src={gold} className="coinsimg" alt="coin_img" />
          <h6 className="coinsqty">20</h6>
        </div>
      </div>

      <h5 className="section-header"> Assured mystery rewards</h5>
      <div className="box-container">
        <img
          className="bigImages"
          src="/images/offers/amazon-pay-giftcard.jpg"
          alt="test"
        />
        <img className="smallImages" src="/images/offers/boat.jpg" alt="test" />
        <img
          className="smallImages"
          src="/images/offers/audible.jpg"
          alt="test"
        />
        <img
          className="smallImages"
          src="/images/offers/myntra.jpg"
          alt="test"
        />
        <img className="smallImages" src="/images/offers/ajio.jpg" alt="test" />
      </div>

      <h5 className="section-header"> Only till mid night</h5>
      <div className="box-container">
        <img
          className="bigImages"
          src="/images/offers/saregama.jpeg"
          alt="test"
        />
        <img
          className="bigImages"
          src="/images/offers/watch_offer.jpeg"
          alt="test"
        />
        <img
          className="smallImages"
          src="/images/offers/skin-sci.jpeg"
          alt="test"
        />
        <img
          className="smallImages"
          src="/images/offers/coolwink.jpg"
          alt="test"
        />
        <img
          className="smallImages"
          src="/images/offers/bewakoof.jpg"
          alt="test"
        />
        <img
          className="smallImages"
          src="/images/offers/zomato.jpg"
          alt="test"
        />
      </div>
    </div>
  );

  //   const classes = useStyles();
  //   return (
  //     <div className={classes.root}>
  //       <ImageList gap={1} className={classes.imageList}>
  //         {itemData.map((item) => (
  //           <React.Fragment>
  //             {item.title} <br />
  //             {item.img.map((image) => (
  //               <ImageListItem
  //                 key={image}
  //                 cols={item.featured ? 2 : 1}
  //                 rows={item.featured ? 2 : 1}
  //               >
  //                 <img src={image} alt={item.title} />
  //               </ImageListItem>
  //             ))}
  //           </React.Fragment>
  //         ))}
  //       </ImageList>
  //     </div>
  //   );
}
