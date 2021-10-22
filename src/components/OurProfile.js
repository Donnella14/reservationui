import React from "react";
import "./index.css";
import { Card, Col, Row, Title, Subtitle, Body, Space } from "antd";
//import ReactPlayer from 'react-player/lazy'

import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import image from "../assets/how.jpg";
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const Programs = () => {


    return (

        <div>
            <Slider />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">OUR WEBSITE</h3>
                            <div className="underline mx-auto">

                                <p className="text-sm-start para">

                                    <h5 class="card-title" style={{ color: "#422510" }}> MarryFromHome</h5>
                                    Helps couples get legally married from the comfort of their own home, wherever they are in the world.
                                    With an online wedding ceremony hosted on Zoom, couples can enjoy an officiated marriage from the US government, regardless of their nationality, sexuality or physical location. Couples then receive a hard-copy of their US marriage certificate which can then be used as a legal document to prove their married status.
                                </p>

                                <Link to="/" className="btn  shadow active now" style={{ backgroundColor: "#25A582" }}>Apply Now</Link>
                                <Link to="/about" className="btn  shadow more">Learn More</Link>

                            </div>
                        </div>
                    </div>

                </div>

            </section>


            <section className="section1" style={{ backgroundColor: "#20c997", height: "700px", marginTop: "300px", position: "relative", display: "block" }} >
                <div className="container" style={{ marginTop: "-180px" }}>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">YOUR LOVE KNOWS NO BOUNDS. NOW YOUR MARRIAGE CAN TOO.</h3>
                            <div className="underline1 mx-auto">

                                <div class="row row-cols-1 row-cols-md-3 g-4" style={{ paddingTop: "50px" }}>
                                    <div class="col">
                                        <div class="card h-100" style={{ height: "50px", width: "300px", marginLeft: "-400px" }}>

                                            <div class="card-body" >

                                                <p class="text-sm-start">
                                                    <svg width="73" height="60" viewBox="0 0 30 75" fill="none">
                                                        <path d="M18.4035 25.5132L11.6263 21.1144C11.2174 20.8211 11.0421 20.2933 11.2174 19.8241L13.2038 14.4282C13.3791 14.0176 13.7296 13.7244 14.197 13.7244H28.7446C29.2119 13.7244 29.5625 14.0176 29.7378 14.4282L31.7242 19.8241C31.8994 20.2933 31.7242 20.8211 31.3152 21.1144L24.538 25.5719C32.659 26.9795 38.7935 34.0763 38.7935 42.6393C38.7935 52.1994 31.0231 60 21.5 60C11.9769 60 4.20651 52.1994 4.20651 42.6393C4.20651 34.0763 10.341 26.9795 18.4035 25.5132ZM21.5 57.8299C29.8546 57.8299 36.6902 50.9678 36.6902 42.5807C36.6902 34.1936 29.8546 27.3314 21.5 27.3314C13.1454 27.3314 6.30977 34.1936 6.30977 42.5807C6.30977 51.0264 13.1454 57.8299 21.5 57.8299ZM21.5 16.0118L16.1834 19.1203H26.8166L21.5 16.0118ZM14.9565 15.8358L14.2554 17.7713L17.5856 15.8358H14.9565ZM27.985 15.8358H25.356L28.6861 17.7713L27.985 15.8358ZM27.2255 21.2317H15.8329L21.5584 24.9854L27.2255 21.2317Z" fill="#25A582"></path>
                                                        <path d="M21.5 30.1467C28.3356 30.1467 33.9443 35.7772 33.9443 42.6393C33.9443 49.5015 28.3356 55.132 21.5 55.132C14.6644 55.132 9.0557 49.5015 9.0557 42.6393C9.0557 35.7185 14.6644 30.1467 21.5 30.1467ZM21.5 52.9619C27.1671 52.9619 31.841 48.3285 31.841 42.5807C31.841 36.8915 27.2255 32.1995 21.5 32.1995C15.7745 32.1995 11.159 36.8329 11.159 42.5807C11.159 48.3285 15.8329 52.9619 21.5 52.9619Z" fill="#79ADA0"></path>
                                                        <path d="M21.5584 6.97947C20.9742 6.97947 20.5068 6.51026 20.5068 5.92375V1.05572C20.5068 0.469208 20.9742 0 21.5584 0C22.1427 0 22.6101 0.469208 22.6101 1.05572V5.92375C22.6101 6.51026 22.1427 6.97947 21.5584 6.97947Z" fill="#79ADA0"></path>
                                                        <path d="M36.0475 21.5835C36.0475 20.997 36.5149 20.5278 37.0992 20.5278H41.9484C42.5326 20.5278 43 20.997 43 21.5835C43 22.1701 42.5326 22.6393 41.9484 22.6393H37.0992C36.5149 22.6393 36.0475 22.1701 36.0475 21.5835Z" fill="#79ADA0"></path>
                                                        <path d="M1.05162 20.5278H5.90081C6.48505 20.5278 6.95244 20.997 6.95244 21.5835C6.95244 22.1701 6.48505 22.6393 5.90081 22.6393H1.05162C0.467383 22.6393 -5.72205e-06 22.1701 -5.72205e-06 21.5835C-5.72205e-06 20.997 0.467383 20.5278 1.05162 20.5278Z" fill="#79ADA0"></path>
                                                        <path d="M33.36 11.4369C33.1263 11.6715 32.8927 11.7302 32.6005 11.7302C32.3084 11.7302 32.0747 11.6129 31.841 11.4369C31.4321 11.0264 31.4321 10.3226 31.841 9.912L35.288 6.45159C35.697 6.04104 36.3981 6.04104 36.8071 6.45159C37.216 6.86215 37.216 7.56596 36.8071 7.97652L33.36 11.4369Z" fill="#79ADA0"></path>
                                                        <path d="M10.5747 11.7302C10.2826 11.7302 10.0489 11.6129 9.81521 11.4369L6.3682 7.97652C5.95924 7.56596 5.95924 6.86215 6.3682 6.45159C6.77717 6.04104 7.47826 6.04104 7.88723 6.45159L11.3342 9.912C11.7432 10.3226 11.7432 11.0264 11.3342 11.4369C11.1005 11.6715 10.8084 11.7302 10.5747 11.7302Z" fill="#79ADA0"></path>
                                                    </svg> <h5 class="card-title" style={{ color: "#422510", marginTop: "-50px", marginLeft: "80px" }}>Open to anyone, anywhere.</h5>

                                                    You don’t have to be a US citizen to get legally married in the US.</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card h-100" style={{ height: "50px", width: "300px", marginLeft: "-100px" }}>

                                            <div class="card-body">

                                                <p class="text-sm-start">
                                                    <svg width="43" height="60" viewBox="0 0 43 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21.4709 7.69679C22.0525 7.69679 22.5177 7.23032 22.5177 6.64723V1.04956C22.5177 0.466472 22.0525 0 21.4709 0C20.8894 0 20.4241 0.466472 20.4241 1.04956V6.64723C20.4241 7.23032 20.8894 7.69679 21.4709 7.69679Z" fill="#25A582"></path>
                                                        <path d="M16.295 8.51313C16.5276 8.74636 16.7603 8.80467 17.0511 8.80467C17.3418 8.80467 17.5745 8.68805 17.8071 8.51313C18.2142 8.10496 18.2142 7.40525 17.8071 6.99709L13.8525 3.03207C13.4454 2.62391 12.7475 2.62391 12.3404 3.03207C11.9333 3.44024 11.9333 4.13995 12.3404 4.54811L16.295 8.51313Z" fill="#25A582"></path>
                                                        <path d="M25.9489 8.80467C26.2397 8.80467 26.4723 8.68805 26.705 8.51313L30.6596 4.54811C31.0667 4.13995 31.0667 3.44024 30.6596 3.03207C30.2525 2.62391 29.5546 2.62391 29.1475 3.03207L25.1929 6.99709C24.7858 7.40525 24.7858 8.10496 25.1929 8.51313C25.3674 8.68805 25.6581 8.80467 25.9489 8.80467Z" fill="#25A582"></path>
                                                        <path d="M15.7135 25.1895C16.0043 25.1895 16.2369 25.0728 16.4695 24.8979C16.644 24.723 16.7603 24.4314 16.7603 24.1399C16.7603 23.8484 16.644 23.6151 16.4695 23.3819C16.2951 23.207 16.0043 23.0903 15.7135 23.0903C15.4227 23.0903 15.1901 23.207 14.9575 23.3819C14.783 23.5568 14.6667 23.8484 14.6667 24.1399C14.6667 24.4314 14.783 24.6647 14.9575 24.8979C15.1319 25.0728 15.4227 25.1895 15.7135 25.1895Z" fill="#25A582"></path>
                                                        <path d="M41.3603 56.035L35.6028 53.2945L33.8582 43.0904C35.2539 42.6239 36.4752 41.691 37.3475 40.4665C38.4525 38.9505 38.8596 37.0846 38.5106 35.2187L34.3816 11.312C34.2652 10.7289 33.7418 10.379 33.1603 10.4373L21.4709 12.4782L9.83971 10.4957C9.25815 10.379 8.73475 10.7872 8.61843 11.3703L4.48936 35.2187C3.84964 38.6589 5.94326 41.9825 9.14184 43.0904L7.39716 53.2945L1.58155 56.035C1.17446 56.2099 0.941837 56.6764 0.999993 57.1429C1.05815 57.6094 1.40709 57.9592 1.87233 58.0175L13.0964 59.9417C13.1546 59.9417 13.2128 59.9417 13.2709 59.9417C13.8525 59.9417 14.3177 59.4752 14.3177 58.8922C14.3177 58.6006 14.2014 58.3091 13.9688 58.0758L9.49078 53.6443L11.2355 43.4403C11.2936 43.4403 11.3518 43.4403 11.4099 43.4403C14.8411 43.4403 17.7489 40.9913 18.3305 37.6094L21.5291 19.0671L24.7277 37.6094C25.3092 40.9913 28.217 43.4403 31.6482 43.4403C31.7064 43.4403 31.7645 43.4403 31.8227 43.4403L33.5674 53.6443L29.0312 58.1341C28.6823 58.484 28.6241 58.9505 28.8567 59.3586C29.0312 59.7085 29.3801 59.9417 29.7872 59.9417C29.8454 59.9417 29.9035 59.9417 29.9617 59.9417L41.1858 58.0175C41.6511 57.9592 42 57.551 42.0582 57.1429C42 56.6764 41.7674 56.2099 41.3603 56.035ZM10.4794 12.7114L20.1333 14.4024L19.261 19.4169L9.60709 17.726L10.4794 12.7114ZM10.5376 41.2245C7.8624 40.758 6.05957 38.1924 6.52482 35.5685L9.25815 19.8251L18.9121 21.5161L16.1787 37.2595C15.7716 39.5919 13.7362 41.3411 11.3518 41.3411C11.1191 41.3411 10.8284 41.2828 10.5376 41.2245ZM10.1305 57.3178L5.53616 56.5015L8.09503 55.277L10.1305 57.3178ZM26.7631 37.2595L24.0298 21.5161L33.6837 19.8251L36.417 35.5685C36.6496 36.8513 36.3589 38.1341 35.6028 39.242C34.8468 40.2916 33.7418 41.0496 32.4624 41.2245C32.1716 41.2828 31.8808 41.2828 31.6482 41.2828C29.2057 41.3411 27.1702 39.5919 26.7631 37.2595ZM32.4624 12.7114L33.3347 17.726L23.6808 19.4169L22.8085 14.4024L32.4624 12.7114ZM32.8113 57.3178L34.8468 55.277L37.4057 56.5015L32.8113 57.3178Z" fill="#25A582"></path>
                                                        <path d="M26.9376 22.3324C26.6468 22.3324 26.4142 22.449 26.1816 22.6239C26.0071 22.7989 25.8908 23.0904 25.8908 23.382C25.8908 23.6735 26.0071 23.9067 26.1816 24.14C26.3561 24.3149 26.6468 24.4315 26.9376 24.4315C27.2284 24.4315 27.461 24.3149 27.6937 24.14C27.8681 23.9651 27.9844 23.6735 27.9844 23.382C27.9844 23.0904 27.8681 22.8572 27.6937 22.6239C27.461 22.449 27.1702 22.3324 26.9376 22.3324Z" fill="#25A582"></path>
                                                        <path d="M33.3348 24.14C33.5092 23.9651 33.6255 23.6735 33.6255 23.382C33.6255 23.0904 33.5092 22.8572 33.3348 22.6239C33.1603 22.449 32.8695 22.3324 32.5787 22.3324C32.2879 22.3324 32.0553 22.449 31.8227 22.6239C31.6482 22.7989 31.5319 23.0904 31.5319 23.382C31.5319 23.6735 31.6482 23.9067 31.8227 24.14C31.9972 24.3149 32.2879 24.4315 32.5787 24.4315C32.8695 24.4315 33.1603 24.3732 33.3348 24.14Z" fill="#25A582"></path>
                                                        <path d="M30.2525 26.239C29.9617 26.239 29.7291 26.3556 29.4965 26.5306C29.322 26.7055 29.2057 26.997 29.2057 27.2886C29.2057 27.5801 29.322 27.8134 29.4965 28.0466C29.6709 28.2215 29.9617 28.3381 30.2525 28.3381C30.5433 28.3381 30.7759 28.2215 31.0085 28.0466C31.183 27.8717 31.2993 27.5801 31.2993 27.2886C31.2993 26.997 31.183 26.7638 31.0085 26.5306C30.8341 26.3556 30.5433 26.239 30.2525 26.239Z" fill="#25A582"></path>
                                                        <path d="M10.3632 25.8892C10.0724 25.8892 9.83975 26.0058 9.60713 26.1807C9.43266 26.3556 9.31635 26.6472 9.31635 26.9387C9.31635 27.2303 9.43266 27.4635 9.60713 27.6967C9.78159 27.8717 10.0724 27.9883 10.3632 27.9883C10.6539 27.9883 10.8866 27.8717 11.1192 27.6967C11.2937 27.5218 11.41 27.2303 11.41 26.9387C11.41 26.6472 11.2937 26.4139 11.1192 26.1807C10.8866 26.0058 10.6539 25.8892 10.3632 25.8892Z" fill="#25A582"></path>
                                                        <path d="M15.4227 29.3878C15.4227 29.0963 15.3064 28.863 15.1319 28.6298C14.9575 28.4549 14.6667 28.3383 14.3759 28.3383C14.0851 28.3383 13.8525 28.4549 13.6199 28.6298C13.4454 28.8047 13.3291 29.0963 13.3291 29.3878C13.3291 29.6794 13.4454 29.9126 13.6199 30.1458C13.7943 30.3208 14.0851 30.4374 14.3759 30.4374C14.6667 30.4374 14.8993 30.3208 15.1319 30.1458C15.3064 29.9126 15.4227 29.6794 15.4227 29.3878Z" fill="#25A582"></path>
                                                    </svg> <h5 class="card-title" style={{ color: "#422510", marginTop: "-50px", marginLeft: "80px" }}>Have a full wedding event.</h5>

                                                    You can have a full wedding, including a reception lounge, a private host, a legal marriage ceremony, and later on games and interaction with your guests.</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card h-100" style={{ height: "50px", width: "300px", marginLeft: "200px" }}>

                                            <div class="card-body">

                                                <p class="text-sm-start">
                                                    <svg width="63" height="60" viewBox="0 0 76 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M27.9712 20.945C25.4388 20.945 23.4244 23.0279 23.4244 25.5159C23.4244 28.0617 25.4964 30.0868 27.9712 30.0868C30.446 30.0868 32.518 28.0038 32.518 25.5159C32.5755 23.0279 30.5036 20.945 27.9712 20.945ZM27.9712 28.0617C26.5899 28.0617 25.4964 26.9624 25.4964 25.5737C25.4964 24.1851 26.5899 23.0858 27.9712 23.0858C29.3525 23.0858 30.446 24.1851 30.446 25.5737C30.446 26.9624 29.3525 28.0617 27.9712 28.0617Z" fill="#25A582"></path>
                                                        <path d="M54.964 57.8592H51.2806V45.188C51.2806 44.783 51.0504 44.4359 50.705 44.2623L44.0288 41.1379V36.972C44.0288 36.567 43.7986 36.2199 43.4532 36.0463L37.0072 32.8062V22.1601C37.0072 21.9286 36.9496 21.6972 36.777 21.5236L29.0072 11.919V5.49662H31.0791C31.6547 5.49662 32.1151 5.03375 32.1151 4.45516C32.1151 3.87657 31.6547 3.41369 31.0791 3.41369H29.0072V1.04147C29.0072 0.462874 28.5468 0 27.9712 0C27.3957 0 26.9352 0.462874 26.9352 1.04147V3.41369H24.8633C24.2878 3.41369 23.8273 3.87657 23.8273 4.45516C23.8273 5.03375 24.2878 5.49662 24.8633 5.49662H26.9352V11.919L19.223 21.5236C19.0504 21.6972 18.9928 21.9286 18.9928 22.1601V32.7483L12.5468 35.9884C12.2014 36.162 11.9712 36.5092 11.9712 36.9142V41.08L5.29496 44.2623C4.94964 44.4359 4.71942 44.783 4.71942 45.188V57.8592H1.03597C0.460432 57.8592 0 58.3221 0 58.9007C0 59.4793 0.460432 59.9421 1.03597 59.9421H54.9065C55.482 59.9421 55.9424 59.4793 55.9424 58.9007C55.9424 58.3221 55.5396 57.8592 54.964 57.8592ZM49.2086 57.8592H44.0288V43.3944L49.2086 45.8245V57.8592ZM11.9712 57.8592H6.79137V45.8824L11.9712 43.4523V57.8592ZM25.4964 57.8592V48.3124C25.4964 47.676 26.5324 46.9817 27.9712 46.9817C29.4101 46.9817 30.446 47.676 30.446 48.3124V57.8592H25.4964ZM41.8993 57.8592H32.5755V48.3124C32.5755 46.4031 30.5611 44.8987 28.0288 44.8987C25.4964 44.8987 23.482 46.4031 23.482 48.3124V57.8592H14.0432V37.5506L20.4892 34.3105C20.8345 34.1369 21.0647 33.7898 21.0647 33.3848V22.5072L27.9712 13.9441L34.8777 22.5072V33.3848C34.8777 33.7898 35.1079 34.1369 35.4532 34.3105L41.8993 37.5506V57.8592Z" fill="#25A582"></path>
                                                    </svg> <h5 class="card-title" style={{ color: "#422510", marginTop: "-50px", marginLeft: "80px" }}>100% Legal and legitimate.</h5>

                                                    Every couple will receive a physical US marriage certificate in the mail, stamped by the US government.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="row row-cols-1 row-cols-md-3 g-4" style={{ paddingTop: "30px" }}>
                                    <div class="col">
                                        <div class="card h-100" style={{ height: "50px", width: "300px", marginLeft: "-400px" }}>

                                            <div class="card-body" >

                                                <p class="text-sm-start">
                                                    <svg width="48" height="60" viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M56.316 0H12.1373C9.32161 0 7.04228 2.27933 7.04228 5.09497V45.0503L0.137254 58.257C-0.0638631 58.7263 -0.0638631 59.2626 0.271332 59.5978C0.539489 59.8659 0.874684 60 1.20988 60C1.34396 60 1.47804 60 1.61211 59.933L17.6345 54.4358H56.316C59.1317 54.4358 61.411 52.1564 61.411 49.3408V5.09497C61.411 2.27933 59.1317 0 56.316 0ZM58.9976 49.3408C58.9976 50.8156 57.7909 52.0223 56.316 52.0223H17.4333C17.2993 52.0223 17.1652 52.0223 17.0311 52.0894L3.69033 56.648L9.25457 45.9218C9.32161 45.7207 9.38865 45.5866 9.38865 45.3855V5.09497C9.38865 3.62011 10.5954 2.41341 12.0702 2.41341H56.316C57.7909 2.41341 58.9976 3.62011 58.9976 5.09497V49.3408Z" fill="#25A582"></path>
                                                        <path d="M46.7965 22.9274C46.1261 22.9274 45.3886 23.0614 44.7853 23.2626C45.6568 18.5698 43.5786 14.6145 40.3607 12.6704C37.2769 10.8603 32.7853 10.7933 29.5674 14.6816C27.4222 12.1341 24.4054 10.9944 21.3886 11.6648C17.7015 12.4693 14.8188 15.6871 14.2155 19.7095C13.7462 22.9274 14.2825 31.1732 28.9641 38.9497C29.1652 39.0167 29.3663 39.0838 29.5004 39.0838C29.7015 39.0838 29.9026 39.0167 30.0367 38.9497C31.1093 38.3464 32.1819 37.81 33.1205 37.2067C34.9976 39.5531 37.7462 41.6983 41.4333 43.5754C41.6345 43.6424 41.8356 43.7095 41.9697 43.7095C42.1037 43.7095 42.3719 43.6424 42.506 43.5754C46.7965 41.2961 49.9473 38.6816 51.7574 35.8659C53.7685 32.7151 53.7015 30.1005 53.2993 28.4246C52.6289 25.2737 49.8803 22.9274 46.7965 22.9274ZM16.6289 20.0447C17.0311 17.0279 19.1764 14.6145 21.8579 14.0782C24.4054 13.5419 26.8188 14.7486 28.4948 17.4302C28.6959 17.7654 29.0981 18.0335 29.5004 18.0335C29.9026 18.0335 30.3048 17.8324 30.506 17.4302C33.1205 13.2737 36.7406 13.4078 39.0199 14.8156C41.8356 16.4916 43.5116 20.3799 41.7015 24.8715C40.4278 23.6648 38.8859 22.9944 37.2099 22.9944C34.1931 22.9944 31.3775 25.2737 30.573 28.4246C30.1708 29.9665 30.1037 32.3128 31.7127 35.1955C30.9752 35.6648 30.2378 36.067 29.4333 36.5363C16.763 29.5642 16.2266 22.6592 16.6289 20.0447ZM42.1037 41.095C32.316 35.7318 32.7183 30.5028 33.1205 28.9609C33.6568 26.8827 35.3998 25.3408 37.344 25.3408C38.7518 25.3408 40.0926 26.2123 41.0311 27.7542C41.2322 28.0894 41.6345 28.3575 42.0367 28.3575C42.4389 28.3575 42.8412 28.1564 43.0423 27.7542C43.9808 26.2123 45.3216 25.3408 46.7294 25.3408C48.6736 25.3408 50.4836 26.8827 50.9529 28.9609C51.4222 30.5028 51.8914 35.7318 42.1037 41.095Z" fill="#25A582"></path>
                                                    </svg> <h5 class="card-title" style={{ color: "#422510", marginTop: "-50px", marginLeft: "80px" }}> Distance makes no difference.</h5>

                                                    Partners can still get married even if they’re on opposite ends of the world.As long as both are on the Zoom call, they can say ‘I Do’
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card h-100" style={{ height: "50px", width: "300px", marginLeft: "-100px" }}>

                                            <div class="card-body">

                                                <p class="text-sm-start">
                                                    <svg width="43" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M49.899 23.3188L45.1717 19.5197V14.607C45.1717 14.2795 45.0404 14.0175 44.8434 13.7555L31.3838 0.327511C31.1869 0.131004 30.8586 0 30.596 0H7.87879C7.22222 0 6.69697 0.524017 6.69697 1.17904V19.5197C6.63131 19.5197 6.56566 19.5852 6.56566 19.6507L2.03535 23.3188C0.722222 24.3668 0 25.9389 0 27.5764V54.5633C0 57.5764 2.42929 60 5.44949 60H46.5505C49.5707 60 52 57.5764 52 54.5633V27.5764C51.9343 25.8734 51.2121 24.3668 49.899 23.3188ZM45.1717 22.5328L47.2071 24.1703L45.1717 25.6769V22.5328ZM9.06061 2.35808H29.3485V14.5415C29.3485 15.1965 29.8737 15.7205 30.5303 15.7205H42.7424V27.5109L25.9343 40.2838L9.06061 27.5109V2.35808ZM31.7778 4.06114L41.101 13.3624H31.7778V4.06114ZM6.69697 22.5328V25.6769L4.66162 24.1703L6.69697 22.5328ZM2.29798 54.4978V27.5764C2.29798 26.9214 2.49495 26.3319 2.82323 25.8079L23.8333 41.7249L2.56061 55.8079C2.42929 55.4148 2.29798 54.9563 2.29798 54.4978ZM46.4848 57.5764H5.38384C5.05555 57.5764 4.72727 57.5109 4.39899 57.4454L25.9343 43.2314L47.4697 57.4454C47.1414 57.5109 46.8131 57.5764 46.4848 57.5764ZM49.5707 54.4978C49.5707 54.9563 49.4394 55.3493 49.3081 55.7424L28.0354 41.7249L49.0455 25.8079C49.3737 26.3319 49.5707 26.9214 49.5707 27.5764V54.4978Z" fill="#25A582"></path>
                                                        <path d="M33.2222 27.3799C34.7323 25.0218 34.6667 22.9912 34.3384 21.7467C33.7475 19.3231 31.6465 17.6855 29.3485 17.6855C28.101 17.6855 26.9192 18.2096 25.9343 19.1266C24.9495 18.2096 23.7677 17.6855 22.5202 17.6855C20.2222 17.6855 18.1212 19.3886 17.5303 21.7467C17.202 22.9912 17.1364 25.0218 18.6465 27.3799C19.9596 29.4759 22.2576 31.441 25.3434 33.1441C25.5404 33.2096 25.7374 33.2751 25.9343 33.2751C26.1313 33.2751 26.3283 33.2096 26.5252 33.1441C29.6768 31.441 31.9091 29.4759 33.2222 27.3799ZM19.8283 22.4017C20.1566 21.0917 21.2727 20.1091 22.5202 20.1091C23.4394 20.1091 24.2929 20.6986 24.8838 21.6812C25.0808 22.0087 25.4747 22.2707 25.9343 22.2707C26.3283 22.2707 26.7222 22.0742 26.9848 21.6812C27.6414 20.6331 28.4293 20.1091 29.3485 20.1091C30.5303 20.1091 31.7121 21.0917 32.0404 22.4017C32.303 23.3842 32.5657 26.9214 25.9343 30.786C19.303 26.9214 19.5657 23.3842 19.8283 22.4017Z" fill="#79ADA0"></path>
                                                    </svg> <h5 class="card-title" style={{ color: "#422510", marginTop: "-50px", marginLeft: "80px" }}>Quick, easy and no bureaucracy.</h5>

                                                    Weddings can be a stressful and time-consuming event to organise. Not with us. We take care of all the details, documents and bureaucracy so there is nothing for you to worry about.
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card h-100" style={{ height: "50px", width: "300px", marginLeft: "200px", }}>

                                            <div class="card-body">

                                                <p class="text-sm-start">
                                                    <svg width="55" height="60" viewBox="0 0 55 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M37.492 25.22C33.8371 25.22 30.418 26.3343 27.4705 28.3871C25.4662 26.9795 23.1083 25.9824 20.5734 25.5132L27.4116 21.1144C27.8242 20.8211 28.0011 20.2933 27.8242 19.8241L25.8199 14.4282C25.6431 14.0176 25.2894 13.7244 24.8178 13.7244H10.1983C9.72669 13.7244 9.37299 14.0176 9.19614 14.4282L7.19185 19.8241C7.01501 20.2933 7.19185 20.8211 7.6045 21.1144L14.3837 25.5719C6.18971 26.9795 0 34.0763 0 42.6393C0 52.1994 7.8403 60 17.4491 60C21.104 60 24.523 58.8857 27.4705 56.8329C30.3001 58.827 33.7781 60 37.492 60C47.1007 60 54.941 52.1994 54.941 42.6393C55 33.0206 47.1597 25.22 37.492 25.22ZM2.12219 42.6393C2.12219 34.2522 9.01929 27.3901 17.4491 27.3901C25.8789 27.3901 32.776 34.2522 32.776 42.6393C32.776 45.3959 32.0096 48.0352 30.6538 50.3813C29.8875 49.7361 29.239 48.9736 28.7085 48.1525C29.5338 46.4516 30.0054 44.5748 30.0054 42.6393C30.0054 35.7771 24.3462 30.1467 17.4491 30.1467C10.552 30.1467 4.89282 35.7771 4.89282 42.6393C4.89282 49.5015 10.552 55.132 17.4491 55.132C19.6892 55.132 21.8703 54.5455 23.8156 53.4311C24.4051 54.1936 25.0536 54.8387 25.761 55.4839C23.2851 57.0675 20.4555 57.8886 17.4491 57.8886C9.01929 57.8299 2.12219 51.0264 2.12219 42.6393ZM17.4491 52.9619C11.731 52.9619 7.01501 48.3285 7.01501 42.5807C7.01501 36.8329 11.731 32.2581 17.4491 32.2581C19.3355 32.2581 21.045 32.7273 22.5777 33.6071C20.9271 36.305 20.0429 39.4135 20.0429 42.6393C20.0429 45.9238 20.9861 49.0323 22.5777 51.6716C21.045 52.4927 19.2765 52.9619 17.4491 52.9619ZM27.4705 39.8241C27.7063 40.7038 27.8242 41.6423 27.8242 42.5807C27.8242 43.5191 27.7063 44.4575 27.4705 45.3373C27.2347 44.4575 27.1168 43.5191 27.1168 42.5807C27.1168 41.7009 27.2347 40.7625 27.4705 39.8241ZM32.3633 33.6071C33.896 32.7273 35.6645 32.2581 37.492 32.2581C43.2101 32.2581 47.926 36.8915 47.926 42.6393C47.926 48.3871 43.269 53.0206 37.492 53.0206C35.6056 53.0206 33.896 52.5513 32.3633 51.6716C34.0139 48.9736 34.8982 45.8651 34.8982 42.6393C34.8982 39.2962 34.0139 36.2464 32.3633 33.6071ZM22.8725 19.1203H12.1436L17.567 16.0118L22.8725 19.1203ZM24.0514 15.8358L24.7588 17.7713L21.4577 15.8358H24.0514ZM10.9057 15.8358H13.5584L10.1983 17.7713L10.9057 15.8358ZM11.731 21.2317H23.2262L17.4491 24.9854L11.731 21.2317ZM37.492 57.8299C29.0622 57.8299 22.1651 50.9678 22.1651 42.5807C22.1651 39.8241 22.9314 37.1848 24.2872 34.8387C25.0536 35.4839 25.702 36.2464 26.2326 37.0675C25.4073 38.7684 24.9357 40.6452 24.9357 42.5807C24.9357 49.4428 30.5949 55.0733 37.492 55.0733C44.3891 55.0733 50.0482 49.4428 50.0482 42.5807C50.0482 35.7185 44.3891 30.088 37.492 30.088C35.2519 30.088 33.0707 30.6745 31.1254 31.7889C30.5359 31.0264 29.8875 30.3813 29.1801 29.7361C31.6559 28.1525 34.4855 27.3314 37.492 27.3314C45.9218 27.3314 52.8189 34.1936 52.8189 42.5807C52.8189 50.9678 45.9807 57.8299 37.492 57.8299Z" fill="#25A582"></path>
                                                        <path d="M17.508 6.97947C18.0975 6.97947 18.5691 6.51026 18.5691 5.92375V1.05572C18.5691 0.469208 18.0975 0 17.508 0C16.9185 0 16.4469 0.469208 16.4469 1.05572V5.92375C16.4469 6.51026 16.9185 6.97947 17.508 6.97947Z" fill="#25A582"></path>
                                                        <path d="M5.60021 11.4369C5.83601 11.6715 6.07181 11.7302 6.36656 11.7302C6.66131 11.7302 6.8971 11.6129 7.1329 11.4369C7.54555 11.0264 7.54555 10.3226 7.1329 9.912L3.65487 6.45159C3.24223 6.04104 2.53483 6.04104 2.12218 6.45159C1.70954 6.86215 1.70954 7.56596 2.12218 7.97652L5.60021 11.4369Z" fill="#25A582"></path>
                                                        <path d="M28.6495 11.7302C28.9443 11.7302 29.1801 11.6129 29.4159 11.4369L32.8939 7.97652C33.3065 7.56596 33.3065 6.86215 32.8939 6.45159C32.4812 6.04104 31.7738 6.04104 31.3612 6.45159L27.8832 9.912C27.4705 10.3226 27.4705 11.0264 27.8832 11.4369C28.06 11.6715 28.3548 11.7302 28.6495 11.7302Z" fill="#25A582"></path>
                                                    </svg> <h5 class="card-title" style={{ color: "#422510", marginTop: "-50px", marginLeft: "80px" }}>Enjoy the benefits of being married.</h5>

                                                    In some countries, being married has its own legal benefits. Once married in the US, you can start the process of getting your marriage recognised in your own country too.
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">HOW IT WORKS</h3>
                            <div className="underline mx-auto">

                                <p className="text-sm-start para">

                                    <p class="card-title" style={{ textAlign: "center", marginLeft: "-80px", fontSize: "20px" }}>Getting started is as simple as filling in a form and we’ll take it from there.</p>
                                </p>
                                <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                        <div class="elementor-element elementor-element-10816f3 elementor-widget elementor-widget-text-editor" data-id="10816f3" data-element_type="widget" data-widget_type="text-editor.default">
                                            <div class="elementor-widget-container">
                                                <div class="elementor-text-editor elementor-clearfix">
                                                    <ol className="text-sm-start" style={{ marginLeft: "-400px", width: "300px" }}>
                                                        <li aria-level="1">Fill in an inquiry form on the website and upload a copy of your passport.</li>
                                                        <li>Choose your preferred date and type of wedding ceremony.</li>
                                                        <li aria-level="1">Pay online with our secure payment process.</li>
                                                        <li aria-level="1">We organize the marriage ceremony and registration for you.</li>
                                                        <li aria-level="1">Receive your wedding details with a Zoom link you can share with 90 guests.</li>
                                                        <li aria-level="1">On the big day, enjoy your wedding ceremony, which takes around 30 minutes.</li>
                                                        <li aria-level="1">Should you wish, we will arrange for your marriage certificate to be signed by an apostille and sent to you.</li>
                                                    </ol>
                                                    <div style={{ marginTop: "-400px", marginLeft: "200px" }}>
                                                        <img src={image} alt="image" width="300px" height="400px" /></div>
                                                </div>
                                                <div class="elementor-button-wrapper">
                                                    <a href="https://marryfromhome.com/marriage-application/" class="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                        <span class="elementor-button-content-wrapper">
                                                            <Link to="/" className="btn  shadow active" style={{
                                                                marginLeft: "100px",
                                                                width: "150px",
                                                                marginTop: "50px",
                                                                backgroundColor: "#25A582"
                                                            }}>Apply Now</Link>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                <div class="elementor-widget-wrap " style={{ marginTop: "600px", backgroundColor: "#20c997" }}>
                    <div class="elementor-element elementor-element-4c396a9 elementor-widget elementor-widget-heading" data-id="4c396a9" data-element_type="widget" data-widget_type="heading.default">
                        <div class="elementor-widget-container text-center">
                            <h2 class="elementor-heading-title elementor-size-default" style={{ color: "#422510" }}>BUT WAIT, IS IT % LEGAL?</h2>		</div>
                    </div>
                    <div class="elementor-element elementor-element-ce1b0f5 elementor-widget elementor-widget-text-editor" data-id="ce1b0f5" data-element_type="widget" data-widget_type="text-editor.default " >
                        <div class="elementor-widget-container">
                            <div class="elementor-text-editor elementor-clearfix">
                                <p class="text-sm-start para" style={{ marginLeft: "100px" }}>
                                    You may be wondering how a wedding conducted online can be legal.
                                    Certain states in the US allow for weddings to be conducted online and be recognized by the government.
                                    The process and certification are exactly the same as an in-person wedding.
                                    There is an officiant from the state who will conduct the ceremony online and confirm the presence of the two individuals getting married. We have established a working relationship with these states and the local county offices in order to make the process as easy as possible for you, whilst still enjoying the same outcome as a physical wedding.
                                </p>
                                <p class="text-sm-start para" style={{ marginLeft: "100px" }}>
                                    Every couple has the option to have their marriage certificate signed by an apostille, certifying its authenticity and legitimacy.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-c31569f elementor-widget elementor-widget-spacer" data-id="c31569f" data-element_type="widget" data-widget_type="spacer.default">
                        <div class="elementor-widget-container">
                            <div class="elementor-spacer">
                                <div class="elementor-spacer-inner"></div>
                            </div>
                        </div>
                    </div>
                    <section class="elementor-section elementor-inner-section elementor-element elementor-element-d807bab elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d807bab" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-row">
                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2d53fa7" data-id="2d53fa7" data-element_type="column">
                                    <div class="elementor-column-wrap elementor-element-populated">
                                        <div class="elementor-widget-wrap">
                                            <div class="elementor-element elementor-element-76ffe7c elementor-widget elementor-widget-text-editor" data-id="76ffe7c" data-element_type="widget" data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-text-editor elementor-clearfix">
                                                        <h3 class="text-sm-start para" style={{ color: "#422510", marginLeft: "200px", marginTop: "50px" }}>YOUR MARRIAGE LICENSE</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-5ee1cb3 elementor-widget elementor-widget-text-editor" data-id="5ee1cb3" data-element_type="widget" data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-text-editor elementor-clearfix">
                                                        <p class="text-sm-start para" style={{ marginLeft: "200px" }}>
                                                            This is what you can expect to receive.
                                                        </p>
                                                        <p class="text-sm-start para" style={{ marginLeft: "200px" }}>
                                                            An official marriage certificate stamped and signed by a US state county.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="about_buttons">
                                    <a download="" href="pdf/certificates.jpg" className="btn  shadow active" style={{
                                        marginLeft: "500px",
                                        width: "200px",
                                        marginTop: "-5px",
                                        backgroundColor: "#25A582"
                                    }}>Download Certificates<i class="uil uil-download-alt button_icon"></i>
                                    </a>
                                    <div class="modal-dialog" role="document" style={{
                                        marginLeft: "800px",
                                        width: "150px",
                                        marginTop: "-200px"
                                    }}>
                                        <div class="modal-content" style={{ width: "400px" }}>
                                            <div class="modal-header">
                                                <h5 class="modal-title">Location</h5>
                                                <button type="button" class="close" aria-label="Close">
                                                    <span aria-hidden="true">×</span></button></div><div class="modal-body"><div class="location-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57763.58882182253!2d55.38442113562169!3d25.195692423227655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z4Kam4KeB4Kas4Ka-4KaHIC0g4Kam4KeB4Kas4Ka-4KaHIOCmhuCmruCmv-CmsOCmvuCmpCAtIOCmuOCmguCmr-CngeCmleCnjeCmpCDgpobgprDgpqwg4KaG4Kau4Ka_4Kaw4Ka-4Kak!5e0!3m2!1sbn!2sbd!4v1540725271741"></iframe></div></div></div></div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="elementor-element elementor-element-f2bbfd4 elementor-widget elementor-widget-spacer" data-id="f2bbfd4" data-element_type="widget" data-widget_type="spacer.default">
                        <div class="elementor-widget-container">
                            <div class="elementor-spacer">
                                <div class="elementor-spacer-inner"></div>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-e2f96d0 elementor-align-center elementor-widget elementor-widget-button" data-id="e2f96d0" data-element_type="widget" data-widget_type="button.default">
                        <div class="elementor-widget-container">
                            <div class="elementor-button-wrapper">
                                <a href="https://marryfromhome.com/the-legality-of-online-marriage/" class="elementor-button-link elementor-button elementor-size-sm" role="button">

                                    <Link to="/" className="btn btn-info shadow active now">Rean More</Link>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Here’s what couples who have gotten married online with us have to say:</h3>
                            <div className="underline1 mx-auto">

                                <div class="row row-cols-1 row-cols-md-3 g-4" style={{ paddingTop: "-50px" }}>
                                    <div class="col">
                                        <div class="card h-100" style={{ height: "100px", width: "350px", marginLeft: "-500px" }}>

                                            <div class="card-body" >
                                                <img width="300" height="200" src="https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/02/wedding-5929956_640.jpg" alt="Michael &amp; Kate" class="lazyloaded" data-ll-status="loaded">
                                                </img>
                                                <cite style={{ marginTop: "10px", width: "50px" }} class="elementor-testimonial__cite"><span class="elementor-testimonial__name">Michael &amp; Kate</span></cite>

                                                <i class="fa fa-star"></i><i class="fa fa-star"></i>
                                                <br /><br />


                                                <p class="text-sm-start">

                                                    Thank you for your help with the organizing of our wedding.We didn't know about the option to have a wedding on Zoom before, and we couldn't have a regular wedding.We were desperate and we thought we won't be able to get married until we came across your website. Thanks for making it possible for us<br /><br /><br /><br />
                                                </p>
                                                <div style={{ color: "#20c997" }}>
                                                    <IconText icon={StarOutlined} key="list-vertical-star-o" />&nbsp;&nbsp;
                                                    <IconText icon={LikeOutlined} key="list-vertical-like-o" />&nbsp;&nbsp;
                                                    <IconText icon={MessageOutlined} key="list-vertical-message" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card h-100" style={{ height: "50px", width: "350px", marginLeft: "-150px" }}>

                                            <div class="card-body" >
                                                <img width="300" height="200" src="https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/02/couple-5385141_640.jpg" alt="Adam &amp; Matthew"></img>
                                                <cite class="elementor-testimonial__cite"><span class="elementor-testimonial__name">Adi &amp; Shay</span></cite>

                                                <i class="fa fa-star"></i><i class="fa fa-star"></i>
                                                <br /><br />


                                                <p class="text-sm-start">

                                                    Thank you again, for our wonderful day, for your patience, and great service.
                                                </p>
                                                <div style={{ color: "#20c997" }}>
                                                    <IconText icon={StarOutlined} key="list-vertical-star-o" />&nbsp;&nbsp;
                                                    <IconText icon={LikeOutlined} key="list-vertical-like-o" />&nbsp;&nbsp;
                                                    <IconText icon={MessageOutlined} key="list-vertical-message" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card h-100" style={{ height: "50px", width: "350px", marginLeft: "200px" }}>

                                            <div class="card-body" >
                                                <img width="300" height="200" src="https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/03/adishai.jpeg" alt="Adi &amp; Shay"></img>
                                                <cite class="elementor-testimonial__cite"><span class="elementor-testimonial__name">Christy &amp; Dave</span></cite>

                                                <i class="fa fa-star"></i><i class="fa fa-star"></i>
                                                <br /><br />


                                                <p class="text-sm-start">

                                                    We would like to thank you very much for making our wedding such a special day, it was perfect!You made the whole process incredibly easy!We really appreciate it
                                                </p>
                                                <div style={{ color: "#20c997" }}>
                                                    <IconText icon={StarOutlined} key="list-vertical-star-o" />&nbsp;&nbsp;
                                                    <IconText icon={LikeOutlined} key="list-vertical-like-o" />&nbsp;&nbsp;
                                                    <IconText icon={MessageOutlined} key="list-vertical-message" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <div class="elementor-image" >
                <img style={{ marginTop: "600px" }} width="400" height="216" src="https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/03/output-onlinepngtools.png"
                    class="attachment-medium_large size-medium_large lazyloaded" alt="" sizes="(max-width: 400px) 100vw, 400px"
                    srcset="https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/03/output-onlinepngtools.png 400w, 
                                                https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/03/output-onlinepngtools-300x162.png 300w"
                    data-ll-status="loaded"></img>
            </div>
            <p style={{ marginTop: "-90px", marginLeft: "400px" }}><a href="https://marryfromhome.com/reviews/">Click here</a> to check out what other newly married couples have to say about <em>Marry From Hom</em>e</p>

            <section className="section" style={{ backgroundColor: "#20c997", height: "300px", marginTop: "80px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                <h2 class="elementor-heading-title elementor-size-default" style={{ color: "#422510" }}>Schedule a free call with us
                                </h2>
                            </h3>
                            <div className="underline1 mx-auto">
                                <div class="elementor-element elementor-element-73558dc elementor-widget elementor-widget-text-editor" data-id="73558dc" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div class="elementor-widget-container">
                                        <div class="elementor-text-editor elementor-clearfix" >
                                            <p class="text-sm-start para">Should you have any further questions regarding our services that have not been answered?
                                                <br />Still not sure whether our service is suitable for your needs?</p>
                                            <p class="text-sm-start para"><strong>Schedule a free 15 minute consultation call with us, and we will figure out together the best way to assist you.
                                            </strong></p><p>&nbsp;</p>
                                            <a download="" href="" className="btn  shadow active" style={{
                                                marginLeft: "-200px",
                                                width: "200px",
                                                marginTop: "-5px",
                                                backgroundColor: "#25A582"
                                            }}>Scheduler a call<i class="uil uil-download-alt button_icon"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section class="elementor-section elementor-top-section elementor-element elementor-element-009c2a8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="009c2a8" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}" >
                <div class="elementor-container elementor-column-gap-default">
                    <div class="elementor-row">
                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b99021f" data-id="b99021f" data-element_type="column">
                            <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                    <section class="elementor-section elementor-inner-section elementor-element elementor-element-f71ff1a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f71ff1a" data-element_type="section">
                                        <div class="elementor-container elementor-column-gap-default">
                                            <div class="elementor-row">
                                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3933410" data-id="3933410" data-element_type="column">
                                                    <div class="elementor-column-wrap elementor-element-populated">
                                                        <div class="elementor-widget-wrap">
                                                            <div class="elementor-element elementor-element-dc06065 elementor-widget elementor-widget-image" data-id="dc06065" data-element_type="widget" data-widget_type="image.default">
                                                                <div class="elementor-widget-container">
                                                                    <div class="elementor-image">
                                                                        <img width="364" height="380" src="https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/09/PDF-cover.png"
                                                                            class="attachment-large size-large lazyloaded" alt="" sizes="(max-width: 364px) 100vw, 364px" srcset="https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/09/PDF-cover.png 364w, https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/09/PDF-cover-287x300.png 287w" data-ll-status="loaded"></img>														</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0982b5c" data-id="0982b5c" data-element_type="column">
                                                    <div class="elementor-column-wrap elementor-element-populated">
                                                        <div class="elementor-widget-wrap">
                                                            <div class="elementor-element elementor-element-62375ca elementor-widget elementor-widget-heading" data-id="62375ca" data-element_type="widget" data-widget_type="heading.default">
                                                                <div class="elementor-widget-container" style={{ color: "#422510", marginTop: "-300px", marginLeft: "500px" }}>
                                                                    <h4 class="elementor-heading-title elementor-size-default">
                                                                        <span id="num">7 </span>
                                                                        <span id="text"> TIPS YOU NEED TO KNOW BEFORE GETTING MARRIED ONLINE</span></h4>		</div>
                                                            </div>
                                                            <div class="elementor-element elementor-element-369b407 elementor-widget elementor-widget-heading"
                                                                data-id="369b407" data-element_type="widget" data-widget_type="heading.default" style={{ marginLeft: "500px" }}>
                                                                <div class="elementor-widget-container">
                                                                    <h6 class="elementor-heading-title elementor-size-default">Enter your email below to get it for FREE</h6>		</div>
                                                            </div>
                                                            <div class="elementor-element elementor-element-1a0e950 elementor-button-align-stretch elementor-widget elementor-widget-form"
                                                                data-id="1a0e950" data-element_type="widget" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;
                Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;
                :&quot;circle&quot;}" data-widget_type="form.default" style={{ marginLeft: "500px" }}>
                                                                <form>


                                                                    <div class="mb-3" style={{ width: "400px" }}>

                                                                        <input type="text" class="form-control" placeholder="FirstName" />
                                                                    </div>
                                                                    <div class="mb-3" style={{ width: "400px" }}>

                                                                        <input type="text" class="form-control" placeholder="LastName" />
                                                                    </div>
                                                                    <div class="mb-3" style={{ width: "400px" }}>

                                                                        <input type="text" class="form-control" placeholder="Email" />
                                                                    </div>

                                                                    <button type="submit" class="btn" style={{ backgroundColor: "#25A582" }}>Send It To Me</button>

                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






            <section class="elementor-section elementor-top-section elementor-element elementor-element-b5f9a17 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b5f9a17"
                data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}" style={{ backgroundColor: "#25A582", width: "100%", marginTop: "80px" }}>
                <div class="elementor-container elementor-column-gap-default">
                    <div class="elementor-row">
                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-58f288b" data-id="58f288b" data-element_type="column">
                            <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                    <div class="elementor-element elementor-element-577d27d elementor-widget elementor-widget-heading" data-id="577d27d" data-element_type="widget" data-widget_type="heading.default">
                                        <div class="elementor-widget-container">
                                            <h2 class="elementor-heading-title elementor-size-default" style={{ color: "#422510", marginTop: "50px", marginLeft: "400px" }}>LIMITATIONS AND QUALIFICATIONS</h2>		</div>
                                    </div>
                                    <div class="elementor-element elementor-element-a4a13c8 elementor-widget elementor-widget-text-editor"
                                        data-id="a4a13c8" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div class="elementor-widget-container">
                                            <div class="elementor-text-editor elementor-clearfix">
                                                <p style={{ color: "#422510", marginLeft: "400px" }}><b>These are some of the limitations on who can be married online:</b></p>					</div>
                                        </div>
                                    </div>
                                    <div class="elementor-element elementor-element-1485999 elementor-widget elementor-widget-text-editor" data-id="1485999" data-element_type="widget" id="limitations" data-widget_type="text-editor.default">
                                        <div class="elementor-widget-container">
                                            <div class="elementor-text-editor elementor-clearfix">
                                                <ul style={{ marginLeft: "200px" }}>
                                                    <li aria-level="1">No couples who are related to each other within and not including the fifth degree of consanguinity.</li>
                                                    <li aria-level="1">No minors or cousins.</li>
                                                    <li aria-level="1">If an individual has been divorced within the last 60 days, you need to provide a certified copy of the divorce certificate.</li>
                                                    <li aria-level="1">The fee is non-refundable and includes two certified copies of the marriage certificate – one digital and one paper copy.</li>
                                                </ul>					</div>
                                        </div>
                                    </div>
                                    <div class="elementor-element elementor-element-883a56a elementor-widget elementor-widget-spacer" data-id="883a56a" data-element_type="widget" data-widget_type="spacer.default">
                                        <div class="elementor-widget-container">
                                            <div class="elementor-spacer">
                                                <div class="elementor-spacer-inner"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-element elementor-element-d9af7b2 elementor-widget elementor-widget-text-editor" data-id="d9af7b2" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div class="elementor-widget-container">
                                            <div class="elementor-text-editor elementor-clearfix">
                                                <p style={{ marginLeft: "400px" }}><b>Adjusting Your Application After Payment:</b></p>					</div>
                                        </div>
                                    </div>
                                    <div class="elementor-element elementor-element-542830e elementor-widget elementor-widget-text-editor" data-id="542830e" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div class="elementor-widget-container">
                                            <div class="elementor-text-editor elementor-clearfix">
                                                <p style={{ marginLeft: "200px" }}>Should you need to amend your application details before you receive your marriage certificate there is no extra cost.</p>
                                                <p style={{ marginLeft: "200px" }}>If you need to amend your details after the certificate is finalized, there is a $20 fee.</p>
                                                <p style={{ marginLeft: "200px" }}> Please be sure to review all your details in the confirmation email to ensure they are correct.</p>					</div>
                                        </div>
                                    </div>
                                    <section class="elementor-section elementor-inner-section elementor-element elementor-element-19b40cc elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="19b40cc" data-element_type="section">
                                        <div class="elementor-container elementor-column-gap-default">
                                            <div class="elementor-row">
                                                <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-7975622" data-id="7975622" data-element_type="column">
                                                    <div class="elementor-column-wrap">
                                                        <div class="elementor-widget-wrap">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section class="elementor-section elementor-inner-section elementor-element elementor-element-cf1f1ef elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="cf1f1ef" data-element_type="section" style={{ backgroundColor: "#20c997", height: "400px", marginTop: "-300px" }}>
                                        <div class="elementor-container elementor-column-gap-default">
                                            <div class="elementor-row">
                                                <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-cad94ef" data-id="cad94ef" data-element_type="column">
                                                    <div class="elementor-column-wrap elementor-element-populated">
                                                        <div class="elementor-widget-wrap">
                                                            <div class="elementor-element elementor-element-146c558 elementor-widget elementor-widget-global elementor-global-188 elementor-widget-button" data-id="146c558" data-element_type="widget" data-widget_type="button.default">
                                                                <div class="elementor-widget-container">
                                                                    <div class="elementor-button-wrapper">
                                                                        <Link to="/" className="btn  shadow active now" >Apply Now</Link>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{marginTop:"100px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">ABOUT US</h3>
                            <div className="underline mx-auto">

                                <p className="text-sm-start para">

                                    <p class="card-title" style={{marginLeft: "5px", fontSize: "20px" }}>LOVE SHOULD BE FREE</p>
                                </p>
                                <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                        <div class="elementor-element elementor-element-10816f3 elementor-widget elementor-widget-text-editor" data-id="10816f3" data-element_type="widget" data-widget_type="text-editor.default">
                                            <div class="elementor-widget-container">
                                                <div class="elementor-text-editor elementor-clearfix">
                                                <p className="text-sm-start para" style={{width:"600px"}}>For some couples, getting married is not possible. 
                                                    We experienced this first hand when a family member was barred from getting married in their home country because of laws against homosexual marriages. 
                                                    After witnessing the pain and disappointment this had on our loved ones, we sought out to find a way to solve the issue. 
                                                    Driven by a belief that love knows no barriers and neither should marriage, we created Marry From Home. 
                                                    Our unique service helps couples get legally married by a US county, from anywhere in the world over Zoom. 
                                                    This gives them the freedom to enjoy the legal rights benefits of being married and pursue the life they want, together.</p>
                                                    <div style={{ marginTop: "-300px", marginLeft: "300px" }}>
                                        <img width="300" height="400" src="https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/01/portrait-4615580_1920-1024x683.jpg"
                                            class="attachment-large size-large lazyloaded" alt="Virtual wedding ceremony over the internet" sizes="(max-width: 800px) 100vw, 800px"
                                            srcset="https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/01/portrait-4615580_1920-1024x683.jpg 1024w, 
                                                  https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/01/portrait-4615580_1920-600x400.jpg 600w, 
                                                  https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/01/portrait-4615580_1920-300x200.jpg 300w, 
                                                  https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/01/portrait-4615580_1920-768x512.jpg 768w,
                                                   https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/01/portrait-4615580_1920-1536x1024.jpg 1536w, 
                                                   https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/01/portrait-4615580_1920.jpg 1920w"
                                            data-ll-status="loaded"></img>
                                    </div>


                                                </div>
                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </section>


        </div>
    )

}

export default Programs;