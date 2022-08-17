import { useState } from "react";
import "./styles.css";

export default function App() {
  let movies = [
    {
      title: "The secret life of Walter Mitty",
      info: {
        description:
          "A story of an ordinary man with extraordinary life experiences",
        rating: "5/5"
      }
    },
    {
      title: "The Matrix",
      info: {
        description:
          "The classic movie that inspired several thought processes and way of talking that are so common today that people who have not seen the movie relate to the sayings completely",
        rating: "5/5"
      }
    },
    {
      title: "Forrest Gump",
      info: {
        description:
          "The Tom Hanks-starrer that is still watched today as if it was released yesterday",
        rating: "5/5"
      }
    }
  ];

  let games = [
    {
      title: "The Witcher",
      info: {
        description: "I fucking hate portals-Geralt",
        rating: "5/5"
      }
    },
    {
      title: "Fallout 4",
      info: {
        description: "War changes people",
        rating: "5/5"
      }
    },
    {
      title: "Assassin's Creed",
      info: {
        description: "Nothing is true, everything is permitted",
        rating: "5/5"
      }
    }
  ];
  let books = [
    {
      title: "12 Rules of Life",
      info: {
        description: "Written by JP",
        rating: "5/5"
      }
    },
    {
      title: "The Psychology of Money",
      info: {
        description:
          "Everyone has a reason why they do what they do with money",
        rating: "5/5"
      }
    },
    {
      title: "The Curse of the Cheese Pyramid",
      info: {
        description: "A children's book, pretty entertaining",
        rating: "4/5"
      }
    }
  ];
  let pastries = [
    {
      title: "Mango CheeseCake",
      info: {
        description: "Mango and cheesecake-a great combination",
        rating: "5/5"
      }
    },
    {
      title: "Chocolate rumball",
      info: {
        description: "Chocolate-need I say more?",
        rating: "5/5"
      }
    },
    {
      title: "Fruit Cake",
      info: {
        description: "Not a fan, but I can't think of anything else",
        rating: "5/5"
      }
    }
  ];
  let [recommendations, setRecommendations] = useState([]);
  function displayMovies() {
    setRecommendations(movies);
  }
  function displayBooks() {
    setRecommendations(books);
  }
  function displayGames() {
    setRecommendations(games);
  }
  function displayPastries() {
    setRecommendations(pastries);
  }

  function getBackground(index) {
    if (index % 2 === 0) {
      return "#CBD5E1";
    }
    return "#ffffff";
  }
  return (
    <div className="App">
      <div id="intro">
        <h2>These are my recommendations</h2>
        <p>Click on a button to get started.</p>
      </div>
      <main>
        <div id="button-layout">
          <button class="options" onClick={displayMovies}>
            Movies
          </button>
          <button class="options" onClick={displayBooks}>
            Books
          </button>
          <button class="options" onClick={displayGames}>
            Games
          </button>
          <button class="options" onClick={displayPastries}>
            Pastries
          </button>
          <hr />
        </div>
        <div>
          <ul>
            {recommendations.map((item, index) => {
              return (
                <li>
                  <div
                    id="displayRecommendations"
                    style={{ backgroundColor: getBackground(index) }}
                  >
                    <p class="heading">{item.title}</p>
                    <hr />
                    <p class="description">{item.info.description}</p>
                    <p class="rating">{item.info.rating}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
