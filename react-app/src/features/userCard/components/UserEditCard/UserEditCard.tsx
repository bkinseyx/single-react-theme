import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Form from 'react-jsonschema-form';

import { CardFooterWrapper } from 'app/components/CardFooterWrapper/CardFooterWrapper';
import { getSubmitOnClick } from './getSubmitOnClick';
import { getCancelOnClick } from './getCancelOnClick';
import { getUserEditFormSelector } from 'features/userCard/selectors/getUserEditFormSelector';
import {
  widgets,
  getCustomFormats,
  getTransformErrors,
  formats,
} from 'app/utils/formUtils';
import { formOnChange } from './formOnChange';
import { formOnSubmit } from './formOnSubmit';
import { ObjectFieldTemplate } from 'app/components/ObjectFieldTemplate/ObjectFieldTemplate';

export const UserEditCard: React.FC = () => {
  const { key, data, schema, uiSchema } = useSelector(getUserEditFormSelector);
  let formRef: Form<{}>;

  return (
    <div className="card" role="main" aria-label="User Card">
      <div className="card-header">
        <h5 className="card-title">Users</h5>
      </div>
      <div className="card-body">
        <Form
          // key only seems to be necessary in order to clear the form
          // see https://github.com/rjsf-team/react-jsonschema-form/issues/953#issuecomment-397815654
          key={key}
          schema={schema}
          uiSchema={uiSchema}
          widgets={widgets}
          customFormats={getCustomFormats(formats)}
          transformErrors={getTransformErrors(schema, formats)}
          formData={data}
          onChange={formOnChange}
          onSubmit={formOnSubmit}
          onError={(e) => console.log(e)}
          children={<React.Fragment />}
          showErrorList={false}
          ObjectFieldTemplate={ObjectFieldTemplate}
          ref={(form) => {
            formRef = form as Form<{}>;
          }}
        />
      </div>
      <div className="card-footer">
        <CardFooterWrapper>
          <button className="btn btn-primary" onClick={() => formRef.submit()}>
            Save User
          </button>
          <button className="btn btn-primary" onClick={getCancelOnClick({})}>
            Cancel
          </button>
        </CardFooterWrapper>
      </div>
    </div>
  );
};
