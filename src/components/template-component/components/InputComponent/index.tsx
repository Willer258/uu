import { Card } from "antd";
import React from "react";
import { TestValueOption } from "../../../../utils/data-option/select-option";
import ContactInput from "./SubComponent/ContactInput";
import DatePickerInput from "./SubComponent/DatePickerInput";
import EmailInput from "./SubComponent/EmailInput";
import PhotoInput from "./SubComponent/PhotoInput";
import SelectInput from "./SubComponent/SelectInput";
import TextInput from "./SubComponent/TextInput";

function InputComponent() {
  return (
    <div className="container p-4 mx-auto flex flex-wrap">
      <div className="flex border-b-2 p-4 items-center justify-between w-full mb-20 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 ">
          Champ (Input)
        </h1>
      </div>
      <div className="h-full">
        <div className="place-content-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full  gap-5">
          <Card title="Champ de texte">
            <div>
              <TextInput type="text" label="Champ de texte" name="text-input" />
            </div>
          </Card>
          <Card title="Champ de contact">
            <div>
              <ContactInput
                rules={[
                  // { required: true } pour les regles,
                  {
                    pattern: /^(\+225) \d{2}-\d{2}-\d{2}-\d{2}-\d{2}$/,
                    message: "Ce numéro doit être un numéro ivoirien",
                  },
                ]}
                mask="+225 11-11-11-11-11"
                type="text"
                label="Champ de contact"
                name="contact-input"
              />
            </div>
          </Card>
          <Card title="Champ d'email">
            <div>
              <EmailInput
                type="text"
                label="Champ d'email "
                name="email-input"
              />
            </div>
          </Card>
          <Card title="Champ de selection">
            <div>
              <SelectInput
                placeholder={"Choisissez"}
                label="Champ de selection "
                name="select-input"
                valueOption={TestValueOption}
              />
            </div>
          </Card>
          <Card title="Champ de date">
            <div>
              <DatePickerInput
                format={"DD-MM-YYYY"}
                label="Champ de date "
                name="image-input"
              />
            </div>
          </Card>
          <Card title="Champ pour image">
            <div>
              <PhotoInput
                placeholder={"selectionnez"}
                label="Champ de selection "
                name="image-input"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default InputComponent;
