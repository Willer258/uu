import React from "react";

function ViewExpand(props: any) {
  const { location, company } = props;
  return (
    <div className="flex items-center justify-around space-x-4">
      <div className="flex flex-col space-y-2">
        <div>
          <span className="font-bold">Quartier : </span>{" "}
          <span>{location.street}</span>
        </div>
        <div>
          {" "}
          <span className="font-bold">Appartement : </span>{" "}
          <span>{location.suite}</span>
        </div>
        <div>
          <span className="font-bold">Geolocalisation : </span>{" "}
          <span>
            <span>{location.geo.lat}</span>,<span>{location.geo.lng}</span>
          </span>
        </div>
        <div>
          <span className="font-bold">Ville : </span>
          <span>{location.city}</span>
        </div>
        <div>
          <span className="font-bold">Numero de porte : </span>{" "}
          <span>{location.zipcode}</span>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div>
          <span className="font-bold">Entreprise :</span>
          <span>{company.name}</span>
        </div>
        <div>
          {" "}
          <span className="font-bold">Phrase d'accroche :</span>
          <span>{company.catchPhrase}</span>
        </div>
        <div>
          {" "}
          <span className="font-bold">item :</span>
          <span>{company.bs}</span>
        </div>
      </div>
    </div>
  );
}

export default ViewExpand;
