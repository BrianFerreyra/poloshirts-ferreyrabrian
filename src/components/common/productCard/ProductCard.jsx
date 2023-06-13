import "./ProductCard.Module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento }) => {
  return (
    <Card sx={{ Width: 228 }}>
      <CardMedia
        sx={{ height: 320 }}
        image={elemento.img}
        title={elemento.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {elemento.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {elemento.description}
        </Typography>
      </CardContent>
      <CardActions>
        <h3 size="small">{elemento.price}</h3>
        <Link to={`/itemDetail/${elemento.id}`}>
          <Button size="small">Detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
