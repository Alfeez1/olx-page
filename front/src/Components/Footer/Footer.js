import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from '@mui/material';

export default function Footer() {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <Link href="/admin/login">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="/admin/login"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="/admin/login"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="/admin/login"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="/admin/login"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="/admin/login"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </Link>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2022-
        <a className="text-white" href="www.alfeez1010.com">
          WWW.ALFEEZ.COM
        </a>
      </div>
    </MDBFooter>
  );
}
