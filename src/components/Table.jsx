import React from "react";

export const Table = ({ characters }) => {
  if (!characters.length) {
    return <div>Loading...</div>;
  }
  return (
    <table className="m-4 w-full">
      <thead>
        <tr>
          <th className="text-start pr-3">Name</th>
          <th className="text-start pr-3">Eye color</th>
          <th className="text-start pr-3">Birth Year</th>
          <th className="text-start pr-3">Height</th>
          <th className="text-start pr-3">Mass</th>
        </tr>
      </thead>
      <tbody>
        {characters.map(({ name, eye_color, birth_year, height, mass }) => (
          <tr key={name}>
            <td className="text-start">{name}</td>
            <td className="text-start">{eye_color}</td>
            <td className="text-start">{birth_year}</td>
            <td className="text-start">{height}</td>
            <td className="text-start">{mass}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
