import React from 'react';
import { ObjectFieldTemplateProps } from 'react-jsonschema-form';

export const ObjectFieldTemplate = ({
  TitleField,
  properties,
  title,
  description,
  required,
  idSchema,
}: ObjectFieldTemplateProps) => {
  console.log({ idSchema });
  return (
    <fieldset>
      <div>
        <div className="row">
          {properties.map((prop) => (
            <div
              style={{ whiteSpace: 'nowrap' }}
              className="col-lg-2 col-md-4 col-sm-6 col-xs-12"
              key={prop.content.key as string | number | undefined}
            >
              {prop.content}
            </div>
          ))}
        </div>
        {description}
      </div>
    </fieldset>
  );
};
