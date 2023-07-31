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

const UsuariosLista = () => {

  isAzure();

  return (
    <Fragment>
      <Breadcrumbs title='Usuários' data={[{ title: 'Usuários' }, { title: 'Todos os Usuários' }]} />
      <Row>
        <Col sm='12'>
          <DataTablesReOrder />
        </Col>
      </Row>
    </Fragment>
  )
}

export default UsuariosLista
