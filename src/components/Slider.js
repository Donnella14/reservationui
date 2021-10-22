import React from "react";

import image1 from "../assets/q1.jpg";
import image2 from "../assets/q2.jpg";

import image3 from "../assets/q3.jpg";


function Slider(){

    return(

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img  src={image3} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5 style={{ color: "#422510" }}>Our 100% success rate in getting couples married.</h5>
              <p style={{ color: "#422510" }}>Our belief that marriage should be a right enjoyed by everyone became more passionate with each passing day.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={image1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5 style={{ color: "#422510" }}>That launched a series of events.</h5>
              <p style={{ color: "#422510" }}>We were so inspired by this happy ending that we decided to create a company that could help couples getting married despite local laws against such unions.</p>
            </div>
          </div>
      
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5 style={{ color: "#422510" }}>We Know From Personal Experience
How Hard It Can Be To Get Married.

So We Make It As Easy As Possible!</h5>
              <p style={{ color: "#422510" }}>For some couples, getting married is not possible. We experienced this first hand when a family member was barred from getting married in her home country due to laws against gay marriage. It was heart-wrenching to see the anguish that she experienced as a result. After witnessing the pain and disappointment this had on our loved ones, we sought out to find a way to solve the issue.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default Slider;