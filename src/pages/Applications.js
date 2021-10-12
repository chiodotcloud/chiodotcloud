import { Card, Col, Row, Alert } from 'antd';
import '../css/Applications.css'
function Applications(){
    return(
        <div>
<div className="site-card-wrapper">
    <Row gutter={16}>
      <Col style={{padding: 20}} span={8}>
      <Card  hoverable  cover={<img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlydHVhbCUyMGFzc2lzdGFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />} title="Chio Music" bordered={false}>
          Our new concept is an interactive audio player, which uses a 2D-grid to display all choices of music.
          <Alert style={{margin: '10px 0px 0px 0px'}} type="warning" message="Work-in-progress" />
        </Card>
      </Col>
      <Col style={{padding: 20}} span={8}>
      <Card  hoverable  cover={<img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlydHVhbCUyMGFzc2lzdGFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />} title="Chio Management" bordered={false}>
          A calendar and management tool with loads of in-built macros to help you in your daily life.
          <Alert style={{margin: '10px 0px 0px 0px'}} type="warning" message="Work-in-progress" />
        </Card>
      </Col>
      <Col style={{padding: 20}} span={8}>
        <Card  hoverable  cover={<img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlydHVhbCUyMGFzc2lzdGFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />} title="Chio Assistant" bordered={false}>
          A flexible assistant suited for your needs.
          <Alert style={{margin: '10px 0px 0px 0px'}} type="warning" message="Our assistant won't be released for public until early 2022" />
        </Card>
      
      </Col>
    </Row>
  </div>
        </div>
    )
}
export default Applications;