import * as React from "react"
import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import ThemeSwitcher from "./ThemeSwitcher"

const Header = ({ siteTitle }) => {
  return (
    <Navbar expand="lg" /* fixed="top" */ className="bg-body-tertiary ">
      <Container className="me-4">
        <Navbar.Brand as={Link} to="/" className="">
          <svg
          className="logo-svg"
            viewBox="0 0 450.81715 137.81299"
            // height="137.81299mm"
            // width="450.81717mm"
            xmlns="http://www.w3.org/2000/svg"
            // {...props}
          >
            <g transform="translate(-32.073 -30.662)" fillOpacity={1}>
              <path
                fill="#f8f9fa"
                strokeWidth={2.75254}
                d="M32.073322 30.661957H165.826662V168.47494700000001H32.073322z"
              />
              <g
                fontStyle="normal"
                fontWeight={400}
                fontSize="25.4px"
                fontFamily="sans-serif"
                fill="#004080"
                stroke="none"
                strokeWidth={0.264583}
              >
                <g
                  style={{
                    lineHeight: 1.25,
                  }}
                >
                  <path
                    style={{
                      InkscapeFontSpecification: "'Bodoni 72 Oldstyle Bold'",
                    }}
                    d="M72.24 71.961q0 .254-.508.254h-.178q-.559 0-1.981-.025-1.397-.025-2.083-.025-.28 0-1.168.025H63.35q-.356 0-.356-.229 0-.228.356-.228l.863.025q1.169.026 1.423-.406.076-.127.076-1.524l-.025-13.767q-.813 2.108-2.134 6.706l-2.21 7.772q-.406 1.422-.66 1.422-.28 0-.508-.71l-1.626-4.878q-.584-1.752-3.175-9.83v13.132q0 1.143.026 1.372.025.203.228.356.381.33 1.296.304.914-.025.914.28 0 .178-.38.178l-2.262-.051q-.584-.026-1.346.025-1.016.051-1.371.051-.534 0-.534-.229 0-.203.432-.203 1.016 0 1.22-.025.787-.102.914-.584.076-.305.076-1.27V57.763q0-2.032-.254-2.362-.229-.356-1.804-.356-.406 0-.406-.229 0-.254.432-.228l.686.025 4.8-.025q.076 0 .28.025 2.159 7.036 3.657 11.684l3.43-11.71h.533l3.352.026h.432q.381-.025.686-.025h1.168q.508 0 .508.228 0 .254-.304.23l-.585-.026q-1.066-.051-1.447.203-.356.254-.356.99 0 .204.025.89.026.685.026 6.375v7.086q0 .915.457 1.067.483.127 1.397.102.94-.026.94.228z"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight={700}
                    fontStretch="normal"
                    fontSize="25.4px"
                    fontFamily="Bodoni 72 Oldstyle"
                    fill="#004080"
                    fillOpacity={1}
                    strokeWidth={0.264583}
                    transform="translate(41.791 18.424) matrix(2.86573 0 0 2.86573 -134.35 -122.403)"
                    aria-label="M"
                  />
                </g>
                <g
                  style={{
                    lineHeight: 1.25,
                  }}
                >
                  <path
                    style={{
                      InkscapeFontSpecification: "'Bodoni 72 Oldstyle Bold'",
                    }}
                    d="M81.807 89.294q0 .152-.229.152-.178 0-.33-.025-.89-.152-4.978-.152-.381 0-1.169.025l-.787.025q-.788.026-.788-.203 0-.203.635-.228.56-.026.966-.204.431-.203.431-.457.026-.152.051-.838l.026-1.27v-5.893l-5.233.026q-.457 0-.889-.026l.05 7.849q.026.66 1.017.787.787.102.914.153.127.025.127.152 0 .152-.254.152-.33 0-1.752-.05-1.423-.051-1.194-.051-.152 0-1.575.076-1.397.05-2.667.05h-.254q-.457 0-.457-.228 0-.203.356-.203 1.193 0 1.65-.305.204-.127.204-1.346v-14.02q0-.814-.432-.966-.432-.178-1.397-.178-.33 0-.33-.203 0-.127.28-.152-.102 0 1.904.025l3.15.025q.965 0 1.93-.05.432-.026.508-.026.356 0 .356.254 0 .178-.153.229-.127.025-.889.05-.736.026-.914.33-.178.28-.178 1.042v5.995l.61.025q2.54.102 5.512-.05v-5.665q0-1.727-1.296-1.727-.863 0-.863-.254 0-.229.33-.229h.254q.406 0 1.422.051 1.042.025 2.26.025h1.931l1.88-.076q.254 0 .254.153 0 .177-.94.254-.94.076-1.168.406-.23.305-.23 1.575v12.497q0 1.65.407 2.006.432.33 1.448.381.483.026.483.305z"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight={700}
                    fontStretch="normal"
                    fontSize="25.4px"
                    fontFamily="Bodoni 72 Oldstyle"
                    fill="#004080"
                    fillOpacity={1}
                    strokeWidth={0.264583}
                    transform="translate(41.791 18.424) matrix(2.86573 0 0 2.86573 -134.35 -122.403)"
                    aria-label="H"
                  />
                </g>
              </g>
              <text
                className="logo-name"
                xmlSpace="preserve"
                style={{
                  InkscapeFontSpecification: "'Liberation Serif, Normal'",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                  textAlign: "center",
                }}
                x={333.28928}
                y={85.674309}
                fontStyle="normal"
                fontVariant="normal"
                fontWeight={400}
                fontStretch="normal"
                fontSize="50.8px"
                fontFamily="Liberation Serif"
                textAnchor="middle"
                // fill="#004080"
                strokeWidth={2.794}
              >
                <tspan
                  x={333.28928}
                  y={85.674309}
                  // fill="#004080"
                  fillOpacity={1}
                  strokeWidth={2.794}
                >
                  {"Matt Hoffman"}
                </tspan>
              </text>
              <text
                className="my-role"
                xmlSpace="preserve"
                style={{
                  InkscapeFontSpecification: "'Liberation Serif, Normal'",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                  textAlign: "center",
                }}
                x={298.02664}
                y={119.95876}
                fontStyle="normal"
                fontVariant="normal"
                fontWeight={400}
                fontStretch="normal"
                fontSize="42.8126px"
                fontFamily="Liberation Serif"
                textAnchor="middle"
                // fill="#004080"
                strokeWidth={2.3547}
              >
                <tspan
                  style={{
                    InkscapeFontSpecification: "'Liberation Serif, Normal'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                  }}
                  x={298.02664}
                  y={119.95876}
                  fontStyle="normal"
                  fontVariant="normal"
                  fontWeight={400}
                  fontStretch="normal"
                  fontSize="42.8126px"
                  fontFamily="Liberation Serif"
                  strokeWidth={2.3547}
                >
                  {"Photography"}
                </tspan>
              </text>
              <text
                className="logo-byline"
                xmlSpace="preserve"
                style={{
                  InkscapeFontSpecification: "'Liberation Serif, Normal'",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                  textAlign: "center",
                }}
                x={336.34424}
                y={151.05507}
                fontStyle="normal"
                fontVariant="normal"
                fontWeight={400}
                fontStretch="normal"
                fontSize="22.5778px"
                fontFamily="Liberation Serif"
                textAnchor="middle"
                // fill="#999"
                strokeWidth={2.794}
              >
                <tspan
                  style={{
                    InkscapeFontSpecification: "'Liberation Serif, Normal'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                  }}
                  x={336.34424}
                  y={151.05507}
                  fontStyle="normal"
                  fontVariant="normal"
                  fontWeight={400}
                  fontStretch="normal"
                  fontSize="22.5778px"
                  fontFamily="Liberation Serif"
                  strokeWidth={2.794}
                >
                  {"Beautiful Images for Real Estate"}
                </tspan>
              </text>
            </g>
          </svg>
          {/* <Navbar.Text className="fs-3"> Matt Hoffman <span className="fs-6">Photography</span></Navbar.Text> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/portfolio-interior">
                Interior
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/portfolio-exterior">
                Exterior
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/portfolio-aerial">
                Aerial
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/service-property">
                Property Photos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service-aerial">
                Aerial Photos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service-staging">
                Virtual Staging
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Info">
              <NavDropdown.Item as={Link} to="/info-prep">
                <i className="bi bi-house-check pe-2"></i>Property Prep
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/info-terms">
                <i className="bi bi-pen pe-2"></i>Terms of Service
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text>
          <ThemeSwitcher />
        </Navbar.Text>
      </Container>
    </Navbar>
  )
}
export default Header
