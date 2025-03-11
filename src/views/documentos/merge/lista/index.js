import React, { Fragment }  from "react";

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Demo Components
import DataTablesReOrder from './tabela'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

//components
import isAzure from '../../../../components/isAzure'

const DocumentosMerge = () => {

  isAzure();

  return (
    <Fragment>
    <Breadcrumbs
      title="Documentos"
      data={[
        { title: "Documentos", link: "/documentos" },
        { title: "Tipos", link: "/documento/tipos" },
        { title: "Merge" },
      ]}
    />
      <Row>
        <Col sm='12'>
          <DataTablesReOrder />
        </Col>
      </Row>
    </Fragment>
  )
}

export default DocumentosMerge
