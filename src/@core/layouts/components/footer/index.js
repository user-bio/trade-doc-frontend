// ** Icons Import
import { Heart } from "react-feather"

const Footer = () => {
  return (
    <p className="clearfix mb-0">
      <span className="float-md-start d-block d-md-inline-block mt-25">
        COPYRIGHT © {new Date().getFullYear()}{" "}
        <a
          href="https://www.bioseta.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bioseta
        </a>
        <span className="d-none d-sm-inline-block">, All rights Reserved</span>
      </span>
      <span className="float-md-end d-none d-md-block">
        Feito com
        <Heart className="me-1" size={14} />
        por S3 Digital
      </span>
    </p>
  )
}

export default Footer
