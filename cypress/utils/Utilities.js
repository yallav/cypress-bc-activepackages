class Utilities {
  getRandomIndex = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
}

const utilities = new Utilities();
export default utilities;
