import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <header>
        <a href="#" target="_blank" rel="noreferrer">
          Lisbon
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          Paris
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          Lisbon
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          San Francisco
        </a>
      </header>
      <form>
        <input type="search" placeholder="Enter a city..." />
        <input type="submit" value="Search" />
      </form>
      <main>
        <h3>Lisbon</h3>
        <p>Thursday 15:54</p>
        <p>Clouds</p>
      </main>
    </div>
  );
}
