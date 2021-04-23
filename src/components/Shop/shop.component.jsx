import React from "react";
import "./shop.styles.css";

export const Shop = ({ collection, collectionTitle, handleClick }) => {
  return (
    <>
      <main className="container">
        <h2>{collectionTitle}</h2>
        <section className="card-row">
          {collection?.map((item) => (
            <article className="card" key={item.id} style={{width:"90%", marginTop:'20px'}}>
              <img src={item.url} alt="Preview of Product" />

              <h3>
                {item.name}
                <em>{item.Price}</em>
              </h3>
              <p>{item.Description}</p>
              <button
                href="/"
                className={`${item.Inventory === 0 ? 'productOutOfStock': 'button'}`}
                onClick={(e) => handleClick(e)}
                value={item}
                disabled={item.Inventory === 0}
              >
                Add to Cart
              </button>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};
