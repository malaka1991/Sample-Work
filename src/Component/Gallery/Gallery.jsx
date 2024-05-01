import React from 'react';
import image01 from "../images/looking at phone 1.png";
import image02 from "../images/pexels-ketut-subiyanto-4669950 1.png";
import image03 from "../images/sitting in grass 1.png";
import image04 from "../images/Hands folder 3.png";
import image05 from "../images/Hands folder 2.png";
import image06 from "../images/Banner pic no logo 1.png";
import image07 from "../images/Michael Diiorio Life Coach, Wellismo Coaching 2.png";
import image08 from "../images/Red Shirt Door 1.png";
import image09 from "../images/unsplash_x2Tmfd1-SgA.png";


export default function Gallery() {
  return (
    <div class="p-5 md:p-10">
    <div class="columns-2 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
      <img src={image02} alt="" />
      <img src={image03} alt="" />
      <img src={image04} alt="" />
      <img src={image05} alt="" />
      <img src={image03} alt="" />
      <img src={image06} alt="" />
      <img src={image07} alt="" />
      <img src={image08} alt="" />
      <img src={image09} alt="" />
    </div>
  </div>
  )
}
