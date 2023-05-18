import React from 'react'
import './Banner.css'
import { Card } from 'react-bootstrap';


function Banner() {
  return (
    <div className='banner'>
      <h1 className='heading'>Welcome to classipost classified</h1>
      <p className='sub-heading'>Browse our top categories</p>

      <div className='first-row'>
        
        <div className='first-card'>
          <Card className='cardStyle' style={{ width: '25rem' }}>
            <div className='imgStyle'>
              <img style={{ width: '75px', height: '75px' }} variant="top" src="https://radiustheme.com/demo/html/classipost/classipost/img/service/service1.png" alt='' />
            </div>
            <Card.Body>
              <Card.Title className='cardTitle'>Electronics</Card.Title>
              <Card.Text className='cardText'>
                (19,805)<br />
              </Card.Text>
              <Card.Text className='cardNote'>
                Emply dummy text of the printing and taypng industrxt ever sincknown.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className='second-card'>
          <Card className='cardStyle' style={{ width: '25rem' }}>
            <div className='imgStyle'>
              <img style={{ width: '75px', height: '75px' }} variant="top" src="https://radiustheme.com/demo/html/classipost/classipost/img/service/service2.png" alt='' />
            </div>
            <Card.Body>
              <Card.Title className='cardTitle'>Cars & Vehicles</Card.Title>
              <Card.Text className='cardText'>
                (12,857)<br />
              </Card.Text>
              <Card.Text className='cardNote'>
                Emply dummy text of the printing and taypng industrxt ever sincknown.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className='third-card'>
          <Card className='cardStyle' style={{ width: '25rem' }}>
            <div className='imgStyle'>
              <img style={{ width: '75px', height: '75px' }} variant="top" src="https://radiustheme.com/demo/html/classipost/classipost/img/service/service3.png" alt='' />
            </div>
            <Card.Body>
              <Card.Title className='cardTitle'>Overseas Jobs</Card.Title>
              <Card.Text className='cardText'>
                (16,267)<br />
              </Card.Text>
              <Card.Text className='cardNote'>
                Emply dummy text of the printing and taypng industrxt ever sincknown.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>


      <div className='second-row'>

        <div>
          <Card className='cardStyle' style={{ width: '25rem' }}>
            <div className='imgStyle'>
              <img style={{ width: '75px', height: '75px' }} variant="top" src="https://radiustheme.com/demo/html/classipost/classipost/img/service/service4.png" alt='' />
            </div>
            <Card.Body>
              <Card.Title className='cardTitle'>Pets & Animals</Card.Title>
              <Card.Text className='cardText'>
                (1,245)<br />
              </Card.Text>
              <Card.Text className='cardNote'>
                Emply dummy text of the printing and taypng industrxt ever sincknown.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card className='cardStyle' style={{ width: '25rem' }}>
            <div className='imgStyle'>
              <img style={{ width: '75px', height: '75px' }} variant="top" src="https://radiustheme.com/demo/html/classipost/classipost/img/service/service5.png" alt='' />
            </div>
            <Card.Body>
              <Card.Title className='cardTitle'>Hobby, Sport & Kids</Card.Title>
              <Card.Text className='cardText'>
                (15,897)<br />
              </Card.Text>
              <Card.Text className='cardNote'>
                Emply dummy text of the printing and taypng industrxt ever sincknown.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card className='cardStyle' style={{ width: '25rem' }}>
            <div className='imgStyle'>
              <img style={{ width: '75px', height: '75px' }} variant="top" src="https://radiustheme.com/demo/html/classipost/classipost/img/service/service6.png" alt='' />
            </div>
            <Card.Body>
              <Card.Title className='cardTitle'>House & Appartment</Card.Title>
              <Card.Text className='cardText'>
                (13,657)<br />
              </Card.Text>
              <Card.Text className='cardNote'>
                Emply dummy text of the printing and taypng industrxt ever sincknown.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Banner