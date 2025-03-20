import React from "react"
import Header from "./components/Header"
import Accordion from "./components/Accordion"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const accordionData = [
    {
      title: 'Journey into the Future',
      content: 'In a world where the impossible has become reality, where the stars are no longer out of reach, welcome to the nature of humanity\'s survival and exploration. Witness the evolution of technology as it transforms barren planets and floating havens, all made possible by the wonders of innovation and human determination.',
      icon: 'icon1.png' // Replace with your icon path
    },
    {
      title: 'From Neglect to Innovation',
      content: 'Once the cradle of civilization, Earth now stands as a solemn reminder of the consequences of neglect and environmental decline. But even so, in the ingenuity of mankind has soared to new heights. With our relentless pursuit of advancement, we have not only healed our scars but extended our reach across the cosmos.',
      icon: 'icon2.png' // Replace with your icon path
    },
    {
      title: 'Enter Space Travel: Where Dreams Take Flight',
      content: 'Embark on an extraordinary journey with our groundbreaking space exploration program, aptly named "Space Travel." As a commander, engineer, the fate of humanity\'s exodus rests in your capable hands. Prepare to face the ultimate challenge: evacuating humankind from their birthplace and guiding them towards a future among the stars.',
      icon: 'icon3.png' // Replace with your icon path
    },
    {
      title: 'Engineer, Explorer, Leader',
      content: 'Space Travel empowers you to engineer, design, and pilot intricate spacecraft. Chart a course that defies the boundaries of known space. As a leader, an explorer, and a commander, you are steering humanity\'s destiny. Beyond construction, you are a leader, an explorer, & commander steering humanity\'s destiny.',
      icon: 'icon4.png' // Replace with your icon path
    },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        {accordionData.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} icon={item.icon} />
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default App
