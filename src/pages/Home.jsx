import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 59px;
`;
const Title = styled.h1`
    margin-top: 50px;
    margin-left: 100px;
    font-size: 36px;
    text-align: left;
    font-weight: 500;
    margin-bottom: 45px;
    font-weight: bold;
    color: #6589AB;
`;

const Home = () => {
    return (
        <Container>
            <Navbar />
            <Slider />
            <Categories />
            <Title>Paket Paling Laku</Title>
            <Products />
            <Title>Paket Wedding dan Tunangan</Title>
            <Products />
            <Title>Paket Photoshoot</Title>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Home;
