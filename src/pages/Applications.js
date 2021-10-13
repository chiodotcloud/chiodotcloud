import { Card, Col, Row, Alert, Badge } from 'antd';
import '../css/Applications.css'
import image from '../assets/chio.png'
const {Meta} = Card;
function Applications(){
    return(
        <div style={{height: '100%'}}>
    <Row wrap style={{width: '100%', height: '100%'}} justify="center" align="middle" gutter={30}>
      <Col style={{padding: 20, minWidth: 300}} span={6}>
        <Badge.Ribbon text="To be created" placement="end">
      <Card style={{height: 500}}  cover={<img src={image} />} >
        <Meta title="Chio Music" description={<>An interactive music client. <br /> More info at: <a href="https://music.chio.cloud">Chio Music</a> </>} />
        </Card>
        </Badge.Ribbon>
      </Col>
      <Col style={{padding: 20, minWidth: 300}} span={6}>
        <Badge.Ribbon text="To be created" placement="end">
              <Card style={{height: 500}} cover={<img src={image} />} >
          <Meta title="Chio Management"  description={<>A management tool for private people and businesses. <br/>More info at: <a href="https://management.chio.cloud">Chio Management</a> </>} />
        </Card>
        </Badge.Ribbon>
      </Col>
      <Col style={{padding: 20, minWidth: 300}} span={6}>
        <Badge.Ribbon text="To be created" placement="end">
        <Card style={{height: 500}} cover={<img src={image} />}>
          <Meta title="Chio Assistant" description={<>A smart assistant using a neural network. <br/> More info at: <a href="https://management.chio.cloud">Chio Assistant</a> </>} />
        </Card>
        </Badge.Ribbon>
      </Col>
      <Col style={{padding: 20, minWidth: 300}} span={6}>
        <Badge.Ribbon text="To be created" placement="end">
      <Card style={{height: 500}} cover={<img src={image} />} >
        <Meta title="Chio Music" description={<>An interactive music client. <br /> More info at: <a href="https://music.chio.cloud">Chio Music</a> </>} />
        </Card>
        </Badge.Ribbon>
      </Col>
     
    </Row>
        </div>
    )
}
export default Applications;