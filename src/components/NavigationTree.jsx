import Breadcrumb from 'react-bootstrap/Breadcrumb';

function NavigationTree() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/" active>
        Products
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default NavigationTree;
