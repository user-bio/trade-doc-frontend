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
import isAzure from '../../../components/isAzure'

const ClientesLista = () => {

  isAzure();

  return (
    <Fragment>
      <Breadcrumbs title='Clientes' data={[{ title: 'Clientes' }, { title: 'Todos os cliente' }]} />
      <Row>
        <Col sm='12'>
          <DataTablesReOrder />
        </Col>
      </Row>
    </Fragment>
  )
}

export default ClientesLista
