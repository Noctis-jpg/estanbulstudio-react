import React from "react";
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars, faClose, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { isLoading, error, data } = useFetch(
    "https://strapproject.net/api/header-menus"
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
              src="https://res.cloudinary.com/djwwoxcek/image/upload/v1685733572/Estanbul_Studyo_1_c983ba05b1_8cdb0d4f00.png?updated_at=2023-06-02T19:19:32.977Z"
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
          <Modal
            className="ymModal right FreeConsRight"
            show={show}
            onHide={handleClose}
          >
            <div className="row myH100">
              <div className="col-md-7 col-12 LeftMenu">
                <Modal.Body>
                  <nav className="MainNav MobileNav">
                    {data &&
                      data.data &&
                      data.data.map((item) => (
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
              </div>
              <div className="col-md-5 col-12 RightMenu">
                <Modal.Header className="modal-header">
                  <Modal.Title></Modal.Title>
                  <div className="CloseBtnpad">
                    <FontAwesomeIcon
                      className="ModalCloseBtn"
                      icon={faClose}
                      onClick={handleClose}
                    />
                  </div>
                </Modal.Header>
                <Modal.Body>
                  <div className="infoAddres">
                    <h2 className="InfoCompany">
                      Estanbul Studio - Estanbul Adworks
                    </h2>
                    <h4 className="SmallAdress">
                      Seyrantepe, Nato Cd. No:15 Kat:5, 34418 Kâğıthane/İstanbul
                    </h4>
                    <h4 className="Mail">info@estanbuladworks.com</h4>

                    <div className="telephone">
                      {" "}
                      <FontAwesomeIcon icon={faPhone} />
                      0549 549 30 45
                    </div>
                    <div className="SocialMedia">
                      <FontAwesomeIcon icon={faFacebook} />
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                  </div>
                </Modal.Body>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
