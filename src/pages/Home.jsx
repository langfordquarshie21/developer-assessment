import React from "react";
import drugs from "../api/drugs";
import DrugCard from "../components/DrugCard";

const Home = () => {
    return (
        <div className="main-container">
            <div className="inner-container">
                {
                    drugs.map((drug, index) => {
                        return <DrugCard key={index} name={drug.name} image={drug.image} description={drug.description} price={drug.price} />
                    })
                }
            </div>
        </div >
    );
}

export default Home