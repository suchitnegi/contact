import React from "react";
import Card from "./card.jsx";
import contacts from "../contacts.js";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card 
      name = {contacts[0].name}
      image = {contacts[0].imgURL}
      contact = {contacts[0].phone}
      mail = {contacts[0].email}
      />
      <Card 
      name = {contacts[1].name}
      image = {contacts[1].imgURL}
      contact = {contacts[1].phone}
      mail = {contacts[1].email}
      />
      <Card 
      name = {contacts[2].name}
      image = {contacts[2].imgURL}
      contact = {contacts[2].phone}
      mail = {contacts[2].email}
      />
    </div>
  );
}

export default App;
