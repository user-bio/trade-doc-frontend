// ** React Imports
import React, { useState, Fragment } from "react";

// ** Reactstrap Imports
import { Card, CardBody, Button, ListGroup, ListGroupItem } from "reactstrap";

// ** Third Party Imports
import toast from "react-hot-toast";
import { useDropzone } from "react-dropzone";
import { FileText, X, DownloadCloud } from "react-feather";

const Upload = (props) => {
  // ** State
  const [files, setFiles] = useState([]);
  const [ativo, setAtivo] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
    },
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length) {
        toast.error("Você só pode fazer upload de arquivos de PDF!");
      } else {
        setFiles([
          ...files,
          ...acceptedFiles.map((file) => Object.assign(file)),
        ]);
        props.funcao(acceptedFiles)
        setAtivo(true)
      }
    },
  });

  const renderFilePreview = (file) => {
    if (file.type.startsWith("image")) {
      return (
        <img
          className="rounded"
          alt={file.name}
          src={URL.createObjectURL(file)}
          height="28"
          width="28"
        />
      );
    } else {
      return <FileText size="28" />;
    }
  };

  const handleRemoveFile = (file) => {
    const uploadedFiles = files;
    const filtered = uploadedFiles.filter((i) => i.name !== file.name);
    setFiles([...filtered]);

    props.funcao([])
    setAtivo(false)
  };

  const renderFileSize = (size) => {
    if (Math.round(size / 100) / 10 > 1000) {
      return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`;
    } else {
      return `${(Math.round(size / 100) / 10).toFixed(1)} kb`;
    }
  };

  const fileList = files.map((file, index) => (
    <ListGroupItem
      key={`${file.name}-${index}`}
      className="d-flex align-items-center justify-content-between"
    >
      <div className="file-details d-flex align-items-center">
        <div className="file-preview me-1">{renderFilePreview(file)}</div>
        <div>
          <p className="file-name mb-0">{file.name}</p>
          <p className="file-size mb-0">{renderFileSize(file.size)}</p>
        </div>
      </div>
      <Button
        color="danger"
        outline
        size="sm"
        className="btn-icon"
        onClick={() => handleRemoveFile(file)}
      >
        <X size={14} />
      </Button>
    </ListGroupItem>
  ));

  const handleRemoveAllFiles = () => {
    props.funcao([])
    setFiles([]);
  };

  return (
    <Card>
      <CardBody className={`p-0`}>
        <div {...getRootProps()} className={`dropzone ${props.class} ${ ativo ? 'd-none' : '' }`}>
          <input {...getInputProps()} />
          <div className="d-flex align-items-center justify-content-center flex-column">
            <DownloadCloud size={64} />
            <h5>Arraste seu arquivo ou clique em localizar</h5>
            <p className="text-secondary">
              Arraste ou clique em{" "}
              <a href="/" onClick={(e) => e.preventDefault()}>
                localizar
              </a>{" "}
              para selecionar em seu dispositivo
            </p>
          </div>
        </div>
        {files.length ? (
          <Fragment>
            <ListGroup className="my-2">{fileList}</ListGroup>
          </Fragment>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default Upload;
