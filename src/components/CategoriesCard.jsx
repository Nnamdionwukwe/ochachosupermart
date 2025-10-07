import { Card, ListGroup } from "react-bootstrap";

const CategoriesCard = () => {
  return (
    <Card>
      <Card.Header>Categories</Card.Header>
      <div className="scrollable-categories">
        <ListGroup variant="flush">
          <ListGroup.Item>Electronics</ListGroup.Item>
          <ListGroup.Item>Books</ListGroup.Item>
          <ListGroup.Item>Apparel</ListGroup.Item>
          {/* ... many more categories */}
          <ListGroup.Item>Home Goods</ListGroup.Item>
          <ListGroup.Item>Toys</ListGroup.Item>
        </ListGroup>
      </div>
    </Card>
  );
};

export default CategoriesCard;
