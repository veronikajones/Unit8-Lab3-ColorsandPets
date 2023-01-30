import React, { useState } from "react";
import { sortAndDeduplicateDiagnostics } from "typescript";
import Pet from "../models/pets";

export function ArraysEx() {
  const [colors, setColors] = useState<string[]>(["red", "orange", "purple"]);

  function addColor(color: string): void {
    setColors([...colors, color]);
  }
  const [pets, setPets] = useState<Pet[]>([
    { name: "Fluffy", type: "dog", id: 111 },
    { name: "Max", type: "cat", id: 222 },
    { name: "Sassy", type: "cat", id: 333 },
  ]);

  function deletePet(pet: string) {
    setPets([...pets]);
    pets.filter((pet) => pet.id);
  }

  return (
    <div className="Colors">
      <h2> Colors</h2>
      <ol>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ol>
      <button onClick={() => addColor("Violet")}>Add Violet</button>
      <button onClick={() => addColor("Green")}>Add Green</button>
      <button onClick={() => addColor("Blue")}>Add Green</button>
      <table>
        <h2> Pets </h2>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Action</th>
        </tr>

        {pets.map((pet, index) => (
          <tr>
            <td>{pet.name}</td>
            <td>{pet.type}</td>
            <td>
              <button onClick={() => deletePet}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
