import React from "react";
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/header-menus"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;

  console.log(data);

  return (
    <div className="container-fluid">
      <div className="row CapsulLogoandNav">
        <div className="col-lg-2 col-6">
          <div className="Logo d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              src="http://localhost:1337/uploads/Estanbul_Studyo_1_c983ba05b1.png?updated_at=2023-02-25T12:16:52.879Z"
            ></img>
          </div>
        </div>
        <div className="col-lg-10 col-6 d-flex align-items-center justify-content-center ymDesk">
          {/* <nav className="MainNav DesktopNav">
            {data.data.map((item) => (
              <NavLink key={item.id} to={item.attributes.link}>
                {item.attributes.item}
              </NavLink>
            ))}
          </nav> */}
          <Button onClick={handleShow} className="MobileBtn">
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <Modal className="ymModal right FreeConsRight" show={show} onHide={handleClose}>
            <Modal.Header className="modal-header">
              <Modal.Title>Menus</Modal.Title>
              <FontAwesomeIcon
                className="ModalCloseBtn"
                icon={faClose}
                onClick={handleClose}
              />
            </Modal.Header>
            <Modal.Body>
              <nav className="MainNav MobileNav">
                {data.data.map((item) => (
                  <NavLink
                    onClick={handleClose}
                    key={item.id}
                    to={item.attributes.link}
                  >
                    {item.attributes.item}
                  </NavLink>
                ))}
              </nav>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}
