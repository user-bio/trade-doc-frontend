// ** React Imports
import { Fragment } from "react"
import { Link } from "react-router-dom"

// ** Third Party Components
import Proptypes from "prop-types"
import classnames from "classnames"

// ** Reactstrap Imports
import {
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap"

const BreadCrumbs = (props) => {
  // ** Props
  const { data, title } = props

  const renderBreadCrumbs = () => {
    return data.map((item, index) => {
      const Wrapper = item.link ? Link : Fragment
      const isLastItem = data.length - 1 === index
      return (
        <BreadcrumbItem
          tag="li"
          key={index}
          active={!isLastItem}
          className={classnames({ "text-primary": !isLastItem })}
        >
          <Wrapper {...(item.link ? { to: item.link } : {})}>
            {item.title}
          </Wrapper>
        </BreadcrumbItem>
      )
    })
  }

  return (
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            {title ? (
              <h2 className="content-header-title float-start mb-0">{title}</h2>
            ) : (
              ""
            )}
            <div className="breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12">
              <Breadcrumb>
                <BreadcrumbItem tag="li">
                  <Link to="/">Home</Link>
                </BreadcrumbItem>
                {renderBreadCrumbs()}
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BreadCrumbs

// ** PropTypes
BreadCrumbs.propTypes = {
  title: Proptypes.string.isRequired,
  data: Proptypes.arrayOf(
    Proptypes.shape({
      link: Proptypes.string,
      title: Proptypes.string.isRequired
    })
  )
}
